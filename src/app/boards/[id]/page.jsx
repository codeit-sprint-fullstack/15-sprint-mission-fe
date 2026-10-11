import ArticleContent from './_components/ArticleContent/ArticleContent';
import * as styles from './page.css';

function ArticleDetail() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <ArticleContent />
      </div>
    </article>
  );
}

export default ArticleDetail;
