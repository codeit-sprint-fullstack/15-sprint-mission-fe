import Link from 'next/link';
import { Suspense } from 'react';
import ArticleListSection from './_components/ArticleListSection/ArticleListSection';
import BestArticleList from './_components/BestArticles/BestArticleList';
import * as styles from './page.css';

function BoardListPage() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <section className={styles.bestArticleSection}>
          <h2 className={styles.sectionTitle}>베스트 게시글</h2>
          <BestArticleList />
        </section>
        <section className={styles.articleListSection}>
          <div className={styles.articleListSectionHeader}>
            <h2 className={styles.sectionTitle}>게시글</h2>
            <Link className={styles.articleWriteBtn} href={'/boards/create'}>
              글쓰기
            </Link>
          </div>
          <Suspense fallback={<div>게시글 목록을 불러오는 중...</div>}>
          <ArticleListSection />
          </Suspense>
        </section>
      </div>
    </article>
  );
}

export default BoardListPage;
