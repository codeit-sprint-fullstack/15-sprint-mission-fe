
const BASE_URL = "https://panda-market-api.vercel.app";


//상품 조회
export async function getProductList({page = 1, pageSize = 8, keyword="",orderBy = "recent"} = {}){
  const query = new URLSearchParams({page,pageSize,keyword,orderBy});
  
  try{
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if(!response.ok) throw new Error(`상품 목록 조회 실패: ${response.status}`);
    return await response.json();
  } catch (error) {  
    console.log(error);  
    throw error;
  }
}