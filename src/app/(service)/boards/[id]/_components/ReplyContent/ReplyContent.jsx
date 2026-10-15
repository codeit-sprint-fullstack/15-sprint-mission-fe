import BackButton from './BackButton';
import CreateReply from './CreateReply';
import * as styles from './ReplyContent.css';
import ReplyList from './ReplyList';

function ReplyContent() {
  return (
    <section className={styles.container}>
      <CreateReply />
      <ReplyList />
      <div className={styles.backButtonContainer}>
        <BackButton />
      </div>
    </section>
  );
}

export default ReplyContent;
