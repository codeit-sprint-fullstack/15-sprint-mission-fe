const BASE_URL = "https://panda-market-api-crud.vercel.app";
// /products

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
} = {}) {
  try {
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
    });
    if (keyword) {
      params.append("keyword", keyword);
    }

    const requestUrl = `${BASE_URL}/products?${params.toString()}`;

    const response = await fetch(requestUrl, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP 에러가 발생했습니다.${response.status}`);
    }
    const getProductDataList = await response.json();
    return getProductDataList;
  } catch (error) {
    console.log("리스트를 가져오는데에 실패했습니다.", error.message);
    return null;
  }
}



export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
    }
    const getProduct = await response.json();
    return getProduct;
  } catch (error) {
    console.log("상품 정보를 가져오지 못했습니다.", error.message);
    return null;
  }
}



export async function createProduct({
  images,
  tags,
  price,
  description,
  name,
}) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      body: JSON.stringify({
        images,
        tags,
        price,
        description,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
    }
    const createProductData = await response.json();
    return createProductData;
  } catch (error) {
    console.log("제품 생성을 실패했습니다.", error.message);
    return null;
  }
}



export async function patchProduct({
  images,
  tags,
  price,
  description,
  name,
  id,
}) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        images,
        tags,
        price,
        name,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP 에러가 발생했습니다.${response.statusText}`);
    }
    const patchProductData = await response.json();
    return patchProductData;
  } catch (error) {
    console.log("제품 수정을 하지 못했습니다.");
    return null;
  }
}


export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP 에러가 발생했습니다.${response.status}`);
    }
    const deleteProductData = await response.json();
    return deleteProductData;
  } catch (error) {
    console.log("제품 삭제를 실패했습니다.", error.message);
    return null;
  }
}

