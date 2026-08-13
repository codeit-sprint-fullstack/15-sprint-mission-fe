const API_BASE_URL = "https://panda-market-api-crud.vercel.app"

export async function postProducts() {}
export async function getProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`)
    if (!response.ok) {
      throw new Error("상품 목록을 불러오는데 실패했습니다.")
    }
    const productData = await response.json()
    return productData
  } catch (err) {
    console.log(err)
  }
}
export async function getProductItem() {}
export async function patchProductItem() {}
export async function deleteProductItem() {}
export async function postProductFavorite() {}
export async function deleteProductFavorite() {}
