"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import icProfile from "@/assets/images/ic-profile.svg";
import { formatTimeAgo } from "@/lib/utils/formatTimeAgo";
import ActionMenu from "@/components/common/ActionMenu/ActionMenu";
import { deleteComment, updateComment } from "@/lib/api/commentsAPI";
import * as styles from "./CommentCard.css";

const author = "똑똑한판다";

export default function CommentCard({ comment }) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment.content);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    const trimmedContent = content.trim();
    if (!trimmedContent) return;

    setIsSaving(true);
    try {
      await updateComment(comment.id, { content: trimmedContent });
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    await deleteComment(comment.id);
    router.refresh();
  };

  return (
    <article className={styles.card}>
      {isEditing ? (
        <div className={styles.editBox}>
          <textarea
            className={styles.editTextarea}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            aria-label="댓글 수정"
          />
          <div className={styles.editActions}>
            <button
              className={styles.cancelEditButton}
              type="button"
              onClick={() => {
                setContent(comment.content);
                setIsEditing(false);
              }}
            >
              취소
            </button>
            <button
              className={styles.saveEditButton}
              type="button"
              disabled={!content.trim() || isSaving}
              onClick={handleSave}
            >
              {isSaving ? "저장 중..." : "수정 완료"}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.commentHeaderBox}>
        <p className={styles.content}>{comment.content}</p>
        <ActionMenu
          label="댓글 메뉴"
          onEdit={() => setIsEditing(true)}
          onDelete={handleDelete}
          deleteErrorMessage="댓글 삭제에 실패했어요."
        />
        </div>
      )}

      <div className={styles.profileInfo}>
        <div className={styles.profileDetails}>
          <Image src={icProfile} alt="프로필 아이콘" width={24} height={24} />
          <div className={styles.authorAndTimeBox}>
            <span className={styles.author}>{author}</span>
            {comment.createdAt && (
              <time className={styles.date} dateTime={comment.createdAt}>
                {formatTimeAgo(comment.createdAt)}
              </time>
            )}
          </div>
        </div>
        
      </div>
    </article>
  );
}
