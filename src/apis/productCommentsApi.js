import httpClient from "./httpClient";

export async function fetchProductCommentList(productId, { limit = 100 } = {}) {
  const { data } = await httpClient.get(`/products/${productId}/comments`, {
    params: { limit },
  });
  return data;
}

export async function createProductComment(productId, content) {
  const { data } = await httpClient.post(`/products/${productId}/comments`, { content });
  return data;
}

export async function updateProductComment(commentId, content) {
  const { data } = await httpClient.patch(`/comments/${commentId}`, { content });
  return data;
}

export async function deleteProductComment(commentId) {
  const { data } = await httpClient.delete(`/comments/${commentId}`);
  return data;
}