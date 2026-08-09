/*
BASE_URL = 음식점 주소
fetch = 음식점에 가서 음식을 받아오는 사람
response = 받아온 음식
handleResponse = 음식이 제대로 왔는지 확인하고 먹기 좋게 꺼내는 과정
*/

//[ ] getProductList() : GET 메서드를 사용해 주세요.
const BASE_URL = "https://panda-market-api-crud.vercel.app";

async function handleResponse(response) {
  if(!response.ok) {
    console.error (
      `Product API Error: ${response.status} ${response.statusText}`,
    );
    throw new Error(
      `Product API request failed with status ${response.status}`,
    );
  }
  
  if (response.status === 204) {
    return null;
  }
  
  return response.json(); 
}

//[ ] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export async function getProductList({ page = 1, pageSize = 10, keyword = ""} = {}) {
  try {
    const params = new URLSearchParams({
      page : String(page),
      pageSize: String(pageSize),
    });

    if(keyword) {
      params.append("keyword", keyword);
    }

    const response = await fetch(`${BASE_URL}/products?${params.toString()}`);
    return await handleResponse(response);
  }catch(error) {
    console.error(error.message);
    throw error;
  }
}

// getProductList({ page: 1, pageSize: 3, keyword: "상품"})
//   .then((data) => {
//     console.log(data)
//   });


  //[ ] getProduct() : GET 메서드를 사용해 주세요.
  export async function getProduct(productId) {
    try {
      const response = await fetch(`${BASE_URL}/products/${productId}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

// getProduct(4236)
//   .then((data) => {
//     console.log(data);
//   });

// [ ] createProduct() : POST 메서드를 사용해 주세요.
// [ ] request body에 name, description, price, tags, images 를 포함해 주세요.
export async function createProduct({ name, description, price, tags, images}) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
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
    return await handleResponse(response)

  } catch (error){
    console.error(error.message);
    throw error;
  }
}

// createProduct({
//   name: "스프린트 미션 3 상품",
//   description: "product API POST 테스트입니다.",
//   price: 15000,
//   tags: ["sprint", "mission3"],
//   images: ["https://example.com/product.jpg"],
// })
//   .then((data) => {
//     console.log(data)
//   })

// [ ] patchProduct() : PATCH 메서드를 사용해 주세요.
export async function patchProduct(productId, product) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(product),
    });
    return await handleResponse(response)
  } catch(error) {
    console.error(error.message);
    throw error;
  };
};

// patchProduct(4247, {
//   name: "수정된 스프린트 미션 3 상품",
//   description: "Product API PATCH 테스트 입니다.",
//   price: 20000,
//   tags: ["sprint", "updated"],
//   images: ["https://example.com/updated-product.jpg"]
// })
//   .then((data) => {
//     console.log(data)
//   })

//[ ] deleteProduct() : DELETE 메서드를 사용해 주세요.
export async function deleteProduct(producId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${producId}`, {
      method: "DELETE",
    });

    return await handleResponse(response);
  } catch(error) {
    console.error(error.message);
    throw error;
  }
}

// deleteProduct(4247)
//   .then((data) => {
//     console.log(data)
//   })