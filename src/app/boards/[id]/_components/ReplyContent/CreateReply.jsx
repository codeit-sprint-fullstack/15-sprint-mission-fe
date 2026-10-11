'use client';

import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import * as styles from './CreateReply.css';

function CreateReply() {
  const { id } = useParams();
  const [reply, setReply] = useState('');

  const { mutate, isPending } = useMutation({
    mutationFn: () => {},
    onSuccess: () => {},
    onError: () => {},
  });

  const handleSubmit = () => {};

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
