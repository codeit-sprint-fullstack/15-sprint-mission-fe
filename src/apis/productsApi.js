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

export async function addLike(productId) {
  const { data } = await httpClient.post(`/products/${productId}/like`);
  return data;
}

export async function removeLike(productId) {
  const { data } = await httpClient.delete(`/products/${productId}/like`);
  return data;
}

export async function uploadImage(file) {
  const form = new FormData();
  form.append("image", file);
  const { data } = await httpClient.post("/images/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data?.data?.url ?? data?.url ?? data;
}

export async function createProduct({ name, description, price, tags, images }) {
  const { data } = await httpClient.post("/products", {
    name,
    description,
    price,
    tags,
    images,
  });
  return data;
}
