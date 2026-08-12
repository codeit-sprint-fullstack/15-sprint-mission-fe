//# 상품 목록 fetch + 로딩/에러 상태 관리 커스텀 훅
import { useState, useEffect } from 'react';
import { getProductList } from '../api/products';

export function useProducts({ page = 1, pageSize = 10, keyword = '', orderBy = 'recent' } = {}) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false; // 이전 요청 응답이 늦게 도착해서 최신 상태를 덮어쓰는 것 방지

    async function fetchProducts() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getProductList({ page, pageSize, keyword, orderBy });
        if (isCancelled) return;
        setProducts(data.list ?? []);
        setTotalCount(data.totalCount ?? 0);
      } catch (err) {
        if (isCancelled) return;
        setError(err);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchProducts();

    return () => {
      isCancelled = true;
    };
  }, [page, pageSize, keyword, orderBy]); // currentPage가 바뀔 때마다 자동 재요청

  return { products, totalCount, isLoading, error };
}
