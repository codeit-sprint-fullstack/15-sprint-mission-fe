import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./Services/articleServices.js";
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./Services/productServices.js";

async function testArticle() {
  getArticleList(1, 5, "").then((data) => console.log("게시들 목록:", data));

  const created = await createArticle(
    "8월 9일까지 맥북 1+1 행사 기간입니다.",
    "기종 상관없이 모든 맥북 1대 구매시 1대를 추가로 증정해드리고 있습니다. 많은 관심 부탁드립니다.",
    "https://picsum.photos/200",
  );
  console.log("생성된 게시글", created);

  const detail = await getArticle(created.id);
  console.log("게시글 상세:", detail);

  const updated = await patchArticle(created.id, {
    title: "많은 성원 덕분에 8월 12일까지 맥북 1+1 행사, 연장되었습니다!",
  });
  console.log("게시글 수정:", updated);

  const deleted = await deleteArticle(created.id);
  console.log("게시글 삭제", deleted);
}

async function testProduct() {
  getProductList(1, 5, "").then((data) => console.log("상품 목록:", data));

  const created = await createProduct(
    "M10 MacBook Fantastic 1TB",
    "M10 칩 탑재, 1TB RAM을 장착한 최신 Fantastic 모델입니다.",
    20000000,
    ["노트북", "맥북", "애플"],
    ["https://picsum.photos/200"],
  );
  console.log("생성된 상품:", created);

  const detail = await getProduct(created.id);
  console.log("상품 상세:", detail);

  const updated = await patchProduct(created.id, { price: 18000000 });
  console.log("상품 수정:", updated);

  const deleted = await deleteProduct(created.id);
  console.log("상품 삭제:", deleted);
}

await testArticle();
await testProduct();
