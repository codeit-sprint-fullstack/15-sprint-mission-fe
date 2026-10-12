"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as styles from "./ArticleSort.css.js";

export default function ArticleSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderBy = searchParams.get("orderBy") ?? "recent";

  const handleChange = (event) => {
    const params = new URLSearchParams(searchParams);
    params.set("orderBy", event.target.value);
    router.push(`/board?${params}`);
  };

  return (
    <select
      className={styles.container}
      value={orderBy}
      onChange={handleChange}
    >
      <option value="recent">최신순</option>
      <option value="like" disabled>
        좋아요순
      </option>
    </select>
  );
}
