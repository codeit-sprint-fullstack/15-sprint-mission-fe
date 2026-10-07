"use client";

import { useState } from "react";
import styles from "./SearchFilter.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const [sort, setSort] = useState(searchParams.get("sort") ?? "desc");

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    const query = search.trim();

    if (query) params.set("q", query);
    params.set("sort", sort);

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <form className={styles.searchFilter} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        className={styles.search}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <select
        className={styles.filter}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option selected value="desc">
          최신순
        </option>
        <option value="asc">오래된순</option>
        {/* <option value="likes">좋아요순</option> 좋아요 데이터 생기면 활성화 */}
      </select>
    </form>
  );
}
