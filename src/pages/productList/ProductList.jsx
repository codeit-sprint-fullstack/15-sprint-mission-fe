import { Pagination } from "../../components/Pagination/Pagination";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { SortButton } from "../../components/SortButton/SortButton";
import { usePagination } from "../../hooks/usePagination";
import { useProducts } from "../../hooks/useProducts";
import { useRef, useState } from "react";
import styles from "./ProductList.module.css";
import { ProductCard } from "../productCard/productCard";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { useDevice } from "../../hooks/useDevice";

export function ProductList() {
  const [standard, setStandard] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const { isTablet, isMobile } = useDevice();
  const pageSize = isMobile ? 4 : isTablet ? 6 : 10;
  const searchInputRef = useRef(null);

  const { currentPage, totalPages, goToPage, setTotalCount } = usePagination(
    1,
    pageSize,
  );
  const { products, isLoading } = useProducts({
    page: currentPage,
    pageSize,
    standard,
    keyword,
    setTotalCount,
  });

  const handleSearch = () => {
    setKeyword(searchInputRef.current.value);
  };

  return (
    <div className={styles.productListContainer}>
      <div className={styles.productListHeader}>
        <div className={styles.headerTop}>
          <h2>판매 중인 상품</h2>
          <SearchButton onClick={handleSearch} className={styles.searchBtn} />
        </div>
        <div className={styles.headerBottom}>
          <SearchInput inputRef={searchInputRef} className={styles.search} />
          <SortButton
            standard={standard}
            onChange={setStandard}
            mobileIcon={isMobile}
            className={styles.sort}
          />
        </div>
      </div>
      <div className={styles.productCardsContainer}>
        {isLoading
          ? "로딩 중..."
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </div>
  );
}
