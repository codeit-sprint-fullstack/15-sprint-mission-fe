import { ArticleSearch } from "@/components/ArticleSearch/";
import * as styles from './ArticleSection.css'
import Link from "next/link";

async function getArticleSection() {
  // const response = await fetch(`/api/articles`);
  const response = await fetch(`${process.env.API_URL}/api/articles`);
  if (!response.ok) {
    throw new Error("최신 게시글을 불러오지 못했습니다.");
  }
  return response.json();
}

export default function ArticleSection() {
  const articlePromise = getArticleSection();

  return (
    <section>
      <div className={styles.articleHeader}>
        <div className={styles.title}>게시글</div>
        <Link href={'/articles/registration'} className={styles.writeBtn}>글쓰기</Link>
      </div>
      <div>
        <ArticleSearch articlePromise={articlePromise} />
      </div>
    </section>
  );
}
