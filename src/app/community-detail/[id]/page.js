import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Header/Nav";
import styles from "./community-detail.module.css";
import { articleApi } from "@/components/api/articleApi";
import Image from "next/image";
import moreMenu from "@/assets/icons/settingIcon.svg";
import likeIcon from "@/assets/likeIcon.svg";
import defaultImage from "@/assets/default-profile.svg";
import replyEmpty from "@/assets/icons/Img_reply_empty.svg";
import { formatDate } from "@/utils/formatTime";
import { formatRelativeTime } from "@/utils/relativeTime";
import Link from "next/link";
import backToList from "@/assets/icons/backToList.svg";

export default async function CommunityDetail({ params }) {
  const { id } = await params;
  const { data } = await articleApi.get(id);
  const commentList = [];
  // 댓글 목록 로딩 에러 처리

  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <main className={styles.main}>
        <div className={styles.postDetail}>
          <div className={styles.titleHeader}>
            <h1 className={styles.title}>{data.title}</h1>
            <button className={styles.postMenuButton}>
              <Image
                src={moreMenu}
                alt="게시글 관리 메뉴"
                width={24}
                height={24}
                className={styles.postMenuImg}
              />
            </button>
          </div>

          <div className={styles.profile}>
            <Image
              className={styles.profileImage}
              src={defaultImage}
              alt="프로필 사진"
              width={40}
              height={40}
            />
            <div className={styles.username}>
              {data.username || "총명한 판다"}
              {/* 실제 데이터 생기면 교체 */}
            </div>
            <div className={styles.createdAt}>{formatDate(data.createdAt)}</div>
            <hr className={styles.profileDivider} />
            <div className={styles.likeChip}>
              <Image
                src={likeIcon}
                alt="좋아요 아이콘"
                width={24}
                height={24}
                className={styles.likeIcon}
              />

              <span className={styles.likeCount}>{data.likeCount ?? 0}</span>
            </div>
          </div>
          <hr className={styles.contentDivider} />

          <div className={styles.content}>{data.content}</div>
        </div>

        {/*  */}
        <form className={styles.commentForm}>
          <label htmlFor="commentInput" className={styles.commentLabel}>
            댓글달기
          </label>
          <input
            id="commentInput"
            name="content"
            type="text"
            placeholder="댓글을 입력해주세요"
            className={styles.commentInput}
            required
          />
          <button className={styles.commentSubmit}>등록</button>
        </form>

        {/*  */}

        {commentList.length > 0 ? (
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

                <button className={styles.commentMoreMenu}>
                  <Image
                    src={moreMenu}
                    alt="댓글 관리 메뉴"
                    width={24}
                    height={24}
                    className={styles.commentMenuImg}
                  />
                </button>
              </li>
            ))}
          </ul>
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
        <Link href="/community" className={styles.backToList}>
          <span className={styles.backToListText}>목록으로 돌아가기</span>
          <Image
            src={backToList}
            alt=""
            aria-hidden
            width={24}
            height={24}
            className={styles.backToListIcon}
          />
        </Link>
      </main>
      <Footer />
    </div>
  );
}
