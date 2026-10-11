import ArticleContent from './_components/ArticleContent/ArticleContent';
import ReplyContent from './_components/ReplyContent/ReplyContent';
import * as styles from './page.css';

function ArticleDetail() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <ArticleContent />
        <ReplyContent />
      </div>
    </article>
  );
}

export default ArticleDetail;
