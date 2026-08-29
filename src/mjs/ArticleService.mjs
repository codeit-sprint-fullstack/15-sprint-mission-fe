const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
  });
  if (keyword) {
    params.append("keyword", keyword);
  }

  const requestUrl = `${BASE_URL}/articles?${params.toString()}`;

  return fetch(requestUrl, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("게시글 리스트를 불러 올 수 없습니다.", error.message);
      return null;
    });
}

export function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("게시글을 불러오지 못했습니다.", error.message);
      return null;
    });
}

export function createArticle({ image, content, title }) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("게시글을 생성하는데 실패했습니다.", error.message);
      return null;
    });
}

export function patchArticle({ image, content, title, id }) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      content,
      image,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("게시글을 수정하는데 실패했습니다.", error.message);
      return null;
    });
}

export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("게시글을 삭제하는데 실패했습니다.", error.message);
      return null;
    });
}
