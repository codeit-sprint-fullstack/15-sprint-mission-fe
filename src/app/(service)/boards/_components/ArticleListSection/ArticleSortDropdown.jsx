'use client';
import icArrowDown from '@/assets/boards/ic_arrow_down.svg';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import * as styles from './ArticleSortDropdown.css';

const SORT_OPTIONS = [
  { label: '최신순', value: 'recent' },
  { label: '좋아요순', value: 'favorite' },
];

function ArticleDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const currentOrderBy = searchParams.get('orderBy') || 'recent';

  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === currentOrderBy).label || '최신순';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectOption = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('orderBy', value);
    params.set('page', 1);

    router.push(`/boards?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentLabel}
        <Image src={icArrowDown} alt="드롭다운 화살표 이미지" />
      </button>
      {isOpen && (
        <ul className={styles.menuList}>
          {SORT_OPTIONS.map((option) => (
            <li
              key={option.value}
              className={styles.menuItem}
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArticleDropdown;
