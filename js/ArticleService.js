const BASE_URL = "https://panda-market-api-crud.vercel.app";

//전체 조회
export function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  const query = new URLSearchParams({ page, pageSize, keyword });

  return fetch(`${BASE_URL}/articles?${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 조회 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}
//단일 조회
export function getArticle(id){

    return fetch(`${BASE_URL}/articles?${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 조회 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}
//생성
export function createArticle({title, content, image}){

    return fetch(`${BASE_URL}/articles`,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({
        title,
        content,
        image      
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 생성 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}
//수정
export function patchArticle(id, data){

    return fetch(`${BASE_URL}/articles?${id}`,{
      method : "PATCH",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 생성 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function deleteArticle(id){

    return fetch(`${BASE_URL}/articles?${id}`,{ method : "DELETE", })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 생성 실패: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}