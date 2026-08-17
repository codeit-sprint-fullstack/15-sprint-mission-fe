export default async function getProducts(
  page = 1,
  pageSize = 0,
  orderBy = 'recent',
  keyword = '',
) {
  const BASE_URL = 'https://panda-market-api.vercel.app';
  const PRODUCTS_URL = new URL(`${BASE_URL}/products`);

  PRODUCTS_URL.searchParams.set('page', page);
  PRODUCTS_URL.searchParams.set('pageSize', pageSize);
  PRODUCTS_URL.searchParams.set('orderBy', orderBy);
  PRODUCTS_URL.searchParams.set('keyword', keyword);

  try {
    const response = await fetch(PRODUCTS_URL);

    if (!response.ok) {
      throw new Error('불러오기에 실패했습니다.');
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
    return { list: [] };
  }
}