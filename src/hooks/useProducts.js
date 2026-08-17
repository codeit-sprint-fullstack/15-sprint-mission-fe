import { useEffect, useState } from "react";

function useProducts(page, searchKeyword, orderBy) {
  // API에서 가져온 상품을 저장
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // 컴포넌트가 처음 실행될 때 API를 호출
  useEffect(() => {
    // 상품 API를 요청
    fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&keyword=${searchKeyword}&orderBy=${orderBy}`,
    )
      // 서버의 응답을 JSON으로 변환
      .then((response) => response.json())

      // 실제로 받은 데이터를 확인
      .then((data) => {
        // 일단 받은 데이터를 저장
        setProducts(data.list);
        setTotalCount(data.totalCount);
      });

    fetch(
      "https://panda-market-api.vercel.app/products?orderBy=favorite&pageSize=4",
    )
      .then((response) => response.json())
      .then((data) => {
        setBestProducts(data.list);
      });
  }, [page, searchKeyword, orderBy]);

  // ProductPage에 상품 데이터를 전달
  return {
    products,
    bestProducts,
    totalCount,
  };
}

export default useProducts;
