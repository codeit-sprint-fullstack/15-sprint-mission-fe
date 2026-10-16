import BestArticleList from "@/components/articlesPage/List/BestArticleList/BestArticleList.js";
import { getArticles } from "@/lib/api/articlesAPI";
import * as styles from "./articlesPage.css";
import Link from "next/link.js";
import SearchBar from "@/components/articlesPage/SearchBar/SearchBar";
import SortDropdown from "@/components/articlesPage/SortDropdown/SortDropdown";
import List from "@/components/articlesPage/List/List";
import EmptyState from "@/components/common/EmptyState/EmptyState";
import ArticleCard from "@/components/articlesPage/ArticleCard/ArticleCard";

const ORDER_OPTIONS = ["recent", "likes"];

export default async function ArticlesPage({ searchParams }) {
  const { keyword, orderBy } = await searchParams;
  const order = ORDER_OPTIONS.includes(orderBy) ? orderBy : "recent";

  const [bestArticlesData, articlesData] = await Promise.all([
    getArticles({ pageSize: 3 }),
    getArticles({ keyword, orderBy: order }),
  ]);

  return (
    <div className={styles.container}>
      <section className={styles.bestArticlesContainer}>
        <h2 className={styles.title}>베스트 게시글</h2>
        <BestArticleList articles={bestArticlesData.list} />
      </section>

      <section className={styles.articlesListContainer}>
        <div className={styles.articlesListHeader}>
          <h2 className={styles.title}>게시글</h2>
          <Link href={"/register"} className={styles.registerButton}>
            글쓰기
          </Link>
        </div>

        <div className={styles.optionsContainer}>
          <SearchBar />
          <SortDropdown />
        </div>

        <List
          items={articlesData.list}
          renderItem={(a) => <ArticleCard article={a} />}
          emptyComponent={<EmptyState />}
        />
      </section>
    </div>
  );
}
