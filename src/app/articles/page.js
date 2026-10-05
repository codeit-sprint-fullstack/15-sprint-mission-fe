import { ArticleSection } from "@/components/ArticleSection";
import { BestArticle } from "@/components/BestArticle";
import * as styles from "@/styles/article.css.js";

export default function articles() {
  return (
    <div className={styles.articleWrapper}>
      <section>
        <BestArticle />
        <ArticleSection />
      </section>
    </div>
  );
}
