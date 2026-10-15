'use client';

import logo from '@/assets/common/logo.svg';
import wordType from '@/assets/common/word_type.svg';
import { textLg } from '@/styles/typography.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as styles from './Navigation.css';

function Navigation() {
  const pathname = usePathname();
  const isBoard = pathname.includes('/boards');
  const isItems = pathname.includes('/items');

  const router = useRouter();

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
      </div>
    </nav>
  );
}

export default Navigation;
