import CreateReply from './CreateReply';
import * as styles from './ReplyContent.css';
import ReplyList from './ReplyList';

function ReplyContent() {
  return (
    <section className={styles.container}>
      <CreateReply />
      <ReplyList />
    </section>
  );
}

export default ReplyContent;
