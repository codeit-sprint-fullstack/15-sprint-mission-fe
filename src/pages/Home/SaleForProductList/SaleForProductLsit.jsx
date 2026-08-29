import { Pagination } from '../../../component/Pagination/Pagination';
import { useProduct } from '../../../contexts/productContext';
import { Spinner } from '../../../component/Spinner/Spinner';
import { SaleForProductItem } from '../saleForProduct/saleForProduct';
import styles from './SaleForProductList.module.css';
import { useState } from 'react';

export function SaleForProductList() {
  const { saleProducts, currentPage, totalPages, goToPage, isLoading, error } =
    useProduct();

  const [sortType, setSortType] = useState('latest');
  const [isActive, setIsActive] = useState('false');

  const sortedProducts = [...saleProducts].sort((a, b) => {
    if (sortType === 'latest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    if (sortType === 'favorite') {
      return b.favoriteCount - a.favoriteCount;
    }

    return 0;
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <div className={styles.saleForProduct}>
      <div>
        <div className={styles.saleForProductHeader}>
          <p className={styles.headerP}>판매 중인 상품</p>
          <div className={styles.inputButtonDiv}>
            <img
              className={styles.searchIcon}
              src="src/assets/searchIcon.png"
              alt="searchIcon"
            />

            <input
              className={styles.productSearchBox}
              placeholder="검색할 상품을 입력해주세요."
            />

            <button className={styles.registrationButton}>상품 등록하기</button>
            <div className={styles.typeButtonWrapper}>
              <button
                className={styles.typeButton}
                onClick={() => setIsActive(!isActive)}
              >
                {sortType === 'latest' ? '최신순' : '좋아요순'}
                <img
                  className={styles.downArrow}
                  src="src/assets/DownArrow.png"
                  alt="DownArrowIcon"
                />
              </button>
              {isActive && (
                <div className={styles.typeButtonContainer}>
                  <button
                    className={styles.typeButtonLatest}
                    onClick={() => setSortType('latest')}
                  >
                    최신순
                  </button>
                  <button
                    className={styles.typeButtonFavorite}
                    onClick={() => setSortType('favorite')}
                  >
                    좋아요순
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <ul className={styles.productList}>
          {sortedProducts.map((product) => (
            <SaleForProductItem
              key={product.id}
              image={product.images[0]}
              price={product.price}
              name={product.name}
              favoriteCount={product.favoriteCount}
            />
          ))}
        </ul>
        <div className={styles.paginationWrapper}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </div>
      </div>
    </div>
  );
}
