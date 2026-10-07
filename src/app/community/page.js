import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Header/Nav";
import styles from "./community.module.css";
import { articleApi } from "@/components/api/articleApi";
import { BestArticleList } from "@/components/BestArticleList";
import { ArticleCardList } from "@/components/ArticleCardList";
import { SearchFilter } from "@/components/SearchFilter";
import { Suspense } from "react";

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
    <>
      <Header>
        <Nav></Nav>
      </Header>
      <main className={styles.main}>
        <section className={styles.best}>
          <h2 className={styles.sectionTitle}>베스트 게시글</h2>
          <BestArticleList list={bestList} />
        </section>
        <section className={styles.articles}>
          <h2 className={styles.sectionTitle}>게시글</h2>
          <Suspense>
            <SearchFilter />
          </Suspense>
          <ArticleCardList list={list} />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
