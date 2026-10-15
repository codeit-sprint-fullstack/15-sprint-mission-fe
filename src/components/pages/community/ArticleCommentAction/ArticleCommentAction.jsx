"use client";

import { articleCommentApi } from "@/components/api/articleCommentApi";
import { ActionMenu } from "@/components/pages/community/ActionMenu";
import { useState } from "react";
import { CommentForm } from "../CommentSection/CommentForm";
import { ErrorMessage } from "@/components/common/ErrorMessage";

export default function ArticleCommentAction({
  id,
  onDeleted,
  onEdit,
  initialContent,
}) {
  const [isPatch, setIsPatch] = useState(false);
  const [content, setContent] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleteSubmitting, setDeleteSubmitting] = useState(false);
  const [errorDeleteMessage, setDeleteErrorMessage] = useState("");

  const handleArticleCommentDelete = async (id) => {
    if (isDeleteSubmitting) return;
    setDeleteSubmitting(true);
    setDeleteErrorMessage("");
    try {
      await articleCommentApi.remove(id);
      onDeleted(id);
    } catch (error) {
      console.error("댓글 삭제 실패", error);
      setDeleteErrorMessage(
        "댓글 삭제에 실패했습니다. 잠시 후에 다시 시도해주세요",
      );
    } finally {
      setDeleteSubmitting(false);
    }
  };

  const handleArticleCommentUpdate = async (e) => {
    e.preventDefault();
    const parsedContent = content.trim();

    if (!parsedContent || isSubmitting) return;
    setSubmitting(true);
    setErrorMessage("");

    try {
      const { data } = await articleCommentApi.patch(id, {
        content: parsedContent,
      });
      onEdit(data);
      console.log(data.content);
      setContent("");
      setIsPatch(false);
    } catch (error) {
      console.error("댓글 수정 실패", error);
      setErrorMessage("댓글 수정에 실패했습니다. 잠시 후에 다시 시도해주세요");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = () => {
    setIsPatch(true);
    setContent(initialContent);
  };
  return (
    <div style={{ position: "relative" }}>
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
      {errorDeleteMessage && <ErrorMessage errorMessage={errorDeleteMessage} />}
    </div>
  );
}
