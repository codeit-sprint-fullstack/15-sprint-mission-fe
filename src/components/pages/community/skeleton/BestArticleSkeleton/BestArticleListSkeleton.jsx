import styles from "./BestArticleListSkeleton.module.css";

export default function BestArticleListSkeleton() {
  return (
    <ul className={styles.bestList}>
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i}>
          <div className={styles.bestCard}>
            <div className={styles.bestBadge} />
            <div className={styles.title}></div>
            <div className={styles.image} />
            <div className={styles.user}></div>

            <div className={styles.createdAt}></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
