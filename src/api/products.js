const API_BASE_URL = "https://panda-market-api.vercel.app";

//GET : favorite
export const getProducts = async ({
  page = 1,
  pageSize = 10,
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
