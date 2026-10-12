'use client';

import icKebab from '@/assets/boards/ic_kebab.svg';
import { deleteReply } from '@/lib/api/replies';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import * as styles from './ReplyOptionMenu.css';

function ReplyOptionMenu({ id, onEdit }) {
  const [isOpen, setIsOpen] = useState(false);
  const optionMenuRef = useRef(null);
  const queryClient = useQueryClient();
  const { id: articleId } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteReply(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.replies.list(articleId),
      });
      alert('댓글이 삭제되었습니다.');
    },
    onError: (error) => {
      alert('댓글 삭제에 실패했습니다. 다시 시도해주세요');
      console.error(error);
    },
  });

  const handleEdit = () => {
    onEdit();
  };
  const handleDelete = () => {
    if (isPending) return;
    const result = window.confirm('정말 삭제하시겠습니까?');
    if (!result) return;

    setIsOpen(false);
    mutate(id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        optionMenuRef.current &&
        !optionMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={optionMenuRef}>
      <button
        className={styles.optionMenuToggleButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image src={icKebab} alt="더보기 버튼 아이콘" />
      </button>

      {isOpen && (
        <ul className={styles.optionMenuContainer}>
          <li className={styles.optionMenu} onClick={handleEdit}>
            수정하기
          </li>
          <li className={styles.optionMenu} onClick={handleDelete}>
            {isPending ? '삭제중...' : '삭제하기'}
          </li>
        </ul>
      )}
    </div>
  );
}

export default ReplyOptionMenu;
