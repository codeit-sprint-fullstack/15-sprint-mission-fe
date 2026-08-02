//Article API 링크를 가져와서 CRUD 메소드를 함수로 작성해보기
const BASE_URL = "https://panda-market-api-crud.vercel.app";

//GET 메소드 이용 : getArticleList 만들기-> 게시글 전체 조회
export function getArticleList({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  return fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
    { method: "GET" },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("게시글을 조회하지 못했습니다.: ", error.message);
    });
}
// getArticleList();

//GET 메소드 이용 : getArticle 만들기-> 특정 게시글 조회
export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("게시글을 찾을 수 없습니다.: ", error.message);
    });
}
// getArticle(6736);

// // // //POST 메소드 이용 : createArticle 만들기-> 게시글 생성하기
export function createArticle() {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image: "https://example.com/...",
      content: "무야호",
      title: "상품 상태 야호",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("게시글을 생성할 수 없습니다.: ", error.message);
    });
}
// createArticle();

// //PATCH 메소드로 patchArticle()만들기-> 게시글 수정
export function patchArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image: "https://example2.com/...",
      content: "어렵다잉",
      title: "마 할 수 있나.",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("게시글을 수정할 수 없습니다.: ", error.message);
    });
}
// patchArticle(6755);

// // DELETE 메소드로 게시글 지우기
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => {
      console.log("삭제된 게시글 id: ", result);
    })
    .catch((error) => {
      console.log("삭제 실패:", error.message);
    });
}
// deleteArticle(6760);

const articleFunction = {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
export default articleFunction;
