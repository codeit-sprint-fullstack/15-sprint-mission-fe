import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

getArticleList({ page: 1, pageSize: 10, keyword: "" }).then((data) =>
  console.log(data),
);
getArticle(1).then((data) => console.log(data));

createArticle({
  title: "스프린트 미션 테스트 게시글",
  content: "createArticle 함수 생성 테스트입니다.",
  image: "https://example.com/image.jpg",
}).then((data) => {
  console.log(data);
});

patchArticle(6781, {
  title: "수정된 스프린트 미션 게시글",
  content: "patchArticle 함수 수정 테스트입니다.",
  image: "https://example.com/updated-image.jpg",
}).then((data) => {
  console.log(data);
});

deleteArticle(6781).then((response) => {
  if (response) {
    console.log("게시글 삭제 성공");
    console.log(response.status);
  }
});

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

getProductList({
  page: 1,
  pageSize: 10,
  keyword: "",
}).then((data) => {
  console.log(data);
});

getProduct(4132).then((data) => {
  console.log(data);
});

createProduct({
  name: "스프린트 미션 테스트 상품",
  description: "createProduct 함수 생성 테스트입니다.",
  price: 1000,
  tags: ["테스트", "스프린트"],
  images: ["https://example.com/product.jpg"],
}).then((data) => {
  console.log(data);
});

patchProduct(4156, {
  name: "수정된 스프린트 미션 상품",
  description: "patchProduct 함수 수정 테스트입니다.",
  price: 2000,
  tags: ["수정", "테스트"],
  images: ["https://example.com/updated-product.jpg"],
}).then((data) => {
  console.log(data);
});

deleteProduct(4171).then((response) => {
  if (response) {
    console.log("상품 삭제 성공");
    console.log(response.status);
  }
});
