const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";
async function getArticleList(page = 1, pagesize = 10, keyword) {
  // console.log(page, pagesize, keyword);
  const url = new URL(`${BASE_URL}`);
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pagesize);
  if (keyword) url.searchParams.set("keyword", keyword);
  // const {href} = url;
  // console.log(href);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("getArticleList 수행완료!");
  return response.json();
}

async function getArticle(id) {
  // console.log(id);
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("getArticle 수행완료!");
  return response.json();
}

async function createArticle({title, content, image}) {
  // console.log({title, content, image});
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      content: content,
      title: title,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("createArticle 수행완료!");
  return response.json();
}

async function patchArticle({ id, title, content, image }) {
  // console.log({ id, title, content, image });
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      content,
      title,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("patchArticle 수행완료!");
  return response.json();
}

async function deleteArticle(id) {
  // console.log(id);
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  // console.log("deleteArticle 수행완료!");
  return response.json();
}

//console.log(await getArticleList(1, 1, "제목"));
//console.log(await getArticle(6731));
// console.log(
//   await createArticle(
//     "나는 냐옹이다옹",
//     "표준 고양이",
//     "https://example.com/...",
//   ),
// );
//console.log(await patchArticle({id: 6732, content: "사실 강이지입니다."}));
//console.log(await deleteArticle(6731));

const ArticleService = {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
};

export default ArticleService;
