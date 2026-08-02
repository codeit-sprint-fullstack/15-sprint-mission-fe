import {
  getArticle,
  getArticleList,
  createArticle,
  deleteArticle,
  patchArticle,
} from "./ArticleService.js";

import {
  getProduct,
  getProductList,
  createProduct,
  deleteProduct,
  patchProduct,
} from "./ProductService.js";

const testArticle = {
  title: "제목",
  content: "내용",
  image: "https://example.com/test.jpg",
};

const testProduct = {
  name: "이름",
  description: "상품 설명",
  price: 1000,
  tags: ["상품"],
  images: ["https://example.com/test.jpg"],
};

async function testArticleFunctions(testArticle) {
  console.log("============ 게시글 목록 조회 =============");
  await getArticleList();

  console.log("============ 게시글 생성 =============");
  const createdArticle = await createArticle(testArticle);
  if (!createdArticle) return;

  const id = createdArticle.id;
  console.log("============ 게시글 조회 =============");
  await getArticle(id);
  console.log("============ 게시글 수정 =============");
  await patchArticle(id, { title: "[Censored]" });
  console.log("============ 게시글 삭제 =============");
  await deleteArticle(id);
}

async function testProductFunctions(testProduct) {
  console.log("============ 상품 목록 조회 =============");
  await getProductList();

  console.log("============ 상품 생성 =============");
  const createdProduct = await createProduct(testProduct);
  if (!createdProduct) return;

  const id = createdProduct.id;
  console.log("============ 상품 조회 =============");
  await getProduct(id);
  console.log("============ 상품 수정 =============");
  await patchProduct(id, { name: "[Censored]" });
  console.log("============ 상품 삭제 =============");
  await deleteProduct(id);
}

async function main() {
  await testArticleFunctions(testArticle);
  await testProductFunctions(testProduct);
}

main();
