import icProfile from '@/assets/boards/ic_profile.svg';
import Image from 'next/image';
import * as styles from './ReplyItem.css';
import ReplyOptionMenu from './ReplyOptionMenu';

function ReplyItem({ reply }) {
  const { id, content, createdAt, articleId } = reply;
  return (
    <div className={styles.container}>
      <div className={styles.replyTop}>
        <p className={styles.replyContent}>{content}</p>
        <ReplyOptionMenu id={id} />
      </div>
      <div className={styles.replyBottom}>
        <div className={styles.replyProfileContainer}>
          <Image
            className={styles.replyProfileImage}
            src={icProfile}
            alt="프로필 이미지"
          />
        </div>
        <div className={styles.replyInfo}>
          <p className={styles.replyUser}>똑똑한판다</p>
          <p className={styles.replyDate}>{createdAt}</p>
        </div>
      </div>
    </div>
  );
}
export default ReplyItem;
