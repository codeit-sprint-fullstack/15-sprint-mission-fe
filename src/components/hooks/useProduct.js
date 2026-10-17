import { useEffect, useState } from "react";
import { productApi } from "@/components/api/productApi.js";
import usePagination from "./usePagination.js";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState("desc");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    currentPage,
    setTotalProducts,
    totalPages,
    goToPage,
    productsPerPage,
    setCurrentPage,
  } = usePagination();

  const handleKeyword = (value) => {
    setKeyword(value);
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSort(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const getProductsList = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { data, totalCount } = await productApi.getList({
          page: (currentPage - 1) * productsPerPage,
          limit: productsPerPage,
          keyword: keyword,
          sort: sort,
        });

        setProducts(data);
        setTotalProducts(totalCount);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProductsList();
  }, [currentPage, productsPerPage, setTotalProducts, keyword, sort]);

  const value = {
    products,
    totalPages,
    goToPage,
    currentPage,
    setSort: handleSort,
    setKeyword: handleKeyword,
    isLoading,
    error,
  };

  return value;
}
