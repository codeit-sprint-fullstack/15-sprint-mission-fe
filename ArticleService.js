const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  const url = new URL(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  );
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글 목록을 불러오지 못했습니다. 상태 코드: ${response.status}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function getArticle(articleId) {
  const url = new URL(`${BASE_URL}/articles/${articleId}`);

  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글을 불러오지 못했습니다. 상태 코드: ${response.status}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function createArticle({ title, content, image }) {
  const url = new URL(`${BASE_URL}/articles`);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글을 생성하지 못했습니다. 상태 코드: ${response.status}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function patchArticle(articleId, { title, content, image }) {
  const url = new URL(`${BASE_URL}/articles/${articleId}`);

  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글을 수정하지 못했습니다. 상태 코드: ${response.status}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export function deleteArticle(articleId) {
  const url = new URL(`${BASE_URL}/articles/${articleId}`);

  return fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `게시글을 삭제하지 못했습니다. 상태 코드: ${response.status}`,
        );
      }
      return response;
    })
    .catch((error) => {
      console.log(error.message);
    });
}
