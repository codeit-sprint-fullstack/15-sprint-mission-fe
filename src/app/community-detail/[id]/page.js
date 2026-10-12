import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Header/Nav";
import styles from "./community-detail.module.css";
import { articleApi } from "@/components/api/articleApi";
import Image from "next/image";
import likeIcon from "@/assets/likeIcon.svg";
import defaultImage from "@/assets/default-profile.svg";
import { formatDate } from "@/utils/formatTime";
import Link from "next/link";
import backToList from "@/assets/icons/backToList.svg";
import { articleCommentApi } from "@/components/api/articleCommentApi";
import { CommentList } from "@/components/CommentList/";
import { ActionMenu } from "@/components/ActionMenu";

export default async function CommunityDetail({ params }) {
  const { id: articleId } = await params;
  const { data: article } = await articleApi.get(articleId);
  const { data: initCommentList, nextCursor: initCursorId } =
    await articleCommentApi.getList({ articleId });

  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <main className={styles.main}>
        <div className={styles.postDetail}>
          <div className={styles.titleHeader}>
            <h1 className={styles.title}>{article.title}</h1>
            {/* <ActionMenu onEdit={onEdit} onDelete={onDelete} /> */}
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
              {article.username || "총명한 판다"}
              {/* 실제 데이터 생기면 교체 */}
            </div>
            <div className={styles.createdAt}>
              {formatDate(article.createdAt)}
            </div>
            <hr className={styles.profileDivider} />
            <div className={styles.likeChip}>
              <Image
                src={likeIcon}
                alt="좋아요 아이콘"
                width={24}
                height={24}
                className={styles.likeIcon}
              />

              <span className={styles.likeCount}>{article.likeCount ?? 0}</span>
            </div>
          </div>
          <hr className={styles.contentDivider} />

          <div className={styles.content}>{article.content}</div>
        </div>

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

        <CommentList
          key={articleId}
          initCommentList={initCommentList}
          articleId={articleId}
          initCursorId={initCursorId}
        />

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
