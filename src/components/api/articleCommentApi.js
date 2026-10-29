import { request } from "./request";

export const articleCommentApi = {
  getList: ({ articleId, cursorId, page = 1, limit = 10 } = {}) =>
    request("/articleComments", {
      params: { articleId, cursorId, page, limit },
      errorMessage: "게시글 댓글 목록 조회 실패",
    }),
  get: (articleCommentId) =>
    request(`/articleComments/${articleCommentId}`, {
      errorMessage: "게시글 댓글 조회 실패",
    }),
  post: (body) =>
    request("/articleComments", {
      method: "POST",
      body,
      errorMessage: "게시글 댓글 등록 실패",
    }),
  patch: (articleCommentId, body) =>
    request(`/articleComments/${articleCommentId}`, {
      method: "PATCH",
      body,
      errorMessage: "게시글 댓글 수정 실패",
    }),
  remove: (articleCommentId) =>
    request(`/articleComments/${articleCommentId}`, {
      method: "DELETE",
      errorMessage: "게시글 댓글 삭제 실패",
    }),
};
