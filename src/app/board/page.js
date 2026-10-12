import Link from "next/link";
import { getArticles } from "@/lib/api";
import { BestArticleCard } from "@/components/board/BestArticleCard";
import { ArticleCard } from "@/components/board/ArticleCard";
import { ArticleSearch } from "@/components/board/ArticleSearch";
import { ArticleSort } from "@/components/board/ArticleSort";
import * as styles from "./page.css.js";

export default async function Board({ searchParams }) {
  const { keyword = "", orderBy } = await searchParams;
  const trimmed = typeof keyword === "string" ? keyword.trim() : "";

  const params = { pageSize: 5 };
  if (trimmed) {
    params.keyword = trimmed;
  }
  if (orderBy === "recent") {
    params.orderBy = orderBy;
  }

  const [{ list: bestList }, { list }] = await Promise.all([
    getArticles({ pageSize: 3 }),
    getArticles(params),
  ]);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>베스트 게시글</h2>
        <ul className={styles.bestList}>
          {bestList.map((article) => (
            <BestArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>게시글</h2>
          <Link className={styles.writeButton} href="/board/new">
            글쓰기
          </Link>
        </div>
        <div className={styles.toolbar}>
          <ArticleSearch defaultKeyword={trimmed} />
          <ArticleSort />
        </div>
        <ul className={styles.normalList}>
          {list.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </section>
    </div>
  );
}
