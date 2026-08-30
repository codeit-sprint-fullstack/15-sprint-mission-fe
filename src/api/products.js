const API_BASE_URL = "http://localhost:5001";

//GET : favorite
export const getProducts = async ({
  page = 1,
  pageSize = 4,
  standard = "recent",
  keyword = "",
}) => {
  const params = new URLSearchParams({
    page,
    pageSize,
    orderBy: standard,
    keyword,
  });
  const response = await fetch(`${API_BASE_URL}/products?${params}`);

  if (!response.ok) {
    throw new Error("상품 조회에 실패했습니다.");
  }

  return response.json();
};

// POST
export const createProduct = async (postData) => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("상품 등록에 실패했습니다.");
  }

  return response.json();
};
