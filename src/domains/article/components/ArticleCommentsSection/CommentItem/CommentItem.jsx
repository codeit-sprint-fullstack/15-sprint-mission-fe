"use client";

import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/domains/auth/hooks/useAuth";
import { formatDate } from "@/utils";
import { CharCount } from "@/components/CharCount";
import { belowRow } from "@/components/CharCount/CharCount.css";
import { TEXT_LIMIT } from "@/constants/limits";
import { Kebab } from "@/domains/article/components/Kebab";
import { avatar, btn, field } from "@/styles/shared.css";
import {
  cmt,
  cmtCancel,
  cmtText,
  cmtWho,
  cmtWhoSmall,
  commentEdit,
  row,
} from "@/domains/article/containers/ArticleDetailContainer/ArticleDetailContainer.css";

const DEFAULT_NICKNAME = "판다";
const DEFAULT_AVATAR = "/assets/board/ic_profile.svg";

export function CommentItem({ comment, onSave, onDelete }) {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.content);

  const nickname = comment.writer?.nickname ?? DEFAULT_NICKNAME;
  const avatarSrc = comment.writer?.image ?? DEFAULT_AVATAR;
  const canManage = comment.writer?.id != null && user?.id === comment.writer.id;

  const cancel = () => {
    setText(comment.content);
    setEditing(false);
  };
  const save = async () => {
    await onSave(text.trim());
    setEditing(false);
  };

  if (editing) {
    return (
      <div className={cmt}>
        <textarea
          className={`${field} ${commentEdit}`}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <div className={belowRow}>
          <CharCount value={text} max={TEXT_LIMIT.comment} />
        </div>
        <div className={row}>
          <span className={cmtWho}>
            <Image
              src={avatarSrc}
              alt=""
              width={24}
              height={24}
              className={avatar}
            />
            {nickname}
          </span>
          <span>
            <button type="button" className={cmtCancel} onClick={cancel}>
              취소
            </button>
            <button
              type="button"
              className={btn}
              disabled={!text.trim() || text.length > TEXT_LIMIT.comment}
              onClick={save}
            >
              수정 완료
            </button>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cmt}>
      <div className={row}>
        <p className={cmtText}>{comment.content}</p>
        {canManage && <Kebab onEdit={() => setEditing(true)} onDelete={onDelete} />}
      </div>
      <div className={cmtWho}>
        <Image
          src={avatarSrc}
          alt=""
          width={24}
          height={24}
          className={avatar}
        />
        <span>
          {nickname}
          <span className={cmtWhoSmall}>{formatDate(comment.createdAt)}</span>
        </span>
      </div>
    </div>
  );
}
