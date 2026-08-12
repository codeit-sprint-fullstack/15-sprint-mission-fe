//# 판매 중인 상품 섹션 (그리드 + 데이터 fetch)

import { useState, useEffect } from 'react';
import { usePagination } from '../hooks/usePaginaton';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard.jsx';
import Pagination from './Pagination.jsx';
import LoadingSpinner from '../common/LoadingSpinner.jsx';
import ErrorMessage from '../common/ErrorMessage.jsx';
import EmptyState from '../common/EmptyState.jsx';
import styles from './ProductList.module.css';

const ITEMS_PER_PAGE = 8;

export default function ProductList() {
  // API가 알려주기 전까지 전체 개수를 모르므로 0에서 시작,
  // 응답이 오면 아래 useEffect에서 채워 넣는다.
  const [totalCount, setTotalCount] = useState(0);

  // 1) 페이지 번호 상태는 여기(ProductList)가 소유한다
  const { currentPage, totalPages, goToPage } = usePagination({
    initialPage: 1,
    itemPerPage: ITEMS_PER_PAGE,
    totalCount,
  });

  // 2) currentPage가 바뀔 때마다 이 훅이 알아서 새로 fetch 한다
  const { products, totalCount: fetchedTotalCount, isLoading, error } = useProducts({
    page: currentPage,
    pageSize: ITEMS_PER_PAGE,
  });

  // 3) API가 응답을 준 시점에 실제 totalCount를 위 상태로 올려서
  //    다음 렌더링에서 usePagination이 정확한 totalPages를 계산하게 한다.
  useEffect(() => {
    setTotalCount(fetchedTotalCount);
  }, [fetchedTotalCount]);

  return (
    <div>
      <section className={styles.section}>
        <h2 className={styles.title}>판매 중인 상품</h2>

        {isLoading && <LoadingSpinner />}
        {!isLoading && error && <ErrorMessage message={error.message} />}
        {!isLoading && !error && products.length === 0 && <EmptyState />}

        {!isLoading && !error && products.length > 0 && (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </section>

      {!isLoading && !error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </div>
  );
}
