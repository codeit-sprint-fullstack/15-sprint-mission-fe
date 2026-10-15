'use client';

import { createArticle } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as styles from './page.css';

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (newArticle) => createArticle(newArticle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.articles.all() });
      router.push('/boards');
    },
    onError: (error) => {
      alert('게시글 등록에 실패했습니다. 다시 시도해주세요.');
      console.error(error);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
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

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>게시글 쓰기</h2>
          <button
            className={clsx(
              styles.createBtn,
              !isPending && title.trim() && content.trim() && styles.isActive,
            )}
            disabled={isPending || !title.trim() || !content.trim()}
            type="submit"
          >
            {isPending ? '등록 중...' : '등록'}
          </button>
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

export default CreateArticle;
