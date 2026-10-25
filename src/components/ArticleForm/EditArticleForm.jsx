"use client";

import { useRouter } from "next/navigation";
import { patchArticle } from "../../api/articles.js";
import ArticleForm from "./ArticleForm";

export default function EditArticleForm({ article }) {
  const router = useRouter();

  const handleUpdate = async (values) => {
    await patchArticle({ id: article.id, ...values });
    router.push(`/boards/${article.id}`);
    router.refresh();
  };

  return (
    <ArticleForm
      key={article.id}
      initialValues={article}
      heading="게시글 수정"
      submitLabel="수정"
      onSubmit={handleUpdate}
    />
  );
}
