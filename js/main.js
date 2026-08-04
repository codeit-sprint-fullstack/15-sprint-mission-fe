import article from "./ArticleService.mjs";
import product from "./ProductService.mjs";
const RUN_ARTICLE = true;
const RUN_PRODUCT = true;

// 각 해당 CRUD 동작
async function run(label, fn) {
  try {
    const result = await fn();
    console.log(`------- ${label} -------`);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err.message);
  }
}

// article 테스트
async function testArticleCRUD() {
  await run("Article 목록 조회", () =>
    article.getArticleList({
      page: 1,
      pageSize: 10,
      keyword: "게시글 수정",
    }),
  );

  const createdArticle = await run("Article 생성", () =>
    article.createArticle({
      image: "https://example.com/...",
      content: "게시글 내용입니다.",
      title: "게시글 제목입니다.",
    }),
  );

  await run("Article 단일 조회", () => article.getArticle(createdArticle.id));
  await run("Article 수정", () =>
    article.patchArticle(createdArticle.id, {
      image: "https://example.com/...",
      content: "게시글 수정입니다.",
      title: "게시글 제목입니다.",
    }),
  );
  await run("Article 삭제", () => article.deleteArticle(createdArticle.id));
}

// product 테스트
async function testProductCRUD() {
  await run("Product 목록 조회", () =>
    product.getProuductList({
      page: 1,
      pageSize: 10,
      keyword: "제품",
    }),
  );

  const createdProduct = await run("Product 생성", () =>
    product.createProduct({
      images: ["https://example.com/..."],
      tags: ["생활용품"],
      price: 0,
      description: "string",
      name: "테스트용",
    }),
  );

  await run("Proudct 단일 조회", () => product.getProduct(createdProduct.id));
  await run("Proudct 수정 ", () =>
    product.patchProduct(createdProduct.id, {
      images: ["https://example.com/..."],
      tags: ["전자제품"],
      price: 0,
      description: "string",
      name: "수정 상품 이름",
    }),
  );

  await run("Product 삭제", () => product.deleteProduct(createdProduct.id));
}

if (RUN_ARTICLE) testArticleCRUD();
if (RUN_PRODUCT) testProductCRUD();
