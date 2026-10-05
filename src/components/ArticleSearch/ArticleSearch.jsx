"use client";
import { useState } from "react";
import { ArticleList } from "@/components/ArticleList";
import { SearchBar } from "@/components/Searchbar/";
import { ARTICLE_LIMIT } from "@/constants/article";
import { DropDown } from "@/components/DropDown";
import * as styles from './ArticleSearch.css.js';

export default function ArticleSearch({ articlePromise }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  return (
    <>
      <div className={styles.searchNdrop}>
        <SearchBar onSearch={setSearch} />
        <DropDown onSortChange={setSortBy} />
      </div>
      <div>
        <ArticleList
          articlePromise={articlePromise} // 여전히 Promise 그대로 전달
          limit={ARTICLE_LIMIT}
          keyword={search}
          sortBy={sortBy}
          className="list"
        />
      </div>
    </>
  );
}
