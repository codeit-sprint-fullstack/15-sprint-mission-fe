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

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
} = {}) {
  try {
    const response = await fetch(PRODUCT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!response.ok) {
      throw new Error(`상품 정보 생성 실패! ${response.status}`);
    }
    const data = await response.json();
    console.log(`상품 정보 생성 성공! id:${data.id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function patchProduct(id,{
  name,
  description,
  price,
  tags,
  images,
} = {} ){
    try{
    const response = await fetch(`${PRODUCT_URL}/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, description, price, tags, images }),
    });
    if(!response.ok){
        throw new Error(`상품 정보 수정 실패: ${response.status}`);
    }
    const data = await response.json();
    console.log(`상품 정보 수정 성공! ${data.id}`);
    return data;
    }
    catch(error){
        console.log(error.message);
    }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${PRODUCT_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`상품 삭제 실패: ${response.status}`);
    }
    const data = await response.json();
    console.log(`상품 삭제 성공! id: ${data.id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}