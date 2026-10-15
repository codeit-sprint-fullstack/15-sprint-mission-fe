'use client';

import icProfile from '@/assets/boards/ic_profile.svg';
import { fetchArticle } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import * as styles from './ArticleContent.css';
import ArticleLikeButton from './ArticleLikeButton';
import ArticleOptionMenu from './ArticleOptionMenu';

function ArticleContent() {
  const { id } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: queryKeys.articles.detail(id),
    queryFn: () => fetchArticle(id),
  });

  if (isPending) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>게시글 정보를 불러오지 못했습니다. {error.message}</div>;
  }

  const articleData = data.data;

  return (
    <div className={styles.container}>
      <div className={styles.articleHeader}>
        <div className={styles.articleHeaderTop}>
          <h2 className={styles.articleTitle}>{articleData.title || ''}</h2>
          <ArticleOptionMenu id={articleData.id} />
        </div>
        <div className={styles.articleHeaderBottom}>
          <div className={styles.articleInfo}>
            <div className={styles.articleInfoProfileContainer}>
              <Image
                className={styles.articleInfoProfile}
                src={icProfile}
                alt="프로필 이미지"
              />
            </div>
            <div className={styles.articleInfoUser}>총명한판다</div>
            <div className={styles.articleInfoDate}>
              {articleData.createdAt || ''}
            </div>
          </div>
          <div className={styles.articleInfoDivider}></div>
          <ArticleLikeButton id={id} />
        </div>
      </div>
      <div className={styles.articleBody}>
        <p className={styles.articleContent}>{articleData.content || ''}</p>
      </div>
    </div>
  );
}

export default ArticleContent;
