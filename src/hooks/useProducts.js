import { useState, useEffect } from "react";

const API_URL =
  import.meta.env.API_URL || "https://one5-sprint-mission-be-xgtr.onrender.com";

export function useProducts({ page, pageSize = 10, orderBy, keyword }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams({
          page,
          pageSize,
          orderBy,
          ...(keyword && { keyword }),
        });

        const response = await fetch(
          `${API_URL}/products?${queryParams.toString()}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`전체 상품 요청 실패: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.list || []);
        setTotalCount(data.totalCount || 0);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        console.error(error);
        setError(error);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [page, pageSize, orderBy, keyword]);

  const totalPages = Math.ceil(totalCount / pageSize) || 1;

  return { products, totalCount, totalPages, isLoading, error };
}
