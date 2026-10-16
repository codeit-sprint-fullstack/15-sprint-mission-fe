"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { postComment } from "@/lib/api/commentsAPI";
import * as styles from "./articleDetailPage.css";

export default function CommentForm({ articleId }) {
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const trimmedContent = content.trim();
    if (!trimmedContent) return;

    try {
      await postComment(articleId, { content: trimmedContent });
      setContent("");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="comment-content">
        댓글달기
      </label>
      <textarea
        id="comment-content"
        className={styles.textarea}
        placeholder="댓글을 입력해주세요."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button
        className={styles.commentSubmitButton}
        type="button"
        disabled={!content.trim()}
        onClick={handleSubmit}
      >
        등록
      </button>
    </form>
  );
}
