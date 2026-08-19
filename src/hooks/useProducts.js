import { useEffect, useState } from "react";

function useProducts(page, searchKeyword, orderBy) {
  // API에서 가져온 상품을 저장
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // 컴포넌트가 처음 실행될 때 API를 호출
  useEffect(() => {
    fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&keyword=${searchKeyword}&orderBy=${orderBy}`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("목록 불러오기 실패");
        }
        return response.json();
      })

      .then((data) => {
        setProducts(data.list);
        setTotalCount(data.totalCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, searchKeyword, orderBy]);

  useEffect(() => {
    fetch(
      "https://panda-market-api.vercel.app/products?orderBy=favorite&pageSize=4",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("목록 불러오기 실패");
        }
        return response.json();
      })
      .then((data) => {
        setBestProducts(data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ProductPage에 상품 데이터를 전달
  return {
    products,
    bestProducts,
    totalCount,
  };
}

export default useProducts;
