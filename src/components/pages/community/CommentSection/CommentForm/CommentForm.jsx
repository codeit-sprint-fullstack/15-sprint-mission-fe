"use client";

import { useId } from "react";
import styles from "./CommentForm.module.css";

import { ErrorMessage } from "@/components/common/ErrorMessage";

export default function CommentForm({
  errorMessage,
  handleSubmit,
  isSubmitting,
  setContent,
  content,
  commentTitle = "댓글달기",
}) {
  const inputId = useId();

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <label htmlFor={inputId} className={styles.commentLabel}>
        {commentTitle}
      </label>
      <input
        id={inputId}
        name="content"
        type="text"
        placeholder="댓글을 입력해주세요"
        className={styles.commentInput}
        required
        maxLength={200}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className={styles.commentSubmit}
        type="submit"
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? "등록 중..." : "등록"}
      </button>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </form>
  );
}
