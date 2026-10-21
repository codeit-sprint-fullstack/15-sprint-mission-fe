"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createArticle, updateArticle } from "@/apis";
import { toErrorMessage } from "@/domains/article/utils/articleMessages";

export function useArticleEditor({ article = null } = {}) {
  const router = useRouter();
  const isEditMode = article !== null;

  const [title, setTitle] = useState(article?.title ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async () => {
    if (!title.trim() || !content.trim() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (isEditMode) {
        await updateArticle(article.id, {
          title: title.trim(),
          content: content.trim(),
        });
        router.push(`/board/${article.id}`);
      } else {
        const created = await createArticle({
          title: title.trim(),
          content: content.trim(),
        });
        router.push(`/board/${created.id}`);
      }
      router.refresh();
    } catch (error) {
      setErrorMessage(toErrorMessage(error, "게시글을 저장하지 못했어요."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isEditMode,
    title,
    setTitle,
    content,
    setContent,
    isSubmitting,
    errorMessage,
    submit,
  };
}
