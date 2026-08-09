const BASE_URL = "https://panda-market-api-crud.vercel.app";

function handleResponse(response) {
  if (!response.ok) {
    console.error(
      `Article API Error: ${response.status} ${response.statusText}`,
    );
    throw new Error(
      `Article API request failed with status ${response.status}`,
    );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
  });

  if (keyword) {
    params.append("keyword", keyword);
  }

  return fetch(`${BASE_URL}/articles?${params.toString()}`)
    .then(handleResponse)
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// getArticleList({ page: 1, pageSize: 3, keyword: "테스트" })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then(handleResponse)
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// getArticle(6875)
//   .then((data) => {
//     console.log(data)
//   })

//createArticle() : POST 메서드를 사용해주세요.
//[ ] request body에 title, content, image 를 포함해 주세요.
export function createArticle({ title, content, image }) {
  return fetch(`${BASE_URL}/articles`, {
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
    .then(handleResponse)
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// createArticle({
//   title: "스프린트 미션 3 게시글",
//   content: "Article API POST 테스트입니다.",
//   image: "https://example.com/article.jpg",
// }).then((data) => {
//   console.log(data);
// });

//[ ] patchArticle() : PATCH 메서드를 사용해 주세요.
/*  (수정전 데이터)
    id: 6878,
  title: '스프린트 미션 3 게시글',
  content: 'Article API POST 테스트입니다.',
  image: 'https://example.com/article.jpg',
  createdAt: '2026-08-09T06:46:55.719Z',
  updatedAt: '2026-08-09T06:46:55.719Z'
}
  */

export function patchArticle(articleId, article) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  })
    .then(handleResponse)
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
}

// patchArticle(6878, {
//   title: "수정된 스프린트 미션 3 게시글",
//   content: "Article API PATCH 테스트 입니다.",
//   image: "https://example.com/updated-article.jpg",
// })
//   .then((data) => {
//     console.log(data)
//   })

  /* 수정완료
  {
    id: 6878,
    title: '수정된 스프린트 미션 3 게시글',
    content: 'Article API PATCH 테스트 입니다.',
    image: 'https://example.com/updated-article.jpg',
    createdAt: '2026-08-09T06:46:55.719Z',
    updatedAt: '2026-08-09T06:57:42.431Z'
  }
  */


  //[ ] deleteArticle() : DELETE 메서드를 사용해 주세요.

export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch((error) => {
      console.error(error.message)
      throw error
    })
}

// deleteArticle(6878)
//   .then((data) => {
//     console.log(data);
//   })