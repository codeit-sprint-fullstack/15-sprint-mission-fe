const BASE_URL = "https://panda-market-api-crud.vercel.app";


//단일조회
export async function getProduct(id){
  try{
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if(!response.ok) throw new Error(`상품 목록 조회 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

//전체 상품목록 조회
export async function getProductList({page = 1, pageSize = 10, keyword=""} = {}){
  const query = new URLSearchParams({page,pageSize,keyword});

  try{
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if(!response.ok) throw new Error(`상품 목록 조회 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

//생성
export async function createProduct({images, tags, price,description,name}){
    try{
    const response = await fetch(`${BASE_URL}/products`,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({
        images,
        tags,
        price,
        description,
        name    
      }),
    })
    if(!response.ok) throw new Error(`상품 목록 생성 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}


//수정
export async function patchProduct(id,data){
    try{
    const response = await fetch(`${BASE_URL}/products/${id}`,{
      method : "PATCH",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(data),
    })
    if(!response.ok) throw new Error(`상품 목록 수정 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

//삭제
export async function deleteProduct(id){
    try{
    const response = await fetch(`${BASE_URL}/products/${id}`,{ method : "DELETE" })
    if(!response.ok) throw new Error(`상품 목록 수정 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}



