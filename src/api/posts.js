const API_BASE_URL = 'https://panda-market-api.vercel.app/products';

export const fetchPosts = async (
  page = 1,
  pagesize = 10,
  orderBy = 'recent',
  keyword,
) => {
  const url = new URL(`${API_BASE_URL}`);
  url.searchParams.set('page', page);
  url.searchParams.set('pageSize', pagesize);
  url.searchParams.set('orderBy', orderBy);
  if (keyword) url.searchParams.set('keyword', keyword);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.log('[fetchPosts]GET ERROR');
    throw new Error(`HTTP 에러가 발생했습니다. ${response.statusText}`);
  }
  const data = await response.json();
  const list = data.list;
  const totalCount = data.totalCount;

  console.log(
    '[fetchPosts]실행완료/데이터:',
    list,
    'totalCount:',
    totalCount,
    'URL:',
    url,
  );

  return { list, totalCount: Number(totalCount) };
};
