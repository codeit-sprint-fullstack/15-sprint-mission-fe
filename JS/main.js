import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

// Article Test

async function testArticle() {
  console.log("--- Article Test Start ---");

  // 1. 목록 조회
  const articleList = await getArticleList();

  console.log("게시글 목록:", articleList);

  // 2. 생성
  const article = await createArticle(
    "테스트 제목",
    "테스트 내용",
    "https://picsum.photos/300",
  );

  console.log("생성 결과:", article);

  // 생성된 id 사용
  const articleId = article.id;

  // 3. 상세 조회
  const detail = await getArticle(articleId);

  console.log("상세 조회:", detail);

  // 4. 수정
  await patchArticle(articleId, {
    title: "수정된 제목",
  });

  // 5. 삭제
  await deleteArticle(articleId);

  console.log("--- Article Test End ---");
}

// Product Test

async function testProduct() {
  console.log("--- Product Test Start ---");

  // 1. 목록 조회
  const productList = await getProductList();

  console.log("상품 목록:", productList);

  // 2. 생성
  const product = await createProduct({
    name: "테스트 상품",
    description: "상품 설명입니다.",
    price: 10000,
    tags: ["노트북"],
    images: ["https://picsum.photos/300"],
  });

  if (!product) {
    console.log("상품 생성 실패");
    return;
  }

  const productId = product.id;

  // 3. 상세 조회
  await getProduct(productId);

  // 4. 수정
  await patchProduct(productId, {
    price: 20000,
  });

  // 5. 삭제
  await deleteProduct(productId);

  console.log("--- Product Test End ---");
}

// 테스트 실행

async function runTest() {
  await testArticle();
  await testProduct();
}

runTest();
