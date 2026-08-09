const BASE_URL = "https://panda-market-api-crud.vercel.app";
const urlArticle = BASE_URL + "/articles";
export { urlArticle };

export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const url = new URL(urlArticle);
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pageSize);
  url.searchParams.set("keyword", keyword);

  return fetch(url, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("게시글 목록을 불러오는데 실패했습니다.");
      }
      return res.json();
    })
    .then((data) => data.list)
    .catch((e) => {
      console.log(e.message);
      throw e;
    });
}

export function getArticle(articleId) {
  const url = new URL(urlArticle + "/" + articleId);

  return fetch(url, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("요청하신 게시글을 찾을 수 없습니다.");
      }
      return res.json();
    })
    .catch((e) => {
      console.log(e.message);
      throw e;
    });
}

export function createArticle(title, content, image) {
  const url = new URL(urlArticle);

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("게시글의 제목, 내용, 이미지를 다시 확인해주세요.");
      }
      return res.json();
    })
    .catch((e) => {
      console.log(e.message);
      throw e;
    });
}

export function patchArticle(articleId, title, content, image) {
  const url = new URL(urlArticle + "/" + articleId);

  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("게시글의 제목, 내용, 이미지를 다시 확인해주세요.");
      }
      return res.json();
    })
    .catch((e) => {
      console.log(e.message);
      throw e;
    });
}

export function deleteArticle(articleId) {
  const url = new URL(urlArticle + "/" + articleId);

  return fetch(url, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("삭제에 실패했습니다. 이미 없는 게시글일 수 있습니다.");
      }
      return res.json();
    })
    .catch((e) => {
      console.log(e.message);
      throw e;
    });
}