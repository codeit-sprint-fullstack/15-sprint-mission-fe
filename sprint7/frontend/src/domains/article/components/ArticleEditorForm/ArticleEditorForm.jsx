"use client";

import { board, btn, field, head, heading } from "@/styles/shared.css";
import {
  fieldArea,
  fieldInput,
  label,
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
}) {
  const canSubmit = Boolean(title.trim() && content.trim() && !isSubmitting);

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

      <label className={label} htmlFor="title">
        *제목
      </label>
      <input
        id="title"
        className={`${field} ${fieldInput}`}
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      />

      <label className={label} htmlFor="content">
        *내용
      </label>
      <textarea
        id="content"
        className={`${field} ${fieldArea}`}
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(event) => onContentChange(event.target.value)}
      />
    </section>
  );
}
