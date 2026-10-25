import Link from "next/link";
import Image from "next/image";
import { getArticle } from "@/lib/api";
import { ArticleMenu } from "@/components/board/ArticleMenu";
import { CommentForm } from "@/components/board/CommentForm";
import { formatDate } from "@/lib/formatDate.js";
import { getMockComments } from "@/mocks/comments.js";
import { CommentList } from "@/components/board/CommentList";
import * as styles from "./page.css.js";

export default async function BoardDetail({ params }) {
  const { id } = await params;
  const [article, { list: comments }] = await Promise.all([
    getArticle(id),
    getMockComments(id),
  ]);

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{article.title}</h1>
            <ArticleMenu articleId={article.id} />
          </div>
          <div className={styles.meta}>
            <div className={styles.group}>
              <span className={styles.nickname}>
                <Image
                  className={styles.profileImg}
                  src="/icon/profile.svg"
                  alt="프로필 이미지"
                  width={40}
                  height={40}
                />
                총명한 판다
              </span>
              <time className={styles.date} dateTime={article.createdAt}>
                {formatDate(article.createdAt)}
              </time>
            </div>
            <Image
              src="/icon/vertical-slash.svg"
              alt=""
              width={1}
              height={24}
            />
            <span className={styles.like}>
              <Image
                src="/icon/heart.svg"
                alt="좋아요 아이콘"
                width={16}
                height={16}
              />
              9999+
            </span>
          </div>
        </header>
        <p className={styles.content}>{article.content}</p>
      </article>

      <CommentForm />

      <CommentList comments={comments} />

      <Link className={styles.backButton} href="/board">
        목록으로 돌아가기
        <Image src="/icon/back.svg" alt="" width={24} height={24} />
      </Link>
    </div>
  );
}
