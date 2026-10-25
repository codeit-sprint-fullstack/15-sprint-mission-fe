"use client";

import Image from "next/image";
import AuthorInfo from "../AuthorInfo/AuthorInfo.jsx";
import heart from "../../assets/article-detail/da76e.svg";
import kebab from "../../assets/article-detail/00532.svg";
import divider from "../../assets/article-detail/c5ce6.svg";
import verticalDivider from "../../assets/article-detail/1cbff.svg";
import * as styles from "./ArticleDetail.css.js";
import { deleteArticle } from "../../api/articles.js";
import { useRouter } from "next/navigation";

export default function ArticleDetail({ article }) {
  const router = useRouter();
  const date = new Date(article.createdAt)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Seoul",
    })
    .replace(/\.$/, "");

  const onDelete = async () => {
    try {
      console.log(article.id);
      await deleteArticle({ id: article.id });
      router.push("/boards");
    } catch {
      alert("게시글 삭제에 실패했습니다.");
    }
  };
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{article.title}</h1>
          <details className={styles.menu}>
            <summary className={styles.menuTrigger} aria-label="게시글 더보기">
              <Image src={kebab} alt="" width={3} height={13} />
            </summary>
            <div className={styles.menuPanel}>
              <button
                type="button"
                className={styles.menuItem}
                onClick={() => router.push(`/boards/${article.id}/edit`)}
              >
                수정하기
              </button>
              <button
                type="button"
                className={styles.menuItem}
                onClick={onDelete}
              >
                삭제하기
              </button>
            </div>
          </details>
        </div>
        <div className={styles.metadata}>
          <AuthorInfo
            name={article.author?.nickname ?? "익명"}
            date={date}
            dateTime={article.createdAt}
            variant="detail"
          />
          <div className={styles.likesGroup}>
            <Image src={verticalDivider} alt="" width={1} height={34} />
            <span
              className={styles.likes}
              aria-label={`좋아요 ${article.likeCount ?? 0}개`}
            >
              <Image src={heart} alt="" width={32} height={32} />
              {article.likeCount ?? 0}
            </span>
          </div>
        </div>
        <div className={styles.divider} aria-hidden="true">
          <Image
            src={divider}
            alt=""
            width={1200}
            height={1}
            className={styles.dividerImage}
          />
        </div>
      </header>
      <p className={styles.content}>{article.content}</p>
    </article>
  );
}
