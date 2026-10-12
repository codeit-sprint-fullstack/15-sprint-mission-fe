"use client";

import Image from "next/image";
import replyEmpty from "@/assets/icons/Img_reply_empty.svg";
import { formatRelativeTime } from "@/utils/relativeTime";
import { useState } from "react";
import { articleCommentApi } from "../api/articleCommentApi";
import styles from "./CommentList.module.css";
import defaultImage from "@/assets/default-profile.svg";
import ArticleCommentAction from "../ArticleCommentAction/ArticleCommentAction";

export default function CommentList({
  initCommentList,
  articleId,
  initCursorId,
}) {
  const [cursorId, setCursorId] = useState(initCursorId);
  const [commentList, setCommentList] = useState(initCommentList);

  const getMoreCommentList = async () => {
    const { data: newCommentList, nextCursor } =
      await articleCommentApi.getList({
        articleId,
        cursorId,
      });
    setCommentList((prev) => [...prev, ...newCommentList]);
    setCursorId(nextCursor);
  };

  const handleDeleted = (id) => {
    setCommentList((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <>
      {commentList.length > 0 ? (
        <div>
          <ul className={styles.commentList}>
            {commentList.map((comment) => (
              <li key={comment.id} className={styles.commentCard}>
                <div className={styles.commentBody}>
                  <div className={styles.commentContent}>{comment.content}</div>

                  <div className={styles.commentProfile}>
                    <Image
                      className={styles.profileImage}
                      src={comment.img || defaultImage}
                      alt="프로필 사진"
                      width={40}
                      height={40}
                    />
                    <span className={styles.username}>
                      {comment.username || "총명한 판다"}
                    </span>
                    {/* 유저 이름 데이터 추가 후 변경 */}
                    <span className={styles.createdAt}>
                      {formatRelativeTime(comment.createdAt)}
                    </span>
                  </div>
                </div>

                <ArticleCommentAction
                  id={comment.id}
                  onDeleted={handleDeleted}
                />
                {/* id를 보내서 처리할 것이냐 그냥 할 것이냐 */}
              </li>
            ))}
          </ul>
          {cursorId && <button onClick={getMoreCommentList}>더보기</button>}
        </div>
      ) : (
        <div className={styles.emptyComment}>
          <Image
            src={replyEmpty}
            alt="댓글 없음"
            width={140}
            height={140}
            className={styles.emptyCommentIcon}
          />
          <p className={styles.emptyCommentText}>
            아직 댓글이 없어요, <br />
            지금 댓글을 달아보세요!
          </p>
        </div>
      )}
    </>
  );
}
