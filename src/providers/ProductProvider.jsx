import { fetchProducts } from "@/api/Products";
import { ProductContext } from "../contexts/productContext";
import { usePagination } from "@/hooks/usePagination";
import { useEffect, useState } from "react";

const INITIAL_PAGE = 1;
const SALE_PRODUCT_PER_PAGE = 10;
const BEST_PRODUCT_PER_PAGE = 4;

export const ProductProvider = ({ children }) => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { totalCount, currentPage, totalPages, setTotalCount, goToPage } =
    usePagination(INITIAL_PAGE, SALE_PRODUCT_PER_PAGE);

  useEffect(() => {
    const getBestProduct = async () => {
      try {
        const { data } = await fetchProducts({
          page: 1,
          pageSize: BEST_PRODUCT_PER_PAGE,
          orderBy: "favorite",
        });

        setBestProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getBestProduct();
  }, []);

  useEffect(() => {
    const getSaleProducts = async () => {
      setIsLoading(true);
      try {
        const { data, totalCount } = await fetchProducts({
          page: currentPage,
          pageSize: SALE_PRODUCT_PER_PAGE,
          orderBy: "recent",
        });
        setSaleProducts(data);
        setTotalCount(totalCount);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getSaleProducts();
  }, [currentPage, setTotalCount]);

  const value = {
    currentPage,
    saleProducts,
    bestProducts,
    isLoading,
    error,
    totalCount,
    totalPages,
    goToPage,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
