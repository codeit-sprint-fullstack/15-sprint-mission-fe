"use client";

import { useState, useTransition } from "react";
import styles from "./SearchFilter.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { normalizeSort } from "@/utils/normalizeSort";

export default function SearchFilter() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const [sort, setSort] = useState(
    normalizeSort(searchParams.get("sort") ?? "desc"),
  );
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUrl(search, sort);
  };

  const handleSortChange = (event) => {
    let nextSort = event.target.value;
    setSort(nextSort);
    updateUrl(search, nextSort);
  };

  const updateUrl = (nextSearch, nextSort) => {
    const params = new URLSearchParams();
    const query = nextSearch.trim();

    if (query) params.set("q", query);
    params.set("sort", nextSort);

    startTransition(() => {
      router.replace(`${pathName}?${params.toString()}`);
    });
  };

  return (
    <form className={styles.searchFilter} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색할 게시글을 입력해주세요"
        aria-label="게시글 검색"
        className={styles.search}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        maxLength={50}
      />
      <select
        className={styles.filter}
        aria-label="게시글 정렬"
        value={sort}
        onChange={(e) => handleSortChange(e)}
        // disabled={isPending}
        aria-busy={isPending}
        role="status"
      >
        <option value="desc">최신순</option>
        <option value="asc">오래된순</option>
        {/* <option value="likes">좋아요순</option> 좋아요 데이터 생기면 활성화 */}
      </select>
    </form>
  );
}
