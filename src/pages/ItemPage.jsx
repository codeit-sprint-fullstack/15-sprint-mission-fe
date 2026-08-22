import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ItemHead } from '../components/ItemHead/ItemHead';
import { Pagination } from '../components/Pagination/Pagination';
import { ShowProductsList } from '../components/ShowProductsList/ShowProductsList';
import { useGetPost } from '../hooks/useGetPost';
import { useWindowSize } from '../hooks/useWindowSize';

export function ItemPage() {
  const [sort, setSort] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const limitParams = searchParams.get('limit');
  const sortParams = searchParams.get('sort');
  const keywordParams = searchParams.get('keyword');
  const windowWidth = useWindowSize();
  const limit = windowWidth <= 480 ? 4 : windowWidth <= 768 ? 6 : 10;

  console.log('params:', limitParams, sortParams, keywordParams);
  const { posts, totalPages, currentPage, isLoding, handleCurrentPage } =
    useGetPost(limitParams ?? limit, sortParams, keywordParams);
  const handleSearch = (searchValue) => {
    setSearchParams({ limit: limit, sort: sort, keyword: searchValue });
    setKeyword(searchValue);
  };
  const handleSort = (sortValue) => {
    setSearchParams({ limit: limit, sort: sortValue, keyword: keyword });
    setSort(sortValue);
  };

  return (
    <>
      <ItemHead search={handleSearch} sort={handleSort} />
      <ShowProductsList posts={posts} isLoding={isLoding} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleCurrentPage}
      />
    </>
  );
}
