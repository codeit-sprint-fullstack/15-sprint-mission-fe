"use client";

import { useState } from "react";
import * as styles from "./ArticleForm.css.js";

export default function ArticleForm({
  initialValues,
  heading,
  submitLabel,
  onSubmit,
}) {
  const [title, setTitle] = useState(initialValues?.title ?? "");
  const [content, setContent] = useState(initialValues?.content ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({ title: title.trim(), content: content.trim() });
    } catch (error) {
      console.error(error);
      alert("게시글 저장에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <div className={styles.header}>
        <h1 className={styles.heading}>{heading}</h1>
        <button
          className={styles.submit}
          type="submit"
          disabled={!title.trim() || !content.trim() || isSubmitting}
        >
          {isSubmitting ? "저장 중" : submitLabel}
        </button>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="article-title">
            *제목
          </label>
          <input
            className={styles.input}
            id="article-title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="article-content">
            *내용
          </label>
          <textarea
            className={styles.textarea}
            id="article-content"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
        </div>
      </div>
    </form>
  );
}
