import { useState, useEffect } from "react";

export function useBestProducts(pageSize = 4) {
  const [bestProducts, setBestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBestProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=favorite`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`베스트 상품 요청 실패: ${response.status}`);
        }
        const data = await response.json();
        setBestProducts(data.list || []);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        console.error(error);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchBestProducts();

    return () => {
      controller.abort();
    };
  }, [pageSize]);

  return { bestProducts, isLoading };
}

export function useProducts({ page, pageSize = 10, orderBy, keyword }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
          `https://panda-market-api.vercel.app/products?${queryParams.toString()}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`전체 상품 요청 실패: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.list || []);
        setTotalCount(data.totalCount || 0);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        console.error(error);
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

  return { products, totalCount, totalPages, isLoading };
}
