const BASE_URL = "https://panda-market-api-crud.vercel.app";

// 게시글 목록 가져오는 함수
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  return (
    fetch(
      `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    )
      // 서버가 대답하면 이 일을 해
      .then((response) => {
        // 만약 서버 응답이 정상이 아니면
        if (!response.ok) { 
          throw new Error(`요청 실패 (상태 코드: ${response.status})`);
        } // 에러 발생 캐치로 잡으려구
        return response.json(); // 응답을 자바스크립트 객체로 변환
      })
      .then((data) => {
        console.log("게시글 목록 가져오기 성공:", data);
        return data;
      })
      .catch((error) => { 
        // 에러가 발생하면 콘솔에 출력
        console.error("getArticleList 에러:", error.message);
      })
  );
}

// 2. 게시글 상세 조회 (특정 ID의 게시글 1개만 가져오기)
export function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`요청 실패 (상태 코드: ${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시글 상세 조회 성공:", data);
      return data;
    })
    .catch((error) => {
      console.error("getArticle 에러:", error.message);
    });
}

// 3. 게시글 작성 (POST 메서드 사용)
export function createArticle(articleData) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData), //서버에게 실제로 전달할 데이터
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`요청 실패 (상태 코드: ${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시글 작성 성공:", data);
      return data;
    })
    .catch((error) => {
      console.error("createArticle 에러:", error.message);
    });
}

// 4. 게시글 수정 (PATCH 메서드 사용)
export function patchArticle(id, articleData) {
  // id: 수정할 글 번호
  // articleData: 수정할 내용 { title, content, image }
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`요청 실패 (상태 코드: ${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시글 수정 성공:", data);
      return data;
    })
    .catch((error) => {
      console.error("patchArticle 에러:", error.message);
    });
}

// 5. 게시글 삭제 (DELETE 메서드 사용)
export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`요청 실패 (상태 코드: ${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시글 삭제 성공:", data);
      return data;
    })
    .catch((error) => {
      console.error("deleteArticle 에러:", error.message);
    });
}
