import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";
import { getArticle } from "../../../api/articles";
import CommentForm from "../../../components/CommentForm/CommentForm";
import CommentList from "../../../components/CommentList/CommentList";
import * as styles from "./page.css.js";
import BackButton from "../../../components/BackButton/BackButton.jsx";
import { getComments } from "../../../api/comment.js";

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const { data: article } = await getArticle(id);
  const targetType = "articles";

  const { data: comments } = await getComments({
    targetType,
    targetId: id,
  });

  return (
    <div className={styles.container}>
      <ArticleDetail article={article} />
      <div>
        <CommentForm id={id} />
        <CommentList
          comments={comments}
          targetType={targetType}
          targetId={id}
        />
      </div>
      <BackButton />
    </div>
  );
}
