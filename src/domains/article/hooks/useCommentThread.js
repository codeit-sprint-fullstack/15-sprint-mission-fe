"use client";

import { useCallback, useState } from "react";
import { createComment, deleteComment, updateComment } from "@/apis";
import { useAuth } from "@/domains/auth/hooks/useAuth";

export function useCommentThread(articleId, initialComments = []) {
  const { user } = useAuth();
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
      const writer =
        created?.writer ??
        (user ? { id: user.id, nickname: user.nickname, image: user.image } : null);
      setComments((prev) => [{ ...created, writer }, ...prev]);
      setDraft("");
    });
  }, [articleId, draft, run, user]);

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
