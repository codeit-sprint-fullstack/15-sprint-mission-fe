const BASE_URL = "https://panda-market-api-crud.vercel.app";

// 게시글 목록 조회
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  return fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 목록 조회 실패");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// 게시글 상세 조회
export function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 조회 실패");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// 게시글 생성
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
        throw new Error("게시글 생성 실패");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// 게시글 수정
export function patchArticle(id, updateData) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 수정 실패");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// 게시글 삭제
export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 삭제 실패");
      }
      return true;
    })
    .catch((error) => {
      console.error(error.message);
    });
}
