import BestArticleCard from "@/components/articlesPage/BestArticleCard/BestArticleCard";
import * as styles from "./BestArticleList.css.js";

export default function BestArticleList({ articles }) {
  return (
    <ul className={styles.articlesGrid}>
      {articles.map((article) => (
        <li key={article.id}>
          <BestArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
