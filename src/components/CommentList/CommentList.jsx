"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import replyEmpty from "../../assets/Img_reply_empty.png";
import CommentItem from "./CommentItem";
import * as styles from "./CommentList.css.js";

export default function CommentList({ comments, targetType, targetId }) {
  const [now, setNow] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    const initial = setTimeout(update, 0);
    const interval = setInterval(update, 60_000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  if (comments.length === 0) {
    return (
      <div className={styles.empty}>
        <Image src={replyEmpty} alt="비어있는_댓글" width={140} height={140} />
        <p>아직 댓글이 없어요, 지금 댓글을 달아보세요!</p>
      </div>
    );
  }
  return (
    <ul className={styles.list} aria-label="댓글 목록">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          targetType={targetType}
          targetId={targetId}
          now={now}
          isEditing={editingCommentId === comment.id}
          onStartEdit={() => setEditingCommentId(comment.id)}
          onCancelEdit={() =>
            setEditingCommentId((currentId) =>
              currentId === comment.id ? null : currentId,
            )
          }
        />
      ))}
    </ul>
  );
}
