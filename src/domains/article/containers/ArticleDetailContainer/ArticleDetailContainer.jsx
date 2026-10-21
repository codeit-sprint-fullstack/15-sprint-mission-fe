"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton } from "@/components/BackButton";
import { useAuth } from "@/domains/auth/hooks/useAuth";
import { ArticleCommentsSection } from "@/domains/article/components/ArticleCommentsSection";
import { ArticleContentSection } from "@/domains/article/components/ArticleContentSection";
import { Kebab } from "@/domains/article/components/Kebab";
import { useCommentThread } from "@/domains/article/hooks/useCommentThread";
import {
  addArticleLike,
  deleteArticle,
  fetchArticleDetail,
  removeArticleLike,
} from "@/apis";
import { board } from "@/styles/shared.css";

export function ArticleDetailContainer({ article, initialComments }) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const thread = useCommentThread(article.id, initialComments);

  const [like, setLike] = useState({
    likeCount: article.likeCount ?? 0,
    isLiked: Boolean(article.isLiked),
  });
  const [isLikePending, setIsLikePending] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return undefined;

    let alive = true;
    fetchArticleDetail(article.id)
      .then((data) => {
        if (alive && data) {
          setLike({
            likeCount: data.likeCount ?? 0,
            isLiked: Boolean(data.isLiked),
          });
        }
      })
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, [article.id, isLoggedIn]);

  const run = async (task) => {
    try {
      await task();
    } catch {
      alert("요청에 실패했어요. 잠시 후 다시 시도해주세요.");
    }
  };

  const handleToggleLike = async () => {
    if (!isLoggedIn) {
      router.push("/signin");
      return;
    }
    if (isLikePending) return;

    const next = !like.isLiked;
    setLike((prev) => ({
      likeCount: Math.max(0, prev.likeCount + (next ? 1 : -1)),
      isLiked: next,
    }));
    setIsLikePending(true);

    try {
      const data = next
        ? await addArticleLike(article.id)
        : await removeArticleLike(article.id);
      if (data) {
        setLike({
          likeCount: data.likeCount ?? 0,
          isLiked: Boolean(data.isLiked),
        });
      }
    } catch {
      setLike({
        likeCount: article.likeCount ?? 0,
        isLiked: Boolean(article.isLiked),
      });
      alert("좋아요 처리에 실패했어요. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLikePending(false);
    }
  };

  return (
    <section className={board}>
      <ArticleContentSection
        article={article}
        likeCount={like.likeCount}
        isLiked={like.isLiked}
        onToggleLike={handleToggleLike}
      >
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
