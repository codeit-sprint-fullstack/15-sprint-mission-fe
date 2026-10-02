const BASE_URL = "http://localhost:5005";

async function getProducts({ offset = 1, limit = 10, sort, keyword } = {}) {
  const query = new URLSearchParams();
  query.append("offset", offset);
  query.append("limit", limit);
  if (sort) query.append("sort", sort);
  if (keyword) query.append("keyword", keyword);

  const res = await fetch(`${BASE_URL}/products?${query}`);

  if (!res.ok) {
    throw new Error("상품 목록 조회 실패");
  }

  return await res.json();
}

async function createProduct(productData) {
  const res = await fetch(`${BASE_URL}/products`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    throw new Error("상품 등록 실패");
  }

  return await res.json();
}

export const productApi = { get: getProducts, post: createProduct };
