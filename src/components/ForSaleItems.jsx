import { useResponsiveCount } from '../hooks/useResponsiveCount';
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

function PageButton({ page, currentPage, handlePageButtonClick }) {
  return (
    <li key={page}>
      <button
        className={`pageButton ${page === currentPage ? 'isCurrentPage' : ''}`}
        onClick={handlePageButtonClick}
        type="button"
      >
        {page}
      </button>
    </li>
  );
}

const { totalCount } = await getProducts();
const PAGE_LIMIT = 5;



export default function ForSaleItems() {
  const { forSaleItemsPerPage } = useResponsiveCount();

  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(totalCount);
  const currentBlockFirstPage = Math.ceil(currentPage / PAGE_LIMIT) - 4;
  const currentBlockPages = Array.from({ 
   }, (_, i) => currentBlockFirstPage + i);

  const handlePageButtonClick = (e) => {
    setCurrentPage(e.target.key);
  }

  const handleOrderChange = (e) => {
    const nextOrder = e.target.value;
    setOrderBy(nextOrder);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing) return;
    setKeyword(e.target.value);
    setInputValue('');
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts(
        currentPage,
        forSaleItemsPerPage,
        orderBy,
        keyword,
      );
      setProducts(data.list);
      setTotalItems(data.totalCount);
    }
    fetchData();
  }, [currentPage, forSaleItemsPerPage, orderBy, keyword]);

  return (
    <div className="forSaleItemsSection">
      <h2>판매 중인 상품</h2>
      <input
        name="input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="검색할 상품을 입력해주세요"
      />
      <button name="register" type="button">
        상품 등록하기
      </button>
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
      <div className="pagination">
        <ul>
          {}
        </ul>
      </div>
    </div>
  );
}
