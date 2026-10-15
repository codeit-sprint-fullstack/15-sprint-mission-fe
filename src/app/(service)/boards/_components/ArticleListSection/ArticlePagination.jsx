'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import * as styles from './ArticlePagination.css';

function ArticlePagination({ totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 현재 URL에서 페이지 번호 읽기 (기본값: 1)
  const currentPage = Number(searchParams.get('page')) || 1;

  // 페이지 이동 핸들러
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage));

    router.push(`/boards?${params.toString()}`);
  };

  // 만약 전체 페이지가 1페이지 이하면 페이지네이션을 숨김
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      {/* 이전 페이지 버튼 */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={styles.pageButton}
      >
        이전
      </button>

      {/* 페이지 번호 목록 동적 렌더링 */}
      <div className={styles.pageNumberList}>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          const isSelected = pageNumber === currentPage;

          return (
            <button
              type="button"
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`${styles.numberButton} ${
                isSelected ? styles.selected : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* 다음 페이지 버튼 */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={styles.pageButton}
      >
        다음
      </button>
    </div>
  );
}

export default ArticlePagination;
