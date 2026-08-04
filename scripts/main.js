import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

//코드 테스트 - Product Service.//
const result1 = await getProductList(1, 10);
console.log("상품의 목록 추출:", result1);
// result1: 키워드 없이 가장 최근 등록된 상품(객체) 10개를 배열에 담아 반환.

const result2 = await getProduct(result1[0].id);
console.log("단일 상품 추출:", result2);
// result2: result1의 0번째 인덱스를 가진 상품을 상품 id로 검색하여 반환.

const result3 = await createProduct({
  name: "상품",
  description: "상품 설명",
  price: 100_000,
  tags: ["상품"],
  images: ["https://example.com/test.jpg"],
});
console.log("상품 등록하기:", result3);
//  result3: 상품 정보를 객체에 담아 파라미터로 전달하여 등록함.

const result4 = await patchProduct(result3.id, {
  name: "상품",
  description: "상품 설명",
  price: 110_000,
  tags: ["상품"],
  images: ["https://example.com/test.jpg"],
});
console.log("상품 수정하기:", result4);
// result4: result3에서 확인되는 상품 id로 해당 상품을 찾아 정보를 업데이트함(가격을 100_000에서 110_000로 바꿈).

const result5 = await deleteProduct(result3.id);
console.log("상품 삭제하기:", result5);
// result5: result3에서 확인되는 상품 id로 해당 상품을 찾아 삭제함.

//코드 테스트 - Article Service.//
const result6 = await getArticleList(1, 10);
console.log("게시글의 목록 추출:", result6);
// result6: 키워드 없이 가장 최근 등록된 게시물(객체) 10개를 배열에 담아 반환.

const result7 = await getArticle(result6[0].id);
console.log("단일 게시글 추출:", result7);
// result7: result6의 0번째 인덱스를 가진 게시물을 게시물 id로 검색하여 반환.

const result8 = await createArticle(
  "제목",
  "내용",
  "https://example.com/test.jpg",
);
console.log("게시글 작성:", result8);
//  result8: 게시물 정보를 각각 파라미터로 전달하여 등록함.

const result9 = await patchArticle(
  result8.id,
  "제목",
  "내용 수정",
  "https://example.com/test.jpg",
);
console.log("게시글 수정:", result9);
// result9: result8에서 확인되는 게시물 id로 해당 게시물을 찾아 내용을 업데이트함("내용"을 "내용 수정"으로 바꿈).

const result10 = await deleteArticle(result8.id);
console.log("게시글 삭제:", result10);
// result10: result8에서 확인되는 게시물 id로 해당 게시물을 찾아 삭제함.
