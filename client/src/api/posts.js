const API_BASE_URL = 'http://localhost:5001/products';

export const getPosts = async (
  page = 1,
  limit = 10,
  sort = 'recent',
  keyword,
) => {
  const url = new URL(`${API_BASE_URL}`);
  url.searchParams.set('page', page);
  url.searchParams.set('limit', limit);
  url.searchParams.set('sort', sort);
  if (keyword) url.searchParams.set('keyword', keyword);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    console.log('[getPosts]GET ERROR');
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  const posts = await response.json();
  const data = posts.data;
  const totalCount = posts.totalCount;
  const totalPages = posts.totalPages;
  const isSuccess = posts.success;
  const message = posts.message;

  console.log('받은데이터:',data)

  return {
    data,
    totalCount: Number(totalCount),
    totalPages: Number(totalPages),
    isSuccess,
    message,
  };
};
