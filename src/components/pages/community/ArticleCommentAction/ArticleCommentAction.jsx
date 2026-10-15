"use client";

import { articleCommentApi } from "@/components/api/articleCommentApi";
import { ActionMenu } from "@/components/pages/community/ActionMenu";
import { useState } from "react";
import { CommentForm } from "../CommentSection/CommentForm";

export default function ArticleCommentAction({ id, onDeleted }) {
  const [isPatch, setIsPatch] = useState(false);
  const [content, setContent] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleArticleCommentDelete = async (id) => {
    await articleCommentApi.remove(id);
    onDeleted(id);
  };

  const handleArticleCommentUpdate = async (e) => {
    e.preventDefault();
    const parsedContent = content.trim();

    if (!parsedContent) return;
    setSubmitting(true);
    setErrorMessage("");

    try {
      const { data } = await articleCommentApi.patch(id, { content });
      console.log(data.content);
      setContent("");
    } catch (error) {
      console.error("댓글 수정 실패", error);
      setErrorMessage("댓글 삭제에 실패했습니다. 잠시 후에 다시 시도해주세요");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = () => {
    setIsPatch(true);
  };
  return (
    <>
      <ActionMenu
        id={id}
        onDelete={handleArticleCommentDelete}
        onEdit={handleEdit}
      />
      {isPatch && (
        <CommentForm
          commentTitle="댓글 수정"
          content={content}
          setContent={setContent}
          isSubmitting={isSubmitting}
          errorMessage={errorMessage}
          handleSubmit={handleArticleCommentUpdate}
        />
      )}
    </>
  );
}
