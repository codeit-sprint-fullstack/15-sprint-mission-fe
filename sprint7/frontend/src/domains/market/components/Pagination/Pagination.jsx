import { ChevronIcon } from "@/components/Icons";
import * as styles from "./Pagination.css";

const WINDOW = 5;

export function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 0) return null;

  const start = Math.floor((page - 1) / WINDOW) * WINDOW + 1;
  const end = Math.min(start + WINDOW - 1, totalPages);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav className={styles.pagination} aria-label="페이지 이동">
      <button
        type="button"
        className={styles.item}
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="이전 페이지"
      >
        <ChevronIcon direction="left" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={`${styles.item} ${p === page ? styles.current : ""}`}
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        className={styles.item}
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="다음 페이지"
      >
        <ChevronIcon direction="right" />
      </button>
    </nav>
  );
}