import styles from "./community.module.css";
import Link from "next/link";
import { Suspense } from "react";
import { articleApi } from "@/components/api/articleApi";
import { BestArticleList } from "@/components/pages/community/BestArticleList";
import { ArticleCardList } from "@/components/pages/community/ArticleCardList";
import { SearchFilter } from "@/components/pages/community/SearchFilter";

export default async function Community({ searchParams }) {
  const { data: bestList } = await articleApi.getList({
    sort: "desc",
    page: 1,
    limit: 3,
  });
  const { q = "", sort = "desc" } = await searchParams;
  const { data: list } = await articleApi.getList({
    keyword: q || undefined,
    sort,
  });

  return (
    <main className={styles.main}>
      <section className={styles.best}>
        <h2 className={styles.sectionTitle}>베스트 게시글</h2>
        <BestArticleList list={bestList} />
      </section>
      <section className={styles.articles}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>게시글</h2>
          <Link href="/community/new" className={styles.createPostButton}>
            글쓰기
          </Link>
        </div>
        <Suspense>
          <SearchFilter />
        </Suspense>
        <ArticleCardList list={list} />
      </section>
    </main>
  );
}
