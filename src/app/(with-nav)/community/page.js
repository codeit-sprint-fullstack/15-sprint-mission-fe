import styles from "./community.module.css";
import Link from "next/link";
import { Suspense } from "react";
import { BestArticleList } from "@/components/pages/community/BestArticleList";
import { ArticleCardList } from "@/components/pages/community/ArticleCardList";
import { SearchFilter } from "@/components/pages/community/SearchFilter";
import { normalizeSort } from "@/utils/normalizeSort";
import { BestArticleListSkeleton } from "@/components/pages/community/skeleton/BestArticleSkeleton";
import { ArticleCardListSkeleton } from "@/components/pages/community/skeleton/ArticleCardListSkeleton";

export default async function Community({ searchParams }) {
  const { q = "", sort: rawSort } = await searchParams;
  const sort = normalizeSort(rawSort);

  return (
    <main className={styles.main}>
      <section className={styles.best}>
        <h2 className={styles.sectionTitle}>베스트 게시글</h2>

        <Suspense fallback={<BestArticleListSkeleton />}>
          <BestArticleList />
        </Suspense>
      </section>
      <section className={styles.articles}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.sectionTitle}>게시글</h2>
          <Link href="/community/new" className={styles.createPostButton}>
            글쓰기
          </Link>
        </div>

        <Suspense>
          <SearchFilter key={`${q} - ${sort}`} />
        </Suspense>

        <Suspense key={`${q} - ${sort}`} fallback={<ArticleCardListSkeleton />}>
          <ArticleCardList keyword={q} sort={sort} />
        </Suspense>
      </section>
    </main>
  );
}
