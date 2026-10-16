import { BASE_URL } from "./constants";

export async function getArticles({ keyword, orderBy, pageSize } = {}) {
  const params = new URLSearchParams();
  if (keyword) params.set("keyword", keyword);
  if (orderBy) params.set("orderBy", orderBy);
  if (pageSize) params.set("pageSize", pageSize);

  const query = params.toString();
  const res = await fetch(`${BASE_URL}/articles${query ? `?${query}` : ""}`);

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`게시글 목록 조회 실패: ${res.status}`);
  return res.json();
}

export async function getArticle(id) {
  const res = await fetch(`${BASE_URL}/articles/${id}`);
  if (!res.ok) throw new Error(`게시글 상세 조회 실패: ${res.status}`);
  return res.json();
}

export async function createArticle(data) {
  const res = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`게시글 등록 실패: ${res.status}`);
  return res.json();
}

export async function updateArticle(id, data) {
  const res = await fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`게시글 수정 실패: ${res.status}`);
}

export async function deleteArticle(id) {
  const res = await fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`게시글 삭제 실패: ${res.status}`);
}
