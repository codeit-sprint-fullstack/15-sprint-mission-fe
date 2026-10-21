"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { uploadImage } from "@/apis";
import { getErrorMessage } from "@/apis/httpClient";
import { CharCount } from "@/components/CharCount";
import { labelRow } from "@/components/CharCount/CharCount.css";
import { Modal } from "@/components/Modal";
import { TEXT_LIMIT } from "@/constants/limits";
import { resolveImageUrl } from "@/domains/market/utils/productImage";
import * as styles from "./EditProductModal.css";

const MAX_IMAGES = 3;

export function EditProductModal({ product, isSaving, errorMessage, onClose, onSubmit }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: product.name ?? "",
      price: product.price ?? "",
      description: product.description ?? "",
      tags: (product.tags ?? []).join(", "),
    },
  });

  const nameValue = useWatch({ control, name: "name" }) ?? "";
  const descriptionValue = useWatch({ control, name: "description" }) ?? "";

  const [images, setImages] = useState(
    () => (product.images ?? []).map((url, index) => ({ id: `init-${index}`, url })),
  );
  const [imageError, setImageError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef(null);

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

  const submit = async (values) => {
    if (isUploading) return;

    setIsUploading(true);
    try {
      const urls = await Promise.all(
        images.map((image) =>
          image.file ? uploadImage(image.file) : Promise.resolve(image.url),
        ),
      );

      onSubmit({
        name: values.name.trim(),
        price: Number(values.price),
        description: values.description.trim(),
        tags: values.tags
          .split(/[,\s]+/)
          .map((tag) => tag.replace(/^#/, "").trim())
          .filter(Boolean),
        images: urls,
      });
    } catch (error) {
      alert(
        getErrorMessage(error, "이미지 업로드에 실패했어요. 잠시 후 다시 시도해주세요."),
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Modal open onClose={onClose}>
      <form className={styles.form} onSubmit={handleSubmit(submit)} noValidate>
        <h2 className={styles.heading}>상품 수정하기</h2>

        <label className={styles.field}>
          <span className={labelRow}>
            <span className={styles.fieldLabel}>상품명</span>
            <CharCount value={nameValue} max={TEXT_LIMIT.productName} />
          </span>
          <input
            className={styles.input}
            {...register("name", {
              required: "상품명을 입력해주세요.",
              maxLength: {
                value: TEXT_LIMIT.productName,
                message: `상품명은 ${TEXT_LIMIT.productName}자 이내로 입력해주세요.`,
              },
            })}
            placeholder="상품명을 입력해주세요"
          />
          {errors.name && <em className={styles.error}>{errors.name.message}</em>}
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>판매 가격</span>
          <input
            type="number"
            inputMode="numeric"
            className={styles.input}
            {...register("price", {
              required: "판매 가격을 입력해주세요.",
              min: { value: 0, message: "가격은 0원 이상이어야 해요." },
            })}
            placeholder="판매 가격을 입력해주세요"
          />
          {errors.price && <em className={styles.error}>{errors.price.message}</em>}
        </label>

        <label className={styles.field}>
          <span className={labelRow}>
            <span className={styles.fieldLabel}>상품 소개</span>
            <CharCount value={descriptionValue} max={TEXT_LIMIT.productDescription} />
          </span>
          <textarea
            className={styles.textarea}
            {...register("description", {
              required: "상품 소개를 입력해주세요.",
              maxLength: {
                value: TEXT_LIMIT.productDescription,
                message: `상품 소개는 ${TEXT_LIMIT.productDescription}자 이내로 입력해주세요.`,
              },
            })}
            placeholder="상품 소개를 입력해주세요"
          />
          {errors.description && <em className={styles.error}>{errors.description.message}</em>}
        </label>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>태그</span>
          <input
            className={styles.input}
            {...register("tags")}
            placeholder="쉼표나 띄어쓰기로 구분해주세요 (예: 아이패드, 애플)"
          />
        </label>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>상품 이미지</span>
          <div className={styles.imageArea}>
            <button
              type="button"
              className={styles.uploadTile}
              onClick={openFilePicker}
            >
              <Image src="/assets/icons/ic_plus.svg" alt="" width={32} height={32} />
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
              <div key={image.id} className={styles.previewTile}>
                <img
                  src={image.file ? image.url : resolveImageUrl(image.url)}
                  alt="상품 이미지 미리보기"
                  className={styles.previewImg}
                />
                <button
                  type="button"
                  className={styles.removeTile}
                  aria-label="이미지 삭제"
                  onClick={() => removeImage(image.id)}
                >
                  <Image
                    src="/assets/icons/ic_x_image.svg"
                    alt=""
                    width={18}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
          {imageError && (
            <em className={styles.error}>
              *이미지 등록은 최대 {MAX_IMAGES}개까지 가능합니다.
            </em>
          )}
        </div>

        {errorMessage && <p className={styles.serverError}>{errorMessage}</p>}

        <div className={styles.buttons}>
          <button type="button" className={styles.cancel} onClick={onClose}>
            취소
          </button>
          <button
            type="submit"
            className={styles.save}
            disabled={!isValid || isSaving || isUploading}
          >
            수정 완료
          </button>
        </div>
      </form>
    </Modal>
  );
}
