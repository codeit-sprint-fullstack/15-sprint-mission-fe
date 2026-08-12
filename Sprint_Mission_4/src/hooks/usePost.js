import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/posts';

const INITIAL_TOTAL_COUNT = 0;

export function usePost(currentPage = 1, pageSize, orderBy, keyword) {
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

  const value = {
    posts,
    totalPages
  }

  return value;
}
