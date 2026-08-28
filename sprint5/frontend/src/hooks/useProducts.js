import { useEffect, useState } from 'react';
import { getProducts } from '../api/productApi';


export default function useProducts({ pageSize, orderBy, keyword }) {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    setPage(1);
  }, [orderBy, keyword, pageSize]);

  useEffect(() => {
    let ignore = false;

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getProducts({ page, pageSize, orderBy, keyword });
        if (!ignore) {
          setProducts(data.list);
          setTotalCount(data.totalCount);
        }
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    fetchProducts();
    return () => {
      ignore = true;
    };
  }, [page, pageSize, orderBy, keyword]);

  return { products, totalCount, page, setPage, isLoading, error };
}
