'use client';

import { createReply } from '@/lib/api/replies';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import * as styles from './CreateReply.css';

function CreateReply() {
  const { id } = useParams();
  const [reply, setReply] = useState('');
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newReply) => createReply(newReply),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.replies.list(id) });

      setReply('');
    },
    onError: (error) => {
      alert('댓글 등록에 실패했습니다.');
      console.error(error);
    },
  });

  const handleSubmit = (event) => {
    if (isPending) return;
    event.preventDefault();

    const trimmedReply = reply.trim();

    if (!trimmedReply) {
      alert('댓글을 입력해주세요.');
      return;
    }

    mutate({
      articleId: id,
      content: trimmedReply,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="reply">댓글달기</label>
      <textarea
        id="reply"
        value={reply}
        className={styles.replyTextarea}
        onChange={(event) => setReply(event.target.value)}
      />
      <button
        disabled={isPending || !reply.trim()}
        className={clsx(
          styles.registerBtn,
          !isPending && reply.trim() && styles.isActive,
        )}
        type="submit"
      >
        등록
      </button>
    </form>
  );
}

export default CreateReply;
