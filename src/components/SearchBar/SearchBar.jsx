"use client";

import Image from "next/image";
import { useState } from "react";
import * as styles from "@/styles/shared.css";

export function SearchBar({ onSearch, initialValue = "", fluid = false }) {
  const [value, setValue] = useState(initialValue);

  return (
    <form
      className={fluid ? styles.searchBarFluid : styles.searchBar}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(value.trim());
      }}
    >
      <Image
        src="/assets/icons/ic_search.svg"
        alt=""
        width={18}
        height={18}
        className={styles.searchIcon}
      />
      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="검색어를 입력하세요..."
        className={styles.searchInput}
      />
    </form>
  );
}
