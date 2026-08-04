const BASE_URL = "https://panda-market-api-crud.vercel.app";

function checkResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP 에러 ${response.statusText}`);
  }
  return response.json();
}

async function getProuductList({ page, pageSize, keyword }) {
  const productURL = new URL(`${BASE_URL}/products`);
  productURL.searchParams.set("page", page);
  productURL.searchParams.set("pageSize", pageSize);
  productURL.searchParams.set("keyword", keyword);

  const response = await fetch(productURL);
  return checkResponse(response);
}

async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return checkResponse(response);
}

async function createProduct({ images, tags, price, description, name }) {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({
      images: images,
      tags: tags,
      price: price,
      description: description,
      name: name,
    }),
  });

  return checkResponse(response);
}

async function patchProduct(id, { images, tags, price, description, name }) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({
      images: images,
      tags: tags,
      price: price,
      description: description,
      name: name,
    }),
  });

  return checkResponse(response);
}

async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });

  return checkResponse(response);
}

const product = {
  getProuductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};

export default product;
