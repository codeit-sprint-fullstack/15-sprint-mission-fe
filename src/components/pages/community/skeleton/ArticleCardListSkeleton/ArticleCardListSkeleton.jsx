import styles from "./ArticleCardListSkeleton.module.css";

export default function ArticleCardListSkeleton() {
  return (
    <ul className={styles.articleList}>
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}>
          <div className={styles.articleCard}>
            <div className={styles.title}></div>
            <div className={styles.image}></div>

            <div className={styles.user}></div>
            <div className={styles.liked}></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
