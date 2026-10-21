"use client";

import { useRouter } from "next/navigation";
import { BackButton } from "@/components/BackButton";
import { ArticleCommentsSection } from "@/domains/article/components/ArticleCommentsSection";
import { ArticleContentSection } from "@/domains/article/components/ArticleContentSection";
import { Kebab } from "@/domains/article/components/Kebab";
import { useCommentThread } from "@/domains/article/hooks/useCommentThread";
import { deleteArticle } from "@/apis";
import { board } from "@/styles/shared.css";

export function ArticleDetailContainer({ article, initialComments }) {
  const router = useRouter();
  const thread = useCommentThread(article.id, initialComments);

  const run = async (task) => {
    try {
      await task();
    } catch {
      alert("요청에 실패했어요. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <section className={board}>
      <ArticleContentSection article={article}>
        <Kebab
          onEdit={() => router.push(`/board/${article.id}/edit`)}
          onDelete={() =>
            run(async () => {
              await deleteArticle(article.id);
              router.push("/board");
            })
          }
        />
      </ArticleContentSection>

      <ArticleCommentsSection thread={thread} />

      <BackButton href="/board" />
    </section>
  );
}
