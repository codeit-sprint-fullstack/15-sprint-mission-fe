"use client";

import Image from "next/image";
import { useState } from "react";
import { formatDate } from "@/utils";
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

export function CommentItem({ comment, onSave, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.content);

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
        <div className={row}>
          <span className={cmtWho}>
            <Image
              src="/assets/board/ic_profile.svg"
              alt=""
              width={24}
              height={24}
              className={avatar}
            />
            똑똑한판다
          </span>
          <span>
            <button type="button" className={cmtCancel} onClick={cancel}>
              취소
            </button>
            <button
              type="button"
              className={btn}
              disabled={!text.trim()}
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
        <Kebab onEdit={() => setEditing(true)} onDelete={onDelete} />
      </div>
      <div className={cmtWho}>
        <Image
          src="/assets/board/ic_profile.svg"
          alt=""
          width={24}
          height={24}
          className={avatar}
        />
        <span>
          똑똑한판다
          <span className={cmtWhoSmall}>{formatDate(comment.createdAt)}</span>
        </span>
      </div>
    </div>
  );
}
