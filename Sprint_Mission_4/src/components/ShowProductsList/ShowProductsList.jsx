import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/posts';

const INITIAL_TOTAL_COUNT = 0;
const INITIAL_PAGE = 1;

export function ShowProductsList({page = 1, pageSize = 10, orderBy = 'recent', keyWord = undefined}) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const [totalCount, setTotalCount] = useState(INITIAL_TOTAL_COUNT);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const totalPages = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { list, totalCount } = await fetchPosts(
          currentPage,
          pageSize,
          orderBy,
          keyWord,
        );
        setPosts(list);
        setTotalCount(totalCount);
      } catch (error) {
        console.log('[getPosts]Error: ', error);
        setError(error.message);
      }
    };
    getPosts();
  }, [currentPage]);

  function trigger() {
    setCurrentPage((prev) => prev + 1);
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>ShowProductsList</h1>
      <p>전체 게시물 숫자: {totalCount}</p>
      <p>페이지 숫자: {totalPages}</p>
      <p>현재 페이지: {currentPage}</p>
      <ul>{posts.map(({id, name}) => (<li key={id}>{name}</li>))}</ul>
      <button onClick={trigger}>trigger</button>
    </div>
  );
}
