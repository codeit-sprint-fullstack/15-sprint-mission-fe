const BASE_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
} = {}) {
  const url = new URL(
    `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  );
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(
        `상품 목록을 불러오지 못했습니다. 상태 코드: ${response.status}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getProduct(productId) {
  const url = new URL(`${BASE_URL}/products/${productId}`);
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(
        `상품을 불러오지 못했습니다. 상태 코드: ${response.status}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  const url = new URL(`${BASE_URL}/products`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });
    if (!response.ok) {
      throw new Error(
        `상품을 생성하지 못했습니다. 상태 코드: ${response.status}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function patchProduct(
  productId,
  { name, description, price, tags, images },
) {
  const url = new URL(`${BASE_URL}/products/${productId}`);

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `상품을 수정하지 못했습니다. 상태 코드: ${response.status}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteProduct(productId) {
  const url = new URL(`${BASE_URL}/products/${productId}`);

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(
        `상품을 삭제하지 못했습니다. 상태 코드: ${response.status}`,
      );
    }
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
