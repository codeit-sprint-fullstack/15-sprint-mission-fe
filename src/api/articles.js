import { API_BASE_URL } from "../constants/api";

export async function getArticles({
  keyword = "",
  orderBy = "desc",
  page = 1,
  limit = 5,
}) {
  const query = new URLSearchParams({
    keyword,
    orderBy,
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(`${API_BASE_URL}/articles?${query}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("게시글 조회 실패");
  }

  return response.json();
}

export async function getArticle(id) {
  const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("게시글을 불러오지 못했습니다");
  }

  return response.json();
}

export async function postArticles({ title = "", content = "" }) {
  const response = await fetch(`${API_BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.trim(),
      content: content.trim(),
    }),
  });

  if (!response.ok) {
    throw new Error("게시글 등록 실패");
  }

  return response.json();
}

export async function deleteArticle({ id }) {
  const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("게시글 삭제 실패");
  }
}

export async function patchArticle({ id, title, content }) {
  const response = await fetch(`${API_BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.trim(),
      content: content.trim(),
    }),
  });

  if (!response.ok) {
    throw new Error("게시글 수정 실패");
  }
}
