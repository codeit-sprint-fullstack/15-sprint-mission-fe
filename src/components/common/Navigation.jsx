'use client';

import icProfile from '@/assets/boards/ic_profile.svg';
import logo from '@/assets/common/logo.svg';
import wordType from '@/assets/common/word_type.svg';
import { useAuth } from '@/providers/AuthProvider';
import { textLg } from '@/styles/typography.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import * as styles from './Navigation.css';

function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const isBoard = pathname.includes('/boards');
  const isItems = pathname.includes('/items');

  const userProfileRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { user, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userProfileRef.current &&
        !userProfileRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link href={'/'} className={styles.logoWrapper}>
            <Image className={styles.logo} src={logo} alt="로고 이미지" />
            <Image
              className={clsx((isBoard || isItems) && styles.wordType)}
              src={wordType}
              alt="워드 타입"
            />
          </Link>
          {(isBoard || isItems) && (
            <div>
              <Link
                className={clsx(styles.menuBoard, isBoard && styles.activeMenu)}
                href={'/boards'}
              >
                자유게시판
              </Link>
              <Link
                className={clsx(styles.menuItems, isItems && styles.activeMenu)}
                href={'/items'}
              >
                중고마켓
              </Link>
            </div>
          )}
        </div>
        {isLoggedIn && user ? (
          <div
            className={styles.userInfoContainer}
            ref={userProfileRef}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Image
              className={styles.userImage}
              src={user.image || icProfile}
              alt="기본 프로필 이미지"
            />
            <span className={styles.userNickname}>{user.nickname}</span>
            {isOpen && (
              <button
                className={clsx(
                  styles.logoutButton,
                  styles.loginButton,
                  textLg.semibold,
                  (isBoard || isItems) && styles.loginButtonWithLinks,
                )}
                onClick={() => logout()}
              >
                로그아웃
              </button>
            )}
          </div>
        ) : (
          <button
            className={clsx(
              styles.loginButton,
              textLg.semibold,
              (isBoard || isItems) && styles.loginButtonWithLinks,
            )}
            onClick={() => router.push('/login')}
          >
            로그인
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
