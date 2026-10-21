import { requestApi } from "./requestApi";

export async function fetchArticleList(
  { page = 1, pageSize = 10, orderBy = "recent", keyword = "" } = {},
  requestOptions = {},
) {
  const offset = (page - 1) * pageSize;
  const payload = await requestApi("/articles", {
    query: { offset, limit: pageSize, keyword, sort: orderBy },
    ...requestOptions,
  });
  return {
    list: payload?.list ?? [],
    totalCount: payload?.totalCount ?? payload?.list?.length ?? 0,
  };
}

export async function fetchArticleDetail(articleId, requestOptions = {}) {
  return requestApi(`/articles/${articleId}`, requestOptions);
}

export async function createArticle({ title, content, images }) {
  return requestApi("/articles", { method: "POST", body: { title, content, images } });
}

export async function updateArticle(articleId, { title, content, images }) {
  return requestApi(`/articles/${articleId}`, {
    method: "PATCH",
    body: { title, content, images },
  });
}

export async function deleteArticle(articleId) {
  return requestApi(`/articles/${articleId}`, { method: "DELETE" });
}

export async function addArticleLike(articleId) {
  return requestApi(`/articles/${articleId}/like`, { method: "POST" });
}

export async function removeArticleLike(articleId) {
  return requestApi(`/articles/${articleId}/like`, { method: "DELETE" });
}
