'use client';

import { fetchArticle, updateArticle } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as styles from './page.css';

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
      title: trimmedTitle,
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
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>게시글 수정</h2>
          <div className={styles.buttonGroup}>
            <button
              className={styles.cancelBtn}
              type="button"
              onClick={() => router.back()}
            >
              취소
            </button>
            <button
              className={clsx(
                styles.createBtn,
                !isUpdating &&
                  title.trim() &&
                  content.trim() &&
                  styles.isActive,
              )}
              disabled={isUpdating || !title.trim() || !content.trim()}
              type="submit"
            >
              {isUpdating ? '수정중...' : '수정'}
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="title">
              *제목
            </label>
            <input
              className={styles.titleInput}
              id="title"
              value={title}
              placeholder="제목을 입력해주세요"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="content">
              *내용
            </label>

            <textarea
              className={styles.contentTextarea}
              id="content"
              value={content}
              placeholder="내용을 입력해주세요"
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditArticle;
