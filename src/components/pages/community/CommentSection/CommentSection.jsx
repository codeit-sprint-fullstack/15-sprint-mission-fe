"use client";

import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { articleCommentApi } from "@/components/api/articleCommentApi";
import { useState } from "react";

export default function CommentSection({
  articleId,
  initCommentList,
  initCursorId,
}) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [cursorId, setCursorId] = useState(initCursorId);
  const [commentList, setCommentList] = useState(initCommentList);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedContent = content.trim();

    if (!parsedContent || parsedContent.length > 200 || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const { data } = await articleCommentApi.post({
        articleId,
        content: parsedContent,
      });
      setContent("");
      // console.log(data.content);
      setCommentList((prev) => [data, ...prev]);
    } catch (error) {
      console.error("댓글 달기 실패", error);
      setErrorMessage("댓글 등록에 실패했습니다. 잠시 후에 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMoreCommentList = async () => {
    try {
      const { data: newCommentList, nextCursor } =
        await articleCommentApi.getList({
          articleId,
          cursorId,
        });
      setCommentList((prev) => [...newCommentList, ...prev]);
      setCursorId(nextCursor);
    } catch (error) {
      console.error("더보기 목록을 불러오는 데 실패했습니다.", error);
    }
  };

  const handleDeleted = (id) => {
    setCommentList((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div>
      <CommentForm
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        setContent={setContent}
        content={content}
      />

      <CommentList
        key={articleId}
        commentList={commentList}
        cursorId={cursorId}
        handleDeleted={handleDeleted}
        getMoreCommentList={getMoreCommentList}
      />
    </div>
  );
}
