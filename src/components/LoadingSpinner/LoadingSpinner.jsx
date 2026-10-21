import * as styles from "./LoadingSpinner.css";

export function LoadingSpinner() {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <span className={styles.spinner} />
    </div>
  );
}
