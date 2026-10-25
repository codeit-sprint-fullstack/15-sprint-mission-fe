const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://panda-market-api-crud.vercel.app";

export async function getArticles(params = {}) {
  const query = new URLSearchParams(params);
  const response = await fetch(`${BASE_URL}/articles?${query}`);

  if (!response.ok) {
    throw new Error(`게시글 목록 요청 실패: ${response.status}`);
  }

  return response.json();
}

export async function getArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`);

  if (!response.ok) {
    throw new Error(`게시글 요청 실패: ${response.status}`);
  }

  return response.json();
}

export async function createArticle({ title, content }) {
  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  if (!response.ok) {
    throw new Error(`게시글 등록 실패: ${response.status}`);
  }

  return response.json();
}

export async function updateArticle(articleId, { title, content }) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  if (!response.ok) {
    throw new Error(`게시글 수정 실패: ${response.status}`);
  }

  return response.json();
}

export async function deleteArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`게시글 삭제 실패: ${response.status}`);
  }

  return response.json();
}
