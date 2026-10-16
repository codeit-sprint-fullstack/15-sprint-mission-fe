"use client";

import icSearch from "@/assets/images/ic-search.svg";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import * as styles from "./SearchBar.css";
import Image from "next/image";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentKeyword = searchParams.get("keyword") ?? "";

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const keyword = formData.get("keyword").trim();
    const params = new URLSearchParams(searchParams.toString());

    params.delete("keyword");
    if (keyword) params.set("keyword", keyword);
    params.delete("page");

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
      key={currentKeyword}
    >
      <Image src={icSearch} alt="검색 아이콘" width={24} height={24} />
      <input
        className={styles.searchInput}
        type="search"
        name="keyword"
        placeholder="검색할 상품을 입력해주세요"
        defaultValue={currentKeyword}
      />
    </form>
  );
}
