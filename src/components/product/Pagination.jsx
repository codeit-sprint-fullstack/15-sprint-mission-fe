import { useMemo }  from 'react';
import styles from './pagination.module.css';

//currentPage, totalPages, onPageChange 는 전부 부모(productList)가 usePagination으로 관리한다.

export default function Pagination({currentPage, totalPages, onPageChange}){
  const pageItems =  useMemo(() => {
    const delta = 1; // 현제 페이지 좌우로 몇 개 보여줄지
    const range = [];

    for (let i=1; i<= totalPages; i++){
        if(i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)){
          range.push(i);
        }
      }

    const items = [];
    let prev = null;
    for (const i of range) {
      if(prev !== null && i-prev > 1){
        items.push({type: 'ellipsis', key: `e-${i}`});
      }
      items.push({type: 'page',value:i, key: `p-${i}`});
      prev = i;
    }
    return items;
  },[currentPage,totalPages]);

  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination}>
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
        className={styles.navButton}
      >
        ‹
      </button>

      {pageItems.map((item) =>
        item.type === 'ellipsis' ? (
          <span key={item.key} className={styles.ellipsis}>
            ...
          </span>
        ) : (
          <button
            key={item.key}
            type="button"
            onClick={() => onPageChange(item.value)}
            aria-current={item.value === currentPage ? 'page' : undefined}
            className={item.value === currentPage ? styles.pageButtonActive : styles.pageButton}
          >
            {item.value}
          </button>
        )
      )}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
        className={styles.navButton}
      >
        ›
      </button>
    </nav>
  );
}

    

