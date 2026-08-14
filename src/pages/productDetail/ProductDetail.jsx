import { fetchProductItem } from "@/api/marketApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const mockData = {
  id: 226,
  name: "푸바오 찾아 떠나는 청두 여행!!",
  description: "제 딸 푸바오가 있는 쓰촨성 청두로 날아가 보세요!!!",
  price: 99999999,
  tags: ["푸바오", "러바오", "아이바오", "루이바오", "후이바오"],
  images: [
    "https://image.hanatour.com/usr/cms/resize/800_0/2024/08/11/10000/687449d1-4e4f-4952-b6d1-5342465880f5.jpg",
  ],
  ownerId: 177,
  favoriteCount: 48,
  createdAt: "2024-09-23T11:25:06.306Z",
  updatedAt: "2026-06-23T07:46:45.559Z",
  ownerNickname: "아이바오",
  isFavorite: false,
}

function ProductDetail() {
  const [product, setProduct] = useState(mockData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { productId } = useParams()

  useEffect(() => {
    const getProductDetail = async () => {
      setIsLoading(true)
      try {
        const productData = await fetchProductItem(productId)
        console.log(productData)
        setProduct(mockData)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getProductDetail()
  }, [productId])

  // if (error) return <div>에러 발생: {error}</div>

  return (
    <>
      {isLoading ? (
        <div>로딩중 ...</div>
      ) : (
        <>
          <h2>상품 상세 페이지</h2>
          <div>상품 아이디: {product.id}</div>
          <div>상품 이름: {product.name}</div>
          <div>상품 설명: {product.description}</div>
          <div>상품 가격: {product.price}</div>
        </>
      )}
    </>
  )
}

export default ProductDetail
