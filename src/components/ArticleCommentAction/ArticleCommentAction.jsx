"use client";

import { articleCommentApi } from "../api/articleCommentApi";
import { ActionMenu } from "../ActionMenu";

export default function ArticleCommentAction({ id, onDeleted }) {
  const articleCommentDelete = async (id) => {
    await articleCommentApi.remove(id);
    onDeleted(id);
  };
  return (
    <>
      <ActionMenu id={id} onDelete={articleCommentDelete} />
    </>
  );
}
