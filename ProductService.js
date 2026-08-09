const BASE_URL = "https://panda-market-api-crud.vercel.app";

async function getProductList(params = {}) {
  const url = new URL(`${BASE_URL}/products`);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`네트워크 요청 실패: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`네트워크 요청 오류: ${error}`);
  }
}

async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`네트워크 요청 실패: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`네트워크 요청 오류: ${error}`);
  }
}

async function createProduct(name, description, price, tags, images) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!response.ok) {
      throw new Error(`네트워크 요청 실패: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`네트워크 요청 오류: ${error}`);
  }
}

async function patchProduct(productId, name, description, price, tags, images) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!response.ok) {
      throw new Error(`네트워크 요청 실패: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`네트워크 요청 오류: ${error}`);
  }
}

async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`네트워크 요청 실패: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`네트워크 요청 오류: ${error}`);
  }
}

export { getProductList, getProduct, createProduct, patchProduct, deleteProduct };
