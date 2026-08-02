const PRODUCT_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProduct(id) {
  try {
    const response = await fetch(`${PRODUCT_URL}/${id}`, { method: "GET" });
    if (!response.ok) {
      throw new Error(`상품 정보 조회 실패! ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
} = {}) {
  try {
    const response = await fetch(
      `${PRODUCT_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      { method: "GET" },
    );
    if (!response.ok) {
      throw new Error(`상품 정보 조회 실패! ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}