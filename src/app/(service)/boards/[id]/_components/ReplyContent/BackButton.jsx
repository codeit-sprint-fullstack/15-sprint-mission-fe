'use client';

import icBack from '@/assets/boards/ic_back.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as styles from './BackButton.css';

function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className={styles.backButton}
    >
      목록으로 돌아가기
      <Image src={icBack} alt="뒤로가기 아이콘" />
    </button>
  );
}

export default BackButton;
