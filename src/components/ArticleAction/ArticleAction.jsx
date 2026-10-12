"use client";

import { useRouter } from "next/navigation";
import { ActionMenu } from "../ActionMenu";

export default function ArticleAction({ id, onEdit, onDelete }) {
  const router = useRouter();
  router.push(`/createPost/${id}/edit`);

  return (
    <div>
      <ActionMenu id={id} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}
