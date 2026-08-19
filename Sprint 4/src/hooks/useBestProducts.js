import { useEffect, useState } from 'react';
import { getBestProducts } from '../api/productApi';


export default function useBestProducts(pageSize) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; 

    const fetchBestProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getBestProducts({ pageSize });
        if (!ignore) setProducts(data.list);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    fetchBestProducts();
    return () => {
      ignore = true;
    };
  }, [pageSize]);

  return { products, isLoading, error };
}
