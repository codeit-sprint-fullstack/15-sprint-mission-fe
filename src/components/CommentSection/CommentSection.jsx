"use client";

import { use, useState } from "react";
import { CommentList } from "../CommentList";
import { CommentPosting } from "../CommentPosting";

export default function CommentSection({ articleId, commentPromise }) {
  const response = use(commentPromise);
  const [comment, setComment] = useState(response.data.data);

  const handleNewComment = (newComment) => {
    setComment((prev) => [newComment, ...prev]);
  };
  //-> CommentPosting으로 부터 받은 새 댓글 데이터를 기존 댓글의 앞에 배치

  return (
    <div className="container">
      <CommentPosting articleId={articleId} onCommentAdded={handleNewComment} />
      <CommentList comments={comment} />
    </div>
  );
}
