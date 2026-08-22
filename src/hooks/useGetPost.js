import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts';

const INITIAL_TOTAL_PAGES = 0;
const INITIAL_PAGE = 1;

export function useGetPost(limit, sort, keyword) {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(INITIAL_TOTAL_PAGES);
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    const getPostsData = async () => {
      try {
        setIsLoding(true);
        console.log('로딩중...', isLoding);
        const { data, totalPages } = await getPosts(
          currentPage,
          limit,
          sort,
          keyword,
        );
        setPosts(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.log('[useGetPosts]Error: ', error);
      } finally {
        setIsLoding(false);
        console.log('로딩완료', isLoding);
      }
    };
    getPostsData();
  }, [currentPage, limit, sort, keyword]);

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
    isLoding,
    handleCurrentPage,
  };
  console.log('usePost:', posts);
  return value;
}
