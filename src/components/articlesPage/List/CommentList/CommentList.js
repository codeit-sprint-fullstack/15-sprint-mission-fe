import List from "@/components/articlesPage/List/List";
import CommentCard from "@/components/articlesPage/CommentCard/CommentCard";
import EmptyState from "@/components/common/EmptyState/EmptyState";
import imgReplyEmpty from "@/assets/images/img-reply-empty.svg";
import * as styles from "./CommentList.css";

export default function CommentList({ comments = [] }) {
  return (
    <List
      items={comments}
      renderItem={(comment) => <CommentCard comment={comment} />}
      emptyComponent={
        <EmptyState
          image={imgReplyEmpty}
          messageClassName={styles.emptyMessage}
          message={
            <span>
              아직 댓글이 없어요,
              <br />
              지금 댓글을 달아보세요!
            </span>
          }
        />
      }
    />
  );
}
