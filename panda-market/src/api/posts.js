const API_URL = 'https://panda-market-api.vercel.app';

//GET
export const fetchPosts = async (page, limits, orderBy='recent', keyword = '') => {
  const response = await fetch(
    `${API_URL}/products?page=${page}&pageSize=${limits}&orderBy=${orderBy}&keyword=${keyword}`,
  );

  if (!response.ok) {
    throw new Error(`상품을 불러오는데 실패했습니다. ${response.statusText}`);
  }

  const { list, totalCount } = await response.json();
  // console.log('응답', data) -> 데이터 타입이 객체임 배열 접근법으로 값을 못 뽑아옴
  return { list, totalCount } ;
  //불러오는거 문제 없는지 확인하고 페이지네이션을 위해 전체 아이템 개수도 받아온다.
};
