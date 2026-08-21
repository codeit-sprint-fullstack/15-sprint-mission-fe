import { useResponsiveCount } from '../hooks/useResponsiveCount';
import getProducts from '../api/productApi';
import { useState, useEffect } from 'react';

function BestItem({ name, price, likes, image }) {
  return (
    <div className="bestItemCard">
      <img className="bestItemPhoto" src={image} alt="상품이미지" />
      <p className="bestItemName">{name}</p>
      <p className="bestItemPrice">{price}원</p>
      <img className="bestItemHeartIcon" src="하트" alt="하트" />
      <span className="bestItemLikes">{likes}</span>
    </div>
  );
}

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
    <div className="bestItemsSection">
      <h2>베스트 상품</h2>
      <div className="bestItems">
        {products.map((product) => (
          <BestItem
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
