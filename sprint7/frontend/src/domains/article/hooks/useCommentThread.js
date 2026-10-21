"use client";

import { useCallback, useState } from "react";
import { createComment, deleteComment, updateComment } from "@/apis";

export function useCommentThread(articleId, initialComments = []) {
  const [comments, setComments] = useState(initialComments);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const run = useCallback(async (task) => {
    setIsPending(true);
    setError(null);
    try {
      await task();
    } catch (err) {
      setError(err.message ?? "요청에 실패했습니다.");
    } finally {
      setIsPending(false);
    }
  }, []);

  const handleCreate = useCallback(() => {
    const content = draft.trim();
    if (content.length === 0) return;
    run(async () => {
      const created = await createComment(articleId, content);
      setComments((prev) => [created, ...prev]);
      setDraft("");
    });
  }, [articleId, draft, run]);

  const handleEdit = useCallback(
    (commentId, content) => {
      run(async () => {
        const updated = await updateComment(commentId, content);
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === commentId
              ? { ...comment, content: updated?.content ?? content }
              : comment,
          ),
        );
      });
    },
    [run],
  );

  const handleDelete = useCallback(
    (commentId) => {
      run(async () => {
        await deleteComment(commentId);
        setComments((prev) =>
          prev.filter((comment) => comment.id !== commentId),
        );
      });
    },
    [run],
  );

  return {
    comments,
    draft,
    setDraft,
    error,
    isPending,
    handleCreate,
    handleEdit,
    handleDelete,
  };
}
