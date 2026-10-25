"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "./BoardSearch.css.js";

export default function BoardSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("desc");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      q: keyword.trim(),
      orderBy,
    });

    router.push(`/boards?${params.toString()}`);
  };

  const handleOnChange = (event) => {
    const nextOrderBy = event.target.value;

    setOrderBy(nextOrderBy);

    const params = new URLSearchParams({
      q: keyword.trim(),
      orderBy: nextOrderBy,
    });

    router.push(`/boards?${params.toString()}`);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          aria-label="게시글 검색"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="검색어를 입력하세요"
        />

        <select
          className={styles.select}
          aria-label="게시글 정렬 기준"
          value={orderBy}
          onChange={handleOnChange}
        >
          <option value="desc">최신순</option>
          <option value="asc">오래된 순</option>
        </select>
      </form>
    </>
  );
}
