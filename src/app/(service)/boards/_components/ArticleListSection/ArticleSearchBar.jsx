'use client';

import icSearch from '@/assets/boards/ic_search.svg';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import * as styles from './ArticleSearchBar.css';

function ArticleSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamValue = searchParams.get('search') || '';

  const [keyword, setKeyword] = useState(searchParamValue);

  const [prevSearchParam, setPrevSearchParam] = useState(searchParamValue);
  if (searchParamValue !== prevSearchParam) {
    setPrevSearchParam(searchParamValue);
    setKeyword(searchParamValue);
  }

  const handleSearchKeyword = (event) => {
    if (event.key === 'Enter') {
      const trimmedKeyword = keyword.trim();
      if (
        searchParams.get('search') === trimmedKeyword ||
        trimmedKeyword.length === 0
      ) {
        return;
      }
      const params = new URLSearchParams(searchParams.toString());
      if (trimmedKeyword) {
        params.set('search', trimmedKeyword);
      } else {
        params.delete('search');
      }
      params.set('page', '1');
      router.push(`/boards?${params.toString()}`);
    }
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Image className={styles.searchIcon} src={icSearch} alt="서치바 아이콘" />
      <input
        onChange={handleKeywordChange}
        value={keyword}
        onKeyDown={handleSearchKeyword}
        className={styles.searchInput}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default ArticleSearchBar;
