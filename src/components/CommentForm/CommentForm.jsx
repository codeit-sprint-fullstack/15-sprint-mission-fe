"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "./CommentForm.css.js";
import { postComment } from "../../api/comment.js";

export default function CommentForm({ id }) {
  const [content, setContent] = useState("");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!content.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      await postComment({ targeType: "articles", targetId: id, content });
      setContent("");
      router.refresh();
    } catch {
      alert("댓글 등록에 실패했습니다.");
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
      <div className={styles.field}>
        <label className={styles.label} htmlFor="comment-content">
          댓글달기
        </label>
        <textarea
          id="comment-content"
          className={styles.input}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="댓글을 입력해주세요."
          required
        />
      </div>
      <button
        className={styles.button}
        type="submit"
        disabled={!content.trim() || isSubmitting}
      >
        {isSubmitting ? "등록 중" : "등록"}
      </button>
    </form>
  );
}
