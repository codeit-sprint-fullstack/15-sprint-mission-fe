import { useState, useEffect } from "react";

export function useBestProducts(pageSize = 4) {
  const [bestProducts, setBestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBestProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=favorite`,
        );
        if (!response.ok) {
          throw new Error(`베스트 상품 요청 실패: ${response.status}`);
        }
        const data = await response.json();
        setBestProducts(data.list || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBestProducts();
  }, [pageSize]);

  return { bestProducts, isLoading };
}

export function useProducts({ page, pageSize = 10, orderBy, keyword }) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
        );

        if (!response.ok) {
          throw new Error(`전체 상품 요청 실패: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.list || []);
        setTotalCount(data.totalCount || 0);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [page, pageSize, orderBy, keyword]);

  return { products, totalCount, isLoading };
}
