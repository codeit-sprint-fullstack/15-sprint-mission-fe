import { useState, useEffect } from 'react';
import { useResponsiveCount } from '../hooks/useResponsiveCount';
import getProducts from '../api/getProducts';
import { ItemCard } from './ItemCard';
import style from '../styles/BestItems.module.css';

export default function BestItems() {
  const { bestItemsPerPage } = useResponsiveCount();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts(1, bestItemsPerPage, 'favorite');
      setProducts(data.list);
    }
    fetchData();
  }, [bestItemsPerPage]);

  return (
    <div className={style.bestItemsSection}>
      <h2>베스트 상품</h2>
      <div className={style.bestItems}>
        {products.map((product) => (
          <ItemCard
            key={product.id}
            name={product.name}
            price={product.price}
            likes={product.favoriteCount}
            image={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
}
