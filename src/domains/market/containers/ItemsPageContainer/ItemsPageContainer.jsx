"use client";

import { startTransition, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { SearchIcon } from "@/components/Icons";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { queryKeys, useProducts } from "@/domains/market/hooks/useProductQueries";
import { fetchProductList } from "@/apis";
import { ErrorMessage } from "@/domains/market/components/Status";
import { ProductCard } from "@/domains/market/components/ProductCard";
import { ProductCardSkeleton } from "@/domains/market/components/ProductCardSkeleton";
import { Pagination } from "@/domains/market/components/Pagination";
import { SortDropdown } from "@/domains/market/components/SortDropdown";
import * as styles from "./ItemsPageContainer.css";

const BEST_COUNT = { pc: 4, tablet: 2, mobile: 1 };
const LIST_COUNT = { pc: 10, tablet: 6, mobile: 4 };

export function ItemsPageContainer() {
  const breakpoint = useBreakpoint();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [searchInput, setSearchInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const bestCount = breakpoint ? BEST_COUNT[breakpoint] : undefined;
  const listCount = breakpoint ? LIST_COUNT[breakpoint] : undefined;

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(searchInput.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    startTransition(() => setPage(1));
  }, [listCount]);

  const bestQuery = useProducts(
    { page: 1, pageSize: bestCount, orderBy: "favorite" },
    { enabled: Boolean(bestCount) },
  );

  const listParams = useMemo(() => ({ page, pageSize: listCount, orderBy, keyword }), [page, listCount, orderBy, keyword]);
  const listQuery = useProducts(listParams, { enabled: Boolean(listCount) });

  const totalPages = listQuery.data ? Math.ceil(listQuery.data.totalCount / listCount) : 0;

  useEffect(() => {
    if (!listCount || page >= totalPages) return;
    const nextParams = { ...listParams, page: page + 1 };
    queryClient.prefetchQuery({
      queryKey: queryKeys.productList(nextParams),
      queryFn: () => fetchProductList(nextParams),
      staleTime: 30 * 1000,
    });

  }, [page, totalPages, orderBy, keyword, listCount, listParams, queryClient]);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>베스트 상품</h2>
        {bestQuery.isError ? (
          <ErrorMessage onRetry={() => bestQuery.refetch()} />
        ) : !bestQuery.data ? (

          <div className={styles.bestGrid}>
            {Array.from({ length: bestCount ?? 4 }, (_, index) => (
              <div key={index} className={styles.gridItem}>
                <ProductCardSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <ul className={styles.bestGrid}>
            {bestQuery.data.list.map((product) => (
              <li key={product.id} className={styles.gridItem}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={`${styles.section} ${styles.sectionSpacing}`}>
        <div className={styles.head}>
          <h2 className={`${styles.title} ${styles.headTitle}`}>판매 중인 상품</h2>

          <label className={styles.search}>
            <SearchIcon />
            <input
              type="search"
              className={styles.searchInput}
              placeholder="검색할 상품을 입력해주세요"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </label>

          <Link href="/registration" className={styles.addButton}>
            상품 등록하기
          </Link>

          <div className={styles.sort}>
            <SortDropdown
              value={orderBy}
              onChange={(value) => {
                setOrderBy(value);
                setPage(1);
              }}
            />
          </div>
        </div>

        {listQuery.isError ? (
          <ErrorMessage onRetry={() => listQuery.refetch()} />
        ) : !listQuery.data ? (
          <div className={styles.listGrid}>
            {Array.from({ length: listCount ?? 10 }, (_, index) => (
              <div key={index} className={styles.gridItem}>
                <ProductCardSkeleton />
              </div>
            ))}
          </div>
        ) : listQuery.data.list.length === 0 ? (
          <p className={styles.empty}>
            {keyword ? "검색 결과가 없어요." : "등록된 상품이 없어요."}
          </p>
        ) : (
          <ul className={`${styles.listGrid} ${listQuery.isPlaceholderData ? styles.stale : ""}`}>
            {listQuery.data.list.map((product) => (
              <li key={product.id} className={styles.gridItem}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}

        <div className={styles.pagination}>
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={(next) => setPage(Math.min(Math.max(next, 1), totalPages))}
          />
        </div>
      </section>
    </div>
  );
}