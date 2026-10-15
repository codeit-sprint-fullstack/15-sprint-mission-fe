"use client";

import { articleCommentApi } from "@/components/api/articleCommentApi";
import styles from "./CommentForm.module.css";
import { useState } from "react";
import { ErrorMessage } from "@/components/common/ErrorMessage";

export default function CommentForm({ articleId }) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedContent = content.trim();

    if (!parsedContent || parsedContent.length > 200 || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await articleCommentApi.post({
        articleId,
        content: parsedContent,
      });
      setContent("");
    } catch (error) {
      console.error("댓글 달기 실패", error);
      setErrorMessage("댓글 문제");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <label htmlFor="commentInput" className={styles.commentLabel}>
        댓글달기
      </label>
      <input
        id="commentInput"
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
