import { useState, useEffect } from 'react';
// import { useResponsiveCount } from '../hooks/useResponsiveCount';
import getProducts from '../api/getProducts';
import { AllItemsCard } from './AllItemsCard';
import { getPagination } from '../util/getPagination';
import style from '../styles/AllItems.module.css';
import prev from '../assets/arrow_left.png';
import next from '../assets/arrow_right.png';

export default function AllItems() {
  // const { allItemsPerPage } = useResponsiveCount();
  const allItemsPerPage = 10;
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const { currentBlock, buttonBlocks, totalPageButtons } = getPagination(
    currentPage,
    totalItems,
    allItemsPerPage,
  );

  const handlePrevClick = () => {
    if (currentBlock === buttonBlocks[0]) return;
    const prevPage = currentPage - 5;
    setCurrentPage(prevPage);
  };
  const handleNextClick = () => {
    if (currentBlock === buttonBlocks[buttonBlocks.length - 1]) return;
    if (currentPage + 5 > totalPageButtons) {
      setCurrentPage(totalPageButtons);
      return;
    }
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
    <div className={style.allItemsSection}>
      <div className={style.upperSection}>
        <h2>판매 중인 상품</h2>
        <div className={style.upperRightSection}>
          <input
            name="input"
            className={style.input}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="검색할 상품을 입력해주세요"
          />
          <button name="register" className={style.button} type="button">
            상품 등록하기
          </button>
          <select value={orderBy} onChange={handleOrderChange}>
            <option value="recent">최신순 </option>
            <option value="favorite">좋아요 순</option>
          </select>
        </div>
      </div>
      <div className={style.allItems}>
        {products.map((product) => (
          <AllItemsCard
            key={product.id}
            name={product.name}
            price={product.price}
            likes={product.favoriteCount}
            image={product.images[0]}
          />
        ))}
      </div>

      <div className={style.pagination}>
        <button className={style.pageButton} onClick={handlePrevClick}>
          <img src={prev}></img>
        </button>
        {(currentBlock ?? []).map((page) => {
          return (
            <button
              key={page}
              className={`${style.pageButton} ${page === currentPage ? style.currentPage : ''}`}
              onClick={() => handlePageClick(page)}
              type="button"
            >
              {page}
            </button>
          );
        })}
        <button className={style.pageButton} onClick={handleNextClick}>
          <img src={next}></img>
        </button>
      </div>
    </div>
  );
}
