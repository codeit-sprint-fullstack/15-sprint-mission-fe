import { requestApi } from "./requestApi";

export const ARTICLE_AUTHOR_DEFAULTS = {
  nickname: "총명한 판다",
  image: "/assets/board/image_71.png",
};

export async function fetchCommentList(
  { articleId, limit = 10, cursor = null } = {},
  requestOptions = {},
) {
  const payload = await requestApi(`/articles/${articleId}/comments`, {
    query: { limit, cursor },
    ...requestOptions,
  });
  return {
    list: payload?.list ?? [],
    nextCursor: payload?.nextCursor ?? null,
  };
}

export async function createComment(articleId, content) {
  return requestApi(`/articles/${articleId}/comments`, {
    method: "POST",
    body: { content },
  });
}

export async function updateComment(commentId, content) {
  return requestApi(`/comments/${commentId}`, {
    method: "PATCH",
    body: { content },
  });
}

export async function deleteComment(commentId) {
  return requestApi(`/comments/${commentId}`, { method: "DELETE" });
}
