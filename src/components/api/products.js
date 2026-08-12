
const BASE_URL = "https://panda-market-api.vercel.app";


//전체 상품목록 조회
export async function getProductList({page = 1, pageSize = 10, keyword="",orderBy = "recent"} = {}){
  const query = new URLSearchParams({page,pageSize,keyword,orderBy});
  console.log(`query - ${query}`);

  try{
    const response = await fetch(`${BASE_URL}/products?${query}`);
    console.log(`response - ${response.id}`);
    if(!response.ok) throw new Error(`상품 목록 조회 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}