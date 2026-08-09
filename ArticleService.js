export const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList(params = {}) {
  const url = new URL(`${BASE_URL}/articles`);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`네트워크 요청 실패: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(`네트워크 요청 오류: ${error}`));
}

export function getArticle(articleID) {
  return fetch(`${BASE_URL}/articles/${articleID}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`네트워크 요청 실패: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(`네트워크 요청 오류: ${error}`));
}

export function createArticle(title, content, image) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`네트워크 요청 실패: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(`네트워크 요청 오류: ${error}`));
}

export function patchArticle(articleID, title, content, image) {
  return fetch(`${BASE_URL}/articles/${articleID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`네트워크 요청 실패: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(`네트워크 요청 오류: ${error}`));
}

export function deleteArticle(articleID) {
  return fetch(`${BASE_URL}/articles/${articleID}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`네트워크 요청 실패: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(`네트워크 요청 오류: ${error}`));
}
