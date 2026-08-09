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

getArticleList({ page: 1, pageSize: 3, keyword: "테스트" })
  .then((articleList) => {
    console.log("게시글 목록:", articleList);

    return createArticle({
      title: "스프린트 미션 3 게시글",
      content: "Article API POST 테스트입니다.",
      image: "https://example.com/article.jpg",
    });
  })
  .then((createdArticle) => {
    console.log("게시글 생성:", createdArticle);

    return getArticle(createdArticle.id);
  })
  .then((article) => {
    console.log("게시글 조회:", article);

    return patchArticle(article.id, {
      title: "수정된 스프린트 미션 3 게시글",
      content: "Article API PATCH 테스트입니다.",
      image: "https://example.com/updated-article.jpg",
    });
  })
  .then((patchedArticle) => {
    console.log("게시글 수정:", patchedArticle);

    return deleteArticle(patchedArticle.id);
  })
  .then((deletedArticle) => {
    console.log("게시글 삭제:", deletedArticle);
  })
  .catch((error) => {
    console.error("Article API 실행 실패:", error.message);
  });

async function runProductService() {
  try {
    const productList = await getProductList({
      page: 1,
      pageSize: 3,
      keyword: "상품",
    });
    console.log("상품 목록:", productList);

    const createdProduct = await createProduct({
      name: "스프린트 미션 3 상품",
      description: "Product API POST 테스트입니다.",
      price: 15000,
      tags: ["sprint", "mission3"],
      images: ["https://example.com/product.jpg"],
    });
    console.log("상품 생성:", createdProduct);

    const product = await getProduct(createdProduct.id);
    console.log("상품 조회:", product);

    const patchedProduct = await patchProduct(product.id, {
      name: "수정된 스프린트 미션 3 상품",
      description: "Product API PATCH 테스트입니다.",
      price: 20000,
      tags: ["sprint", "updated"],
      images: ["https://example.com/updated-product.jpg"],
    });
    console.log("상품 수정:", patchedProduct);

    const deletedProduct = await deleteProduct(patchedProduct.id);
    console.log("상품 삭제:", deletedProduct);
  } catch (error) {
    console.error("Product API 실행 실패:", error.message);
  }
}

runProductService();