"use client";

import { useState } from "react";
import Image from "next/image";
import { CharCount } from "@/components/CharCount";
import { belowRow } from "@/components/CharCount/CharCount.css";
import { KebabMenu } from "@/components/KebabMenu";
import { TEXT_LIMIT } from "@/constants/limits";
import { timeAgo } from "@/utils";
import * as styles from "./CommentSection.css";

export function CommentItem({
  comment,
  isEditing,
  isSaving,
  onStartEdit,
  onCancelEdit,
  onSave,
  onDelete,
}) {
  const [draft, setDraft] = useState(comment.content);
  const writer = comment.writer ?? {};

  const author = (
    <div className={`${styles.author} ${isEditing ? styles.authorFlat : ""}`}>
      <Image
        src={writer.image || "/images/profile-32.svg"}
        alt=""
        width={32}
        height={32}
        className={styles.avatar}
      />
      <div>
        <p className={styles.nickname}>{writer.nickname}</p>
        <p className={styles.time}>{timeAgo(comment.updatedAt ?? comment.createdAt)}</p>
      </div>
    </div>
  );

  if (isEditing) {
    const canSave =
      draft.trim().length > 0 &&
      draft.trim() !== comment.content &&
      draft.length <= TEXT_LIMIT.comment &&
      !isSaving;
    return (
      <li className={`${styles.item} ${styles.editing}`}>
        <textarea
          className={styles.editTextarea}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          aria-label="문의 수정"
          autoFocus
        />
        <div className={belowRow}>
          <CharCount value={draft} max={TEXT_LIMIT.comment} />
        </div>
        <div className={styles.editRow}>
          {author}
          <div className={styles.editButtons}>
            <button
              type="button"
              className={styles.cancel}
              onClick={() => {
                setDraft(comment.content);
                onCancelEdit();
              }}
            >
              취소
            </button>
            <button
              type="button"
              className={styles.save}
              disabled={!canSave}
              onClick={() => onSave(draft.trim())}
            >
              수정 완료
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={styles.item}>
      <div className={styles.contentRow}>
        <p className={styles.content}>{comment.content}</p>
        <KebabMenu
          label="문의 더보기"
          onEdit={() => {
            setDraft(comment.content);
            onStartEdit();
          }}
          onDelete={onDelete}
        />
      </div>
      {author}
    </li>
  );
}