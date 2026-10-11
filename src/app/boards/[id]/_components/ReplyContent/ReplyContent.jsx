import icBack from '@/assets/boards/ic_back.svg';
import Image from 'next/image';
import Link from 'next/link';
import CreateReply from './CreateReply';
import * as styles from './ReplyContent.css';
import ReplyList from './ReplyList';

function ReplyContent() {
  return (
    <section className={styles.container}>
      <CreateReply />
      <ReplyList />
      <div className={styles.backButtonContainer}>
        <Link href={'/boards'} className={styles.backButton}>
          목록으로 돌아가기
          <Image src={icBack} alt="뒤로가기 아이콘" />
        </Link>
      </div>
    </section>
  );
}

export default ReplyContent;
