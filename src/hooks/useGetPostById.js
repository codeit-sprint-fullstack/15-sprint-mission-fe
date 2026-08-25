import { useState, useEffect } from 'react';
import { getPostById } from '../api/posts';

export function useGetPostById(idValue) {
  const [isLoding, setIsLoding] = useState(false);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getPostData = async () => {
      try {
        setIsLoding(true);
        const { data } = await getPostById(idValue);
        setPost(data);
      } catch (error) {
        throw new Error("useGetPost ERROR", { cause: error });
      } finally {
        setIsLoding(false);
      }
    };
    getPostData();
  }, [idValue]);

  const value = { post, isLoding };
  return value;
}
