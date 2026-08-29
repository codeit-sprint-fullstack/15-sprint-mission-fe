const API_BASE_URL = "https://panda-market-api.vercel.app";

export const fetchProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
  });
  if (keyword) {
    params.append("keyword", keyword);
  }

  const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error("오류가 발생했습니다.");
  }
  const { list, totalCount } = await response.json();

  return {
    data: list,
    totalCount,
  };
};
