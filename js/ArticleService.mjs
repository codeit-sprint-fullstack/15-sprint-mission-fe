const BASE_URL = "https://panda-market-api-crud.vercel.app";
// response 처리
function checkResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP 에러 ${response.statusText}`);
  }
  return response.json();
}

// getArticleList -> page, pageSize, keyword -> offset, limit, 값

async function getArticleList({ page, pageSize, keyword }) {
  const articleURL = new URL(`${BASE_URL}/articles`);
  articleURL.searchParams.set("page", page);
  articleURL.searchParams.set("pageSize", pageSize);
  articleURL.searchParams.set("keyword", keyword);

  return fetch(articleURL).then(checkResponse);
}

async function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "GET",
  }).then(checkResponse);
}

function createArticle({ image, content, title }) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      image: image,
      content: content,
      title: title,
    }),
  }).then(checkResponse);
}

async function patchArticle(id, { image, content, title }) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      content: content,
      title: title,
    }),
  }).then(checkResponse);
}

async function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

const articleCRUD = {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};

export default articleCRUD;
