import { useState, useEffect } from 'react';
import { getPostById } from '../api/posts';

export function useGetPostById(idValue) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getPostData = async () => {
      try {
        const { data } = await getPostById(
          idValue,
        );
        setPost(data);
      } catch (error) {
        console.log('[useGetPostById]Error: ', error);
      }
    };
    getPostData();
  }, [idValue]);

console.log('usePostById:',post);
  return post;
}
