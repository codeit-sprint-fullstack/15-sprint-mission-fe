import icKebab from '@/assets/boards/ic_kebab.svg';
import { deleteArticle } from '@/lib/api/articles';
import { queryKeys } from '@/lib/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import * as styles from './ArticleOptionMenu.css';

function ArticleOptionMenu({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const optionMenuRef = useRef(null);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.articles.all() });
      alert('게시글이 삭제되었습니다.');
      router.push('/boards');
    },
    onError: (error) => {
      alert('게시글 삭제에 실패했습니다. 다시 시도해주세요.');
      console.error(error);
    },
  });

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

  const handleArticleDelete = () => {
    if (isPending) return;
    const result = window.confirm('정말 삭제하시겠습니까?');
    if (!result) return;

    setIsOpen(false);
    mutate();
  };
  const handleArticleEdit = () => {
    router.push(`/boards/edit/${id}`);
  };

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
          <li className={styles.optionMenu} onClick={handleArticleEdit}>
            수정하기
          </li>
          <li className={styles.optionMenu} onClick={handleArticleDelete}>
            {isPending ? '삭제중...' : '삭제하기'}
          </li>
        </ul>
      )}
    </div>
  );
}
export default ArticleOptionMenu;
