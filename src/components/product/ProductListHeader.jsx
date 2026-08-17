//# 검색창 + 정렬 드롭다운 + 등록 버튼 묶음
import SearchBar from './SearchBar.jsx';
import SortDropdown from './SortDropdown.jsx';
import RegisterButton from './RegisterButton.jsx';
import styles from './ProductListHeader.module.css';

export default function ProductListHeader({ keyword, onKeywordChange, orderBy, onOrderByChange }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>판매 중인 상품</h2>
        <div className={styles.controls}>
          <SearchBar
            keyword={keyword}
            onSearch={onKeywordChange}
            className={styles.searchInput}
          />
          <RegisterButton className={styles.registerButton} />
          <SortDropdown
            orderBy={orderBy}
            onChange={onOrderByChange}
            className={styles.sortSelect}
          />
        </div>
      </div>
    </section>
  );
}
