"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as styles from "./ArticleSearch.css.js";

export default function ArticleSearch({ defaultKeyword = "" }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(defaultKeyword);

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = keyword.trim();

    if (!query) {
      router.push("/board");
      return;
    }

    router.push(`/board?keyword=${encodeURIComponent(query)}`);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="검색할 게시글 제목을 입력해주세요"
      />
    </form>
  );
}
