import axios from "axios";

// axios 기반 Product API 구현
const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
  timeout: 5000,
});

async function getProductList(params = {}) {
  try {
    const response = await instance.get(`/products`, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // 서버가 응답은 하는 경우
      console.error(error.response.status); // 400번대, 500번대 상태 메시지
      console.error(error.response.data); // 서버가 보낸 에러 메시지 내용
    } else {
      // 서버가 응답 자체를 받지 못하는 경우
      console.error("리퀘스트가 실패했습니다."); // 네트워크 끊김, timeout(5초 초과), 잘못된 URL 요청
    }
  }
}

async function getProduct(productId) {
  try {
    const response = await instance.get(`/products/${productId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error("리퀘스트가 실패했습니다.");
    }
  }
}

async function createProduct(name, description, price, tags, images) {
  try {
    const response = await instance.post(`/products`, { name, description, price, tags, images });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error("리퀘스트가 실패했습니다.");
    }
  }
}

async function patchProduct(productId, name, description, price, tags, images) {
  try {
    const response = await instance.patch(`/products/${productId}`, { name, description, price, tags, images });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error("리퀘스트가 실패했습니다.");
    }
  }
}

async function deleteProduct(productId) {
  try {
    const response = await instance.delete(`/products/${productId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error("리퀘스트가 실패했습니다.");
    }
  }
}

export { getProductList, getProduct, createProduct, patchProduct, deleteProduct };

/* fetch() 기반 Product API 코드

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
*/
