import { useState } from 'react';
import { Pagination } from '../Pagination';
import { SearchProducts } from '../SearchProducts';
import { ShowProductsList } from '../ShowProductsList';
import { SortProducts } from '../SortProducts';
import { usePost } from '../../hooks/usePost';
import styles from './SaleProducts.module.css';
import { useWindowSize } from '../../hooks/useWindowSize';

export function SaleProducts() {
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const windowWidth = useWindowSize();
  const pageSize = windowWidth <= 480 ? 4 : windowWidth <= 768 ? 6 : 10;

  const { posts, totalPages, currentPage, handleCurrentPage } = usePost(
    pageSize,
    orderBy,
    keyword,
  );

  const handleSort = (sortValue) => {
    setOrderBy(sortValue);
  };
  const handleSearch = (searchValue) => {
    setKeyword(searchValue);
  };

  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <h1 className={styles.title}>판매중인 상품</h1>
        <div className={styles.search}>
          <SearchProducts search={handleSearch} />
        </div>
        <button className={styles.resistButton}>상품등록</button>
        <div className={styles.sort}>
          <SortProducts sort={handleSort} />
        </div>
      </div>

      <ShowProductsList
        posts={posts}
        gridStyle={styles.girdStyle}
        imageSize={styles.imageSize}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleCurrentPage}
      />
    </div>
  );
}
