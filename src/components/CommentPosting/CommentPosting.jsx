"use client";

import { useState } from "react";
import * as styles from "./CommentPosting.css.js";

export default function CommentPosting({ articleId, onCommentAdded }) {
  const [input, setInput] = useState("");
  //submit 할 때 post api를 불러와야됨
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input) {
      alert("내용을 입력해주세요");
      return;
    }

    const refineContent = input.trim();

    setSubmitting(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articleId,
          content: refineContent,
          writerId: 136, //로그인 기능 아직 미구현 -> 하드코딩
        }),
      });

      if (!response.ok) {
        throw new Error("댓글 등록에 실패했습니다.");
      }

      const result = await response.json();
      onCommentAdded?.(result.data); //-> 새 댓글 바로 갱신 부모로 props로 전달

      setInput("");
    } catch (error) {
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="content" className={styles.goComment}>
        댓글달기
      </label>
      <textarea
        id="content"
        value={input}
        className={styles.content}
        placeholder="댓글을 입력해주세요"
        onChange={(event) => setInput(event.target.value)}
      />
      <div className={styles.locateBtn}>
        <button
          type="submit"
          className={styles.registerBtn}
          disabled={!input.trim() || submitting}
        >
          등록
        </button>
      </div>
    </form>
  );
}
