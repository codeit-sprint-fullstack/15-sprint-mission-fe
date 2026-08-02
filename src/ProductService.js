//ProductService API 링크를 가져와서 CRUD 메소드를 함수로 작성해보기
const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

//GET 메소드 이용 : getProductList 만들기-> 상품목록 전체 조회
export async function getProductList({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  try {
    const response = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
      { method: "GET" },
    );

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("상품을 조회하지 못했습니다.: ", error.message);
  }
}
// getProductList();

//GET 메소드 이용 : getProduct 만들기-> 특정 상품 조회
export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("상품을 찾을 수 없습니다.: ", error.message);
  }
}
// getProduct(4106);

// //POST 메소드 이용 : createProduct 만들기-> 상품목록 생성하기
export async function createProduct() {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        images: ["https://example.com/..."],
        tags: ["완구"],
        //image와 tag 키 값은 여러 요소를 담을 수도 있으므로
        //배열 형태로 작성한다.
        //그리고 body 안에 작성하는 키 값들은 정해져 있는 것이다.
        price: 125000,
        description: "string",
        name: "Pikachu_toy",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("상품 목록을 생성할 수 없습니다.: ", error.message);
  }
}
// createProduct();

//PATCH 메소드로 patchProduct()만들기-> 게시글 수정
export async function patchProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        images: ["https://example.com/..."],
        tags: ["가전기기"],
        //image와 tag 키 값은 여러 요소를 담을 수도 있으므로
        //배열 형태로 작성한다.
        //그리고 body 안에 작성하는 키 값들은 정해져 있는 것이다.
        price: 1_200_000,
        description: "string",
        name: "LG-Stand Air conditioner",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("상품 목록을 수정할 수 없습니다.: ", error.message);
  }
}
// patchProduct(4131);

// DELETE 메소드로 게시글 지우기
export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("삭제된 상품 목록 id: ", result);
  } catch (error) {
    console.log("삭제 실패:", error.message);
  }
}
// deleteProduct(4157);

const productFunction = {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
export default productFunction;
