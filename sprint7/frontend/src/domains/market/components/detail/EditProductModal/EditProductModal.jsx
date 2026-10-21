"use client";

import { useForm } from "react-hook-form";
import { Modal } from "@/components/Modal";
import * as styles from "./EditProductModal.css";

export function EditProductModal({ product, isSaving, errorMessage, onClose, onSubmit }) {
  const {
    register,
    handleSubmit,
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

  const submit = (values) => {
    onSubmit({
      name: values.name.trim(),
      price: Number(values.price),
      description: values.description.trim(),
      tags: values.tags
        .split(/[,\s]+/)
        .map((tag) => tag.replace(/^#/, "").trim())
        .filter(Boolean),
      images: product.images ?? [],
    });
  };

  return (
    <Modal open onClose={onClose}>
      <form className={styles.form} onSubmit={handleSubmit(submit)} noValidate>
        <h2 className={styles.heading}>상품 수정하기</h2>

        <label className={styles.field}>
          <span className={styles.fieldLabel}>상품명</span>
          <input
            className={styles.input}
            {...register("name", { required: "상품명을 입력해주세요." })}
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
          <span className={styles.fieldLabel}>상품 소개</span>
          <textarea
            className={styles.textarea}
            {...register("description", { required: "상품 소개를 입력해주세요." })}
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

        {errorMessage && <p className={styles.serverError}>{errorMessage}</p>}

        <div className={styles.buttons}>
          <button type="button" className={styles.cancel} onClick={onClose}>
            취소
          </button>
          <button type="submit" className={styles.save} disabled={!isValid || isSaving}>
            수정 완료
          </button>
        </div>
      </form>
    </Modal>
  );
}