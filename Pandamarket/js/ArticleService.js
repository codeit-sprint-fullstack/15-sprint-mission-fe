const ARTICLE_URL = 'https://panda-market-api-crud.vercel.app/articles'

function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  return fetch(ARTICLE_URL, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 조회 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function createArticle({ title, content, image } = {}) {
  return fetch(ARTICLE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, image }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((errorMsg) => {
          console.log(errorMsg);
          throw new Error(`게시글 생성 실패: ${response.status}`);
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
}