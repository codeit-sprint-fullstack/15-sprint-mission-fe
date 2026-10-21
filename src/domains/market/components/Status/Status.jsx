import * as styles from "./Status.css";

export function LoadingIndicator({ label = "불러오는 중이에요" }) {
  return (
    <div className={styles.box} role="status" aria-live="polite">
      <span className={styles.spinner} />
      <span className={styles.text}>{label}</span>
    </div>
  );
}

export function ErrorMessage({ message = "데이터를 불러오지 못했어요.", onRetry }) {
  return (
    <div className={styles.box} role="alert">
      <p className={styles.errorText}>{message}</p>
      {onRetry && (
        <button type="button" className={styles.retry} onClick={onRetry}>
          다시 시도
        </button>
      )}
    </div>
  );
}