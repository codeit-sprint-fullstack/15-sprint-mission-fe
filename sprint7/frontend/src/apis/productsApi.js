import httpClient from "./httpClient";

export async function fetchProductList(
  { page = 1, pageSize = 10, orderBy = "recent", keyword } = {},
) {

  const { data } = await httpClient.get("/products", {
    params: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      sort: orderBy,
      ...(keyword ? { keyword } : {}),
    },
  });
  return data;
}

export async function fetchProductDetail(productId) {
  const { data } = await httpClient.get(`/products/${productId}`);
  return data;
}

export async function updateProduct(productId, body) {
  const { data } = await httpClient.patch(`/products/${productId}`, body);
  return data;
}

export async function deleteProduct(productId) {
  const { data } = await httpClient.delete(`/products/${productId}`);
  return data;
}

export async function addFavorite(productId) {
  const { data } = await httpClient.post(`/products/${productId}/favorite`);
  return data;
}

export async function removeFavorite(productId) {
  const { data } = await httpClient.delete(`/products/${productId}/favorite`);
  return data;
}

export async function createProduct({ name, description, price, tags }) {
  const { data } = await httpClient.post("/products", {
    name,
    description,
    price,
    tags,
  });
  return data;
}
