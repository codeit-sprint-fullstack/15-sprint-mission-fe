import ArticleList from './ArticleList';
import * as styles from './ArticleListSection.css';
import ArticleSearchBar from './ArticleSearchBar';
import ArticleDropdown from './ArticleSortDropdown';

function ArticleListSection() {
  return (
    <section className={styles.container}>
      {/* 검색 & 정렬 컨트롤 영역 */}
      <div className={styles.filterHeader}>
        <ArticleSearchBar />
        <ArticleDropdown />
      </div>
      {/* 아티클 목록 */}
      <div>
        <ArticleList />
      </div>
    </section>
  );
}

export default ArticleListSection;
