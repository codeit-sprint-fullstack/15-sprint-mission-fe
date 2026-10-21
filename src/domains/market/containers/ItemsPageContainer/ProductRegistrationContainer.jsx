"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { createProduct, uploadImage } from "@/apis";
import { getErrorMessage } from "@/apis/httpClient";
import { CharCount } from "@/components/CharCount";
import { labelRow } from "@/components/CharCount/CharCount.css";
import { TEXT_LIMIT } from "@/constants/limits";
import { useProductForm } from "@/domains/market/hooks/useProductForm";
import * as s from "./RegistrationPage.css";

const MAX_IMAGES = 3;

export function ProductRegistrationContainer() {
  const router = useRouter();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    addTag,
    removeTag,
    isSubmitDisabled,
  } = useProductForm();

  const [tagInput, setTagInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState(false);
  const fileRef = useRef(null);

  const isTagInputTooLong = tagInput.length > 5;

  const handleTagKeyDown = (event) => {
    if (event.key !== "Enter") return;
    if (event.nativeEvent.isComposing) return;
    event.preventDefault();
    if (addTag(tagInput)) setTagInput("");
  };

  const openFilePicker = () => {
    if (images.length >= MAX_IMAGES) {
      setImageError(true);
      return;
    }
    fileRef.current?.click();
  };

  const handleFiles = (event) => {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (files.length === 0) return;

    const room = MAX_IMAGES - images.length;
    if (files.length > room) setImageError(true);
    else setImageError(false);

    const added = files.slice(0, room).map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...added]);
  };

  const removeImage = (id) => {
    setImages((prev) => {
      const target = prev.find((image) => image.id === id);
      if (target?.file) URL.revokeObjectURL(target.url);
      return prev.filter((image) => image.id !== id);
    });
    setImageError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting || isSubmitDisabled) return;

    const payload = {
      name: values.name,
      description: values.description,
      price: Number(values.price),
      tags: values.tags,
    };

    try {
      setIsSubmitting(true);
      const urls = await Promise.all(
        images.map((image) =>
          image.file ? uploadImage(image.file) : Promise.resolve(image.url),
        ),
      );
      await createProduct({ ...payload, images: urls });
      images.forEach((image) => image.file && URL.revokeObjectURL(image.url));
      router.push("/items");
    } catch (error) {
      alert(getErrorMessage(error, "상품 등록에 실패했습니다."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={s.registration}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.header}>
          <h2 className={s.title}>상품 등록하기</h2>
          <button
            type="submit"
            className={s.submit}
            disabled={isSubmitting || isSubmitDisabled}
          >
            등록
          </button>
        </div>

        <div className={s.field}>
          <span className={s.label}>상품 이미지</span>
          <div className={s.images}>
            <button type="button" className={s.upload} onClick={openFilePicker}>
              <Image src="/assets/icons/ic_plus.svg" alt="" width={56} height={56} />
              <span>이미지 등록</span>
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleFiles}
            />
            {images.map((image) => (
              <div key={image.id} className={s.preview}>
                <img
                  src={image.url}
                  alt="상품 이미지 미리보기"
                  className={s.previewImg}
                />
                <button
                  type="button"
                  className={s.removeImage}
                  aria-label="이미지 삭제"
                  onClick={() => removeImage(image.id)}
                >
                  <Image
                    src="/assets/icons/ic_x_image.svg"
                    alt=""
                    width={22}
                    height={24}
                  />
                </button>
              </div>
            ))}
          </div>
          {imageError && (
            <span className={s.imageError}>
              *이미지 등록은 최대 {MAX_IMAGES}개까지 가능합니다.
            </span>
          )}
        </div>

        <label className={s.field}>
          <span className={labelRow}>
            <span className={s.label}>상품명</span>
            <CharCount value={values.name} max={TEXT_LIMIT.productName} />
          </span>
          <input
            className={errors.name ? `${s.input} ${s.inputError}` : s.input}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="상품명을 입력해주세요"
          />
          {touched.name && errors.name && (
            <span className={s.error}>{errors.name}</span>
          )}
        </label>

        <label className={s.field}>
          <span className={labelRow}>
            <span className={s.label}>상품 소개</span>
            <CharCount value={values.description} max={TEXT_LIMIT.productDescription} />
          </span>
          <textarea
            className={
              errors.description
                ? `${s.textarea} ${s.textareaError}`
                : s.textarea
            }
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="상품 소개를 입력해주세요"
          />
          {touched.description && errors.description && (
            <span className={s.error}>{errors.description}</span>
          )}
        </label>

        <label className={s.field}>
          <span className={s.label}>판매 가격</span>
          <input
            className={errors.price ? `${s.input} ${s.inputError}` : s.input}
            name="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="판매 가격을 입력해주세요"
            inputMode="numeric"
          />
          {touched.price && errors.price && (
            <span className={s.error}>{errors.price}</span>
          )}
        </label>

        <label className={s.field}>
          <span className={s.label}>태그</span>
          <input
            className={
              isTagInputTooLong ? `${s.input} ${s.inputError}` : s.input
            }
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="태그를 입력 후 Enter를 눌러주세요"
          />
          {isTagInputTooLong && (
            <span className={s.error}>태그는 5자 이내로 입력해주세요.</span>
          )}
          {!isTagInputTooLong && errors.tags && (
            <span className={s.error}>{errors.tags}</span>
          )}
          {values.tags.length > 0 && (
            <div className={s.tags}>
              {values.tags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  className={s.tag}
                  onClick={() => removeTag(tag)}
                >
                  <span className={s.tagHash}>#</span>
                  {tag}
                  <Image
                    src="/assets/icons/ic_X.svg"
                    alt="태그 삭제"
                    width={12}
                    height={12}
                    className={s.tagRemove}
                  />
                </button>
              ))}
            </div>
          )}
        </label>
      </form>
    </section>
  );
}
