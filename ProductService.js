const BASE_URL = "https://panda-market-api-crud.vercel.app";
// /products

async function getProductList() {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP: ${response.status}`);
    }
    const getProductDataList = await response.json();
    return getProductDataList;
  } catch (error) {
    console.log("제품 정보를 가져오는데에 실패했습니다.", error.message);
    return null;
  }
}

//getProductList().then((data) => console.log(data));

async function getProduct({ id }) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "GET",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP:${response.statusText}`);
    }
    const getProduct = await response.json();
    return getProduct;
  } catch (error) {
    console.log("상품 정보를 가져오지 못했습니다.", error.message);
    return null;
  }
}

// getProduct({
//   id: 4091,
// }).then((data) => console.log(data));

async function createProduct({ images, tags, price, description, name }) {
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
      throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
    }
    const createProductData = await response.json();
    return createProductData;
  } catch (error) {
    console.log("제품 생성을 실패했습니다.", error.message);
    return null;
  }
}

// createProduct({
//   images: ["https://example.com/product.jpg"],
//   tags: ["신상품"],
//   price: 9999,
//   description: "신상품입니다.",
//   name: "신상품",
// }).then((data) => console.log(data));

async function patchProduct({ images, tags, price, description, name, id }) {
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
      throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
    }
    const patchProductData = await response.json();
    return patchProductData;
  } catch (error) {
    console.log("제품 수정을 하지 못했습니다.");
    return null;
  }
}

// patchProduct({
//   images: ["https://example.com/product.jpg"],
//   tags: ["수정된 상품"],
//   price: 99999,
//   description: "수정된 상품",
//   name: "patch",
//   id: 4094,
// }).then((data) => console.log(data));

async function deleteProduct({ id }) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "Delete",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP:${response.status}`);
    }
    const deleteProductData = await response.json();
    return deleteProductData;
  } catch (error) {
    console.log("제품 삭제를 실패했습니다.", error.message);
    return null;
  }
}

// deleteProduct({
//   id: 4091,
// }).then((data) => console.log(data));
