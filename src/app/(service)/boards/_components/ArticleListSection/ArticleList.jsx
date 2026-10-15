'use client';

import { fetchArticles } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import ArticleItem from './ArticleItem';
import * as styles from './ArticleList.css';
import ArticlePagination from './ArticlePagination';

function ArticleList() {
  const searchParams = useSearchParams();

  const queryParams = {
    page: Number(searchParams.get('page')) || 1,
    pageSize: 10,
    orderBy: searchParams.get('orderBy') || 'recent',
    search: searchParams.get('search') || '',
  };

  const { data, isPending, error } = useQuery({
    queryKey: queryKeys.articles.list(queryParams),
    queryFn: () => fetchArticles(queryParams),
  });

  if (isPending) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>게시글을 불러오는데 실패했습니다.</div>;
  }

  const articles = data?.data.list || [];

  if (articles.length === 0) {
    return <div>등록된 게시글이 없습니다.</div>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.articleItemList}>
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
      <div className={styles.articlePagination}>
        <ArticlePagination totalPages={data.data.totalPages} />
      </div>
    </section>
  );
}

export default ArticleList;
