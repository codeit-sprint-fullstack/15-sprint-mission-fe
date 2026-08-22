import styles from './LoadingSpinner.module.css';

export function LoadingSpinner() {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <div className={styles.ring} />
      <div className={styles.label}>
        불러오는 중<span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
      </div>
    </div>
  );
}
