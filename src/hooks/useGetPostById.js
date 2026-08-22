import { useState, useEffect } from 'react';
import { getPostById } from '../api/posts';

export function useGetPostById(idValue) {
  const [isLoding, setIsLoding] = useState(false);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getPostData = async () => {
      try {
        setIsLoding(true);
        console.log('로딩중...', isLoding);
        const { data } = await getPostById(idValue);
        setPost(data);
      } catch (error) {
        console.log('[useGetPostById]Error: ', error);
      } finally {
        setIsLoding(false);
        console.log('로딩완료', isLoding);
      }
    };
    getPostData();
  }, [idValue]);

  console.log('usePostById:', post);
  const value = { post, isLoding };
  return value;
}
