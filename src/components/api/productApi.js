import { request } from "./request";

export const productApi = {
  getList: ({ page = 1, limit = 10, sort, keyword } = {}) =>
    request("/products", {
      params: { page, limit, sort, keyword },
      errorMessage: "상품 목록 조회 실패",
    }),
  post: (body) =>
    request("/products", {
      method: "POST",
      body,
      errorMessage: "상품 등록 실패",
    }),
};
