"use client";

import { ActionMenu } from "../ActionMenu";
import { articleApi } from "../api/articleApi";
import { useRouter } from "next/navigation";

export default function ArticleAction({ id }) {
  const router = useRouter();
  const articleEdit = async (id) => router.push(`/createPost/${id}/edit`);

  const articleDelete = async (id) => {
    await articleApi.remove(id);
    router.push("/community");
  };

  return (
    <>
      <ActionMenu id={id} onEdit={articleEdit} onDelete={articleDelete} />
    </>
  );
}
