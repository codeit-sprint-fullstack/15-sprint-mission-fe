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
import { ProductLoading } from "@/components/pages/items/skeleton/ProductLoading";

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
    productsPerPage,
  } = useProduct();

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setKeyword(searchInput.trim());
    }
  };

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

        <Link className={styles.addProductButton} href="/registration">
          상품 등록하기
        </Link>

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

      {isLoading ? (
        <ProductLoading count={productsPerPage} />
      ) : error ? (
        <p role="alert">상품을 불러오지 못했어요. 잠시 후 다시 시도해주세요.</p>
      ) : (
        <ProductsCardList products={products} />
      )}

      <PaginationButton
        totalPages={totalPages}
        currentPage={currentPage}
        goToPage={goToPage}
      />
    </main>
  );
}
export default Items;
