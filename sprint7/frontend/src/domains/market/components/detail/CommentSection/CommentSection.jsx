"use client";

import { useState } from "react";
import Image from "next/image";
import { AlertModal } from "@/components/Modal";
import { ErrorMessage, LoadingIndicator } from "@/domains/market/components/Status";
import {
  useComments,
  useCreateComment,
  useDeleteComment,
  useUpdateComment,
} from "@/domains/market/hooks/useProductQueries";
import { getErrorMessage } from "@/apis/httpClient";
import { CommentItem } from "./CommentItem";
import * as styles from "./CommentSection.css";

const PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

export function CommentSection({ productId }) {
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const commentsQuery = useComments(productId);
  const createMutation = useCreateComment(productId);
  const updateMutation = useUpdateComment(productId);
  const deleteMutation = useDeleteComment(productId);

  const comments = commentsQuery.data?.list ?? [];
  const canSubmit = content.trim().length > 0 && !createMutation.isPending;

  const handleCreate = (event) => {
    event.preventDefault();
    if (!canSubmit) return;
    createMutation.mutate(content.trim(), {
      onSuccess: () => setContent(""),
      onError: (error) => setAlertMessage(getErrorMessage(error, "문의를 등록하지 못했어요.")),
    });
  };

  const handleUpdate = (commentId, newContent) => {
    updateMutation.mutate(
      { commentId, content: newContent },
      {
        onSuccess: () => setEditingId(null),
        onError: (error) => setAlertMessage(getErrorMessage(error, "문의를 수정하지 못했어요.")),
      },
    );
  };

  const handleDelete = (commentId) => {
    deleteMutation.mutate(commentId, {
      onError: (error) => setAlertMessage(getErrorMessage(error, "문의를 삭제하지 못했어요.")),
    });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>문의하기</h2>

      <form onSubmit={handleCreate}>
        <textarea
          className={styles.textarea}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder={PLACEHOLDER}
          aria-label="문의 내용"
        />
        <div className={styles.submitRow}>
          <button type="submit" className={styles.submit} disabled={!canSubmit}>
            등록
          </button>
        </div>
      </form>

      {commentsQuery.isError ? (
        <ErrorMessage message="문의를 불러오지 못했어요." onRetry={() => commentsQuery.refetch()} />
      ) : commentsQuery.isPending ? (
        <LoadingIndicator />
      ) : comments.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyImage}>
            <Image
              src="/images/empty-pc.svg"
              alt=""
              width={133}
              height={124}
              className={styles.emptyPc}
            />
            <Image
              src="/images/empty-mobile.svg"
              alt=""
              width={95}
              height={89}
              className={styles.emptyMobile}
            />
          </div>
          <p>아직 문의가 없어요</p>
        </div>
      ) : (
        <ul>
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              isEditing={editingId === comment.id}
              isSaving={updateMutation.isPending}
              onStartEdit={() => setEditingId(comment.id)}
              onCancelEdit={() => setEditingId(null)}
              onSave={(newContent) => handleUpdate(comment.id, newContent)}
              onDelete={() => handleDelete(comment.id)}
            />
          ))}
        </ul>
      )}

      {alertMessage && <AlertModal message={alertMessage} onClose={() => setAlertMessage("")} />}
    </section>
  );
}