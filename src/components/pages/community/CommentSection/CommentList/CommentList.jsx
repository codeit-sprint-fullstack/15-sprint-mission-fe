"use client";

import Image from "next/image";
import replyEmpty from "@/assets/icons/Img_reply_empty.svg";
import { formatRelativeTime } from "@/utils/relativeTime";

import styles from "./CommentList.module.css";
import defaultImage from "@/assets/default-profile.svg";
import { ArticleCommentAction } from "@/components/pages/community/ArticleCommentAction";
import { ErrorMessage } from "@/components/common/ErrorMessage";

export default function CommentList({
  commentList,
  handleDeleted,
  cursorId,
  getMoreCommentList,
  loadingMore,
  moreErrorMessage,
}) {
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
              </li>
            ))}
          </ul>
          {cursorId && (
            <button
              onClick={getMoreCommentList}
              className={styles.moreButton}
              aria-disabled={loadingMore}
            >
              {loadingMore ? "불러오는 중..." : "더보기"}
            </button>
          )}
          {ErrorMessage && <ErrorMessage errorMessage={moreErrorMessage} />}
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
