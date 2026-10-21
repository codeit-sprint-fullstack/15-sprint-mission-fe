import * as styles from "./EmptyState.css";

export function EmptyState({ message = "표시할 내용이 없어요." }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
