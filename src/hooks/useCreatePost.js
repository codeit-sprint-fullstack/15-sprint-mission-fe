import { useState } from 'react';
import { createPost } from '../api/posts';

export function useCreatePost() {
  const [id, setId] = useState('');
  const [isLoding, setIsLoding] = useState(false);

  const submitPost = async (name, description, price, tags = [], img = 'https://picsum.photos/250/250') => {
    try {
      setIsLoding(true);
      console.log('로딩중...', isLoding);
      const { id } = await createPost(name, description, price, tags, img);
      setId(id);
      return id;
    } catch (error) {
      console.log('[useCreatePost] Error: ', error);
    } finally {
      setIsLoding(false);
      console.log('로딩완료', isLoding);
    }
  };

  return { id, isLoding, submitPost };
}
