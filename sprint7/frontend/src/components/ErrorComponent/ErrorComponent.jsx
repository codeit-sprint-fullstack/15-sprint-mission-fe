import { EmptyState } from "@/components/EmptyState";
import * as styles from "./ErrorComponent.css";

export function ErrorComponent({
  title = "오류가 발생했습니다",
  description,
  onRetry,
}) {
  if (!onRetry) {
    return <EmptyState message={description ?? title} />;
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}
      <button type="button" className={styles.retryButton} onClick={onRetry}>
        다시 시도
      </button>
    </div>
  );
}
