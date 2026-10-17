"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./items.module.css";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { ProductsCardList } from "@/components/pages/items/ProductsCardList/";
import { PaginationButton } from "@/components/pages/items/PaginationButton/";
import useProduct from "@/components/hooks/useProduct";

function Items() {
  const {
    products,
    totalPages,
    goToPage,
    currentPage,
    setSort,
    setKeyword,
    isLoading,
    error,
  } = useProduct();

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setKeyword(searchInput.trim());
    }
  };

  if (isLoading) return <div>로딩</div>;

  if (error) return <div>에러</div>;

  return (
    <main className={styles.main}>
      <div id="productsTitle" className={styles.productsHeader}>
        <h1 className={styles.productsTitle}>판매 중인 상품</h1>
        <div className={styles.searchInput}>
          <CiSearch />
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={searchInput}
            onKeyDown={handleSearch}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <button className={styles.addProductButton}>
          <Link href="/registration">상품 등록하기</Link>
        </button>

        <div className={styles.sortDropdown}>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="createdAt" className={styles.option}>
              최신순
            </option>
            <option value="favoriteCount" className={styles.option}>
              좋아요순
            </option>
          </select>
          <FaCaretDown className={styles.normalSize} />
          <FaSortAmountDown className={styles.mobileSize} />
        </div>
      </div>

      <ProductsCardList products={products} />
      <PaginationButton
        totalPages={totalPages}
        currentPage={currentPage}
        goToPage={goToPage}
      />
    </main>
  );
}
export default Items;
