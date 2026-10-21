"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProduct } from "@/apis";
import { useProductForm } from "@/domains/market/hooks/useProductForm";
import * as s from "./RegistrationPage.css";

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

  const isTagInputTooLong = tagInput.length > 5;

  const handleTagKeyDown = (event) => {
    if (event.key !== "Enter") return;
    if (event.nativeEvent.isComposing) return;
    event.preventDefault();
    if (addTag(tagInput)) setTagInput("");
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
      const product = await createProduct(payload);
      router.push(`/items/${product.id ?? product._id}`);
    } catch {
      alert("상품 등록에 실패했습니다.");
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

        <label className={s.field}>
          <span className={s.label}>상품명</span>
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
          <span className={s.label}>상품 소개</span>
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
