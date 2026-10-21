"use client";

import Image from "next/image";
import { CharCount } from "@/components/CharCount";
import { labelRow } from "@/components/CharCount/CharCount.css";
import { TEXT_LIMIT } from "@/constants/limits";
import { resolveImageUrl } from "@/domains/market/utils/productImage";
import { board, btn, field, head, heading } from "@/styles/shared.css";
import {
  fieldArea,
  fieldInput,
  imageErrorText,
  images as imageGrid,
  label,
  preview,
  previewImg,
  remove,
  upload,
} from "@/domains/article/containers/ArticleEditorContainer/ArticleEditorContainer.css";

export function ArticleEditorForm({
  heading: headingText,
  title,
  content,
  onTitleChange,
  onContentChange,
  submitLabel = "등록",
  isSubmitting = false,
  errorMessage = "",
  onSubmit,
  images = [],
  fileRef,
  openFilePicker,
  handleFiles,
  removeImage,
  imageError = false,
}) {
  const isTitleOver = title.length > TEXT_LIMIT.articleTitle;
  const isContentOver = content.length > TEXT_LIMIT.articleContent;
  const canSubmit = Boolean(
    title.trim() &&
      content.trim() &&
      !isTitleOver &&
      !isContentOver &&
      !isSubmitting,
  );

  return (
    <section className={board}>
      <div className={head}>
        <h2 className={heading}>{headingText}</h2>
        <button
          type="button"
          className={btn}
          disabled={!canSubmit}
          onClick={onSubmit}
        >
          {submitLabel}
        </button>
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      <span className={labelRow}>
        <label className={label} htmlFor="title">
          *제목
        </label>
        <CharCount value={title} max={TEXT_LIMIT.articleTitle} />
      </span>
      <input
        id="title"
        className={`${field} ${fieldInput}`}
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      />
      {isTitleOver && (
        <span className={imageErrorText}>
          *제목은 {TEXT_LIMIT.articleTitle}자 이내로 입력해주세요.
        </span>
      )}

      <span className={labelRow}>
        <label className={label} htmlFor="content">
          *내용
        </label>
        <CharCount value={content} max={TEXT_LIMIT.articleContent} />
      </span>
      <textarea
        id="content"
        className={`${field} ${fieldArea}`}
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(event) => onContentChange(event.target.value)}
      />
      {isContentOver && (
        <span className={imageErrorText}>
          *내용은 {TEXT_LIMIT.articleContent}자 이내로 입력해주세요.
        </span>
      )}

      <div>
        <span className={label}>게시글 이미지</span>
        <div className={imageGrid}>
          <button type="button" className={upload} onClick={openFilePicker}>
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
            <div key={image.id} className={preview}>
              <img
                src={image.file ? image.url : resolveImageUrl(image.url)}
                alt="게시글 이미지 미리보기"
                className={previewImg}
              />
              <button
                type="button"
                className={remove}
                aria-label="이미지 삭제"
                onClick={() => removeImage(image.id)}
              />
            </div>
          ))}
        </div>
        {imageError && (
          <span className={imageErrorText}>
            *이미지 등록은 최대 3개까지 가능합니다.
          </span>
        )}
      </div>
    </section>
  );
}
