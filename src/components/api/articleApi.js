import { request } from "./request";

export const articleApi = {
  getList: ({ offset = 1, limit = 10, sort, keyword } = {}) =>
    request("/articles", {
      params: { offset, limit, sort, keyword },
      errorMessage: "게시글 목록 조회 실패",
    }),
  get: (articleId) =>
    request(`/articles/${articleId}`, { errorMessage: "게시글 조회 실패" }),
  post: (body) =>
    request("/articles", {
      method: "POST",
      body,
      errorMessage: "게시글 등록 실패",
    }),
  patch: (articleId, body) =>
    request(`/articles/${articleId}`, {
      method: "PATCH",
      body,
      errorMessage: "게시글 수정 실패",
    }),
  remove: (articleId) =>
    request(`/articles/${articleId}`, {
      method: "DELETE",
      errorMessage: "게시글 삭제 실패",
    }),
};
