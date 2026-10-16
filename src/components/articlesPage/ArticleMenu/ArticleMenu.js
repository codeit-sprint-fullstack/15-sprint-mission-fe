"use client";

import { useRouter } from "next/navigation";
import ActionMenu from "@/components/common/ActionMenu/ActionMenu";
import { deleteArticle } from "@/lib/api/articlesAPI";

export default function ArticleMenu({ articleId }) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteArticle(articleId);
    router.push("/articles");
  };

  return (
    <ActionMenu
      onEdit={() => router.push(`/articles/${articleId}/edit`)}
      onDelete={handleDelete}
      deleteErrorMessage="게시글 삭제에 실패했어요."
    />
  );
}
