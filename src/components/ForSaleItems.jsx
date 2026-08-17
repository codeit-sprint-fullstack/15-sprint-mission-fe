import { usePagination } from '../hooks/usePagination';
import getProducts from '../api/productApi';
import { useState, useEffect } from 'react';

function ForSaleItem({ name, price, likes, image }) {
  return (
    <div className="forSaleItemCard">
      <img className="forSaleItemPhoto" src={image} alt="상품이미지" />
      <p className="forSaleItemName">{name}</p>
      <p className="forSaleItemPrice">{price}원</p>
      <img className="forSaleItemHeartIcon" src="하트" alt="하트" />
      <span className="forSaleItemLikes">{likes}</span>
    </div>
  );
}

export default function ForSaleItems() {
  const { forSaleItemsPerPage } = usePagination();
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleOrderChange = (e) => {
    const nextOrder = e.target.value;
    setOrderBy(nextOrder);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts(
        1,
        forSaleItemsPerPage[0],
        orderBy,
        keyword,
      );
      setProducts(data.list);
    }
    fetchData();
  }, [forSaleItemsPerPage, orderBy, keyword]);

  return (
    <div className="forSaleItemsSection">
      <h2>판매중인 상품</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="input"
          value={inputValue}
          onChange = {handleInputChange}
          placeholder="검색어를 입력하세요"
        />
        <button name="search" type="submit">검색</button>
      </form>
      <select value={orderBy} onChange={handleOrderChange}>
        <option value="recent">최신순 </option>
        <option value="favorite">좋아요 순</option>
      </select>
      <div className="forSaleItems">
        {products.map((product) => (
          <ForSaleItem
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
