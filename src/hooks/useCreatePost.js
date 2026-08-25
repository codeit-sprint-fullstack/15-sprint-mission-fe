import { useState } from 'react';
import { createPost } from '../api/posts';

export function useCreatePost() {
  const [id, setId] = useState('');
  const [isLoding, setIsLoding] = useState(false);

  const submitPost = async (name, description, price, tags = [], img = 'https://picsum.photos/250/250') => {
    try {
      setIsLoding(true);
      const { id } = await createPost(name, description, price, tags, img);
      setId(id);
      return id;
    } catch (error) {
      throw new Error("useCreatePost ERROR", { cause: error });
    } finally {
      setIsLoding(false);
    }
  };

  return { id, isLoding, submitPost };
}
