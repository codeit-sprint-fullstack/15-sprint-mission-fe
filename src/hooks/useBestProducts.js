import { useState, useEffect } from "react";

export function useBestProducts(pageSize = 4) {
  const [bestProducts, setBestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

    fetchBestProducts();

    return () => {
      controller.abort();
    };
  }, [pageSize]);

  return { bestProducts, isLoading, error};
}