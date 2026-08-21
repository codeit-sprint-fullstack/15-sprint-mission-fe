import { useState } from 'react';
import { useSearchParams } from "react-router-dom"
import { ItemHead } from '../components/ItemHead/ItemHead';
import { Pagination } from '../components/Pagination/Pagination';
import { ShowProductsList } from '../components/ShowProductsList/ShowProductsList';
import { useGetPost } from '../hooks/useGetPost';

export function ItemPage() {
  const [sort, setSort] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(5);
  const [searchParams, setSearchParams] = useSearchParams();
  const limitParams = searchParams.get('limit');
  const sortParams = searchParams.get('sort');
  const keywordParams = searchParams.get('keyword');
  console.log('params:', limitParams, sortParams, keywordParams);
  const { posts, totalPages, currentPage, handleCurrentPage } = useGetPost(
    limitParams,
    sortParams,
    keywordParams,
  );
  const handleSearch = (searchValue) => {
    setSearchParams({limit: limit, sort: sort, keyword: searchValue});
    setKeyword(searchValue);
  };
  const handleSort = (sortValue) => {
    setSearchParams({limit: limit, sort: sortValue, keyword: keyword});
    setSort(sortValue);
  };

  return (
    <>
      <h1>중고마켓 페이지입니다.</h1>
      <ItemHead search={handleSearch} sort={handleSort} />
      <ShowProductsList posts={posts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handleCurrentPage}
      />
    </>
  );
}
