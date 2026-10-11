import icKebab from '@/assets/boards/ic_kebab.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import * as styles from './ArticleOptionMenu.css';

function ArticleOptionMenu({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const optionMenuRef = useRef(null);

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

  const handleArticleDelete = () => {};
  const handleArticleEdit = () => {};

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
            삭제하기
          </li>
        </ul>
      )}
    </div>
  );
}
export default ArticleOptionMenu;
