import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts';

const INITIAL_TOTAL_PAGES = 0;
const INITIAL_PAGE = 1;

export function useGetPost(limit, sort, keyword) {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(INITIAL_TOTAL_PAGES);
  const [isLoding, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState();
  useEffect(() => {
    const getPostsData = async () => {
      try {
        setIsLoading(true);
        const { data, totalPages, isSuccess } = await getPosts(
          currentPage,
          limit,
          sort,
          keyword,
        );
        setPosts(data);
        setTotalPages(totalPages);
        setIsSuccess(isSuccess);
      } catch (error) {
        console.log('[useGetPosts]Error: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    getPostsData();
  }, [currentPage, limit, sort, keyword, isSuccess]);

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
    isSuccess,
    handleCurrentPage,
  };
  return value;
}