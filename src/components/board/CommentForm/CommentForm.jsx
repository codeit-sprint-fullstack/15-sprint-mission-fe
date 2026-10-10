"use client";

import { useState } from "react";

export default function CommentForm() {
  const [comment, setComment] = useState("");

  const isValid = comment.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) return;

    // TODO: 댓글 등록 API 연결 (백엔드 구현 후)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">댓글달기</label>
      <textarea
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="댓글을 입력해주세요."
      />
      <button type="submit" disabled={!isValid}>
        등록
      </button>
    </form>
  );
}
