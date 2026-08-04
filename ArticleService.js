export function getArticleList(page, pageSize, keyword) {
  return fetch(
    `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  );
}

export function getArticle(id) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`);
}

export function createArticle(title, content, image) {
  return fetch("https://panda-market-api-crud.vercel.app/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      content: content,
      image: image
    })
  });
}

export function patchArticle(id, title, content, image) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      content: content,
      image: image
    })
  });
}

export function deleteArticle(id) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`, {
    method: "DELETE"
  });
}
