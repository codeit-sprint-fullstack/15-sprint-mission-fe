import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/posts';

const INITIAL_TOTAL_COUNT = 0;
const INITIAL_PAGE = 1;

export function usePost(pageSize, orderBy, keyword) {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(INITIAL_TOTAL_COUNT);
  const totalPages = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { list, totalCount } = await fetchPosts(
          currentPage,
          pageSize,
          orderBy,
          keyword,
        );
        setPosts(list);
        setTotalCount(totalCount);
      } catch (error) {
        console.log('[getPosts]Error: ', error);
      }
    };
    getPosts();
  }, [currentPage, pageSize, orderBy, keyword]);

  const handleCurrentPage = (selectedPage) => {
    if (selectedPage < 1 || selectedPage > totalPages) {
      console.log('페이지 선택이 잘못되었습니다.');
      return;
    }
    setCurrentPage(selectedPage);
  };

  const value = {
    posts,
    totalPages,
    currentPage,
    handleCurrentPage,
  };

  return value;
}
