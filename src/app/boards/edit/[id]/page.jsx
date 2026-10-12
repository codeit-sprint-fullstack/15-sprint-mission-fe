'use client';

import { fetchArticle, updateArticle } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function EditArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: article,
    isPending,
    error,
  } = useQuery({
    queryKey: queryKeys.articles.detail(id),
    queryFn: () => fetchArticle(id),
  });

  const { mutate, isPending: isUpdating } = useMutation({
    mutationFn: (updateData) => updateArticle({ id, ...updateData }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.articles.detail(id),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.articles.all(),
      });

      alert('게시글이 수정되었습니다.');
      router.push(`/boards/${id}`);
    },
    onError: (error) => {
      alert('수정에 실패했습니다. 다시 시도해주세요.');
      console.error(error);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isUpdating) return;

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    mutate({
      title: trimmedContent,
      content: trimmedContent,
    });
  };

  useEffect(() => {
    if (article) {
      setTitle(article.data.title || '');
      setContent(article.data.content || '');
    }
  }, [article]);

  if (isPending) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>게시글 호출 실패: {error.message}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <div>
        <button type="button" onClick={() => router.back()}>
          취소
        </button>
        <button type="submit">수정</button>
      </div>
    </form>
  );
}

export default EditArticle;
