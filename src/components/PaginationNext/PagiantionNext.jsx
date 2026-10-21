"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as styles from "./PaginationNext.css.js";

export default function PaginationNext({ currentPage, totalCount, limit }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPage = Math.ceil(totalCount / limit);
  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1,
  );

  const handlePageChange = (number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(number));
    router.push(`/boards?${params.toString()}`);
  };

  return (
    <nav className={styles.container} aria-label="게시글 페이지 이동">
      <button
        type="button"
        className={styles.button}
        aria-label="이전 페이지"
        disabled={currentPage <= 1 || totalPage === 0}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <span className={styles.previous} aria-hidden="true" />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          type="button"
          className={styles.button}
          aria-label={`${page}페이지`}
          onClick={() => handlePageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={styles.button}
        aria-label="다음 페이지"
        disabled={currentPage >= totalPage || totalPage === 0}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <span className={styles.next} aria-hidden="true" />
      </button>
    </nav>
  );
}
