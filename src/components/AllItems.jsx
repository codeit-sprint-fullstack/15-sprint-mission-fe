import { useState, useEffect } from 'react';
import { useResponsiveCount } from '../hooks/useResponsiveCount';
import getProducts from '../api/getProducts';
import { ItemCard } from './ItemCard';
import { getPagination } from '../util/getPagination';
import style from '../styles/AllItems.module.css';

export default function AllItems() {
  
  const { allItemsPerPage } = useResponsiveCount();
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const { currentBlock, buttonBlocks, totalPageButtons } = getPagination(currentPage, totalItems, allItemsPerPage);

  const handlePrevClick = () => {
    if (currentBlock === buttonBlocks[0]) return;
    const prevPage = currentPage - 5;
    setCurrentPage(prevPage);
  };
  const handleNextClick = () => {
    if (currentBlock === buttonBlocks[buttonBlocks.length - 1]) return;
    if (currentPage + 5 > totalPageButtons) {setCurrentPage(totalPageButtons); return;}; 
    const nextPage = currentPage + 5;
    setCurrentPage(nextPage);
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handleOrderChange = (e) => {
    const nextOrder = e.target.value;
    setOrderBy(nextOrder);
    setCurrentPage(1);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setCurrentPage(1);
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
        allItemsPerPage,
        orderBy,
        keyword,
      );
      setProducts(data.list);
      setTotalItems(data.totalCount);
    }
    fetchData();
  }, [currentPage, allItemsPerPage, orderBy, keyword]);

  return (
    <div className="allItemsSection">
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
      <div className={style.allItems}>
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
      <div className="pagination">
        <button className="pageButton" onClick={handlePrevClick}>
          &lt;
        </button>
        {(currentBlock ?? []).map((page) => {
          return (
            <button
              key={page}
              className={`pageButton ${page === currentPage ? 'pagesCurrentPage' : ''}`}
              onClick={() => handlePageClick(page)}
              type="button"
            >
              {page}
            </button>
          );
        })}
        <button className="pageButton" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
}
