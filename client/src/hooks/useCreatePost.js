import { useState } from 'react';
import { createPost } from '../api/posts';

export function useCreatePost() {
  const [id, setId] = useState('');

  const submitPost = async (name, description, price, tags = [], img = "") => {
    try {
      const { id } = await createPost(name, description, price, tags, img);
      setId(id);
      return id;
    } catch (error) {
      console.log('[useCreatePost] Error: ', error);
    }
  };

  return { id, submitPost };
}