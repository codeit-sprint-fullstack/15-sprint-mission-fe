import { useState, useEffect } from "react";
import { getProducts } from "../api/products";

export const useProducts = ({
  page = 1,
  pageSize = 10,
  standard = "recent",
  keyword = "",
  setTotalCount, // ← 외부에서 받음
}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const productDataLoad = async () => {
      setIsLoading(true);
      try {
        const { list, totalCount } = await getProducts({
          page,
          pageSize,
          standard,
          keyword,
        });
        setProducts(list);
        setTotalCount(totalCount); // ← usePagination의 totalCount를 직접 업데이트
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    productDataLoad();
  }, [page, pageSize, standard, keyword, setTotalCount]);

  return { products, isLoading };
};
