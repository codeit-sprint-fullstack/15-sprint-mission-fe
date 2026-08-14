export async function getProductList(page, pageSize, keyword, orderBy = "") {
  try {
    let url = `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

    if (orderBy) {
      url += `&orderBy=${orderBy}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("상품 목록을 가져오는데 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
