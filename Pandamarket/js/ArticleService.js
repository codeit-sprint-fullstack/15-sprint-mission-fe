const ARTICLE_URL = "https://panda-market-api-crud.vercel.app/articles";

function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  return fetch(
    `${ARTICLE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    {
      method: "GET",
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 조회 실패: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function getArticle(id) {
  return fetch(`${ARTICLE_URL}/${id}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 조회 실패! ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
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
      return response.json().then((data) => {
        console.log(`게시글 생성 성공! id: ${data.id}`);
        return data;
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function deleteArticle(id) {
  return fetch(`${ARTICLE_URL}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 삭제 실패: ${response.status}`);
      }
      if (response.status === 204) {
        return null;
      }
      return response.json();
    })
    .then(() => console.log("게시글 삭제 성공!"))
    .catch((error) => console.log(error.message));
}

function patchArticle(id, { title, content, image } = {}) {
  return fetch(`${ARTICLE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, image }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 수정 실패:${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`게시글 수정 성공! id: ${data.id}`);
    })
    .catch((error) => console.log(error.message));
}

const testArticle = {
  title: "제목",
  content: "내용",
  image: "https://example.com/test.jpg",
};

getArticle(6776);