import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.mjs";

import {
  getProduct,
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.mjs";

function getArticleListData() {
  getArticleList({ page: 1, pageSize: 5, keyword: "" })
    .then((data) => {
      console.log("게시글 목록결과:", data);
    })
    .catch((error) => {
      console.log("게시글 목록 에러:", error);
    });
}

function getArticleData(id) {
  getArticle(id)
    .then((data) => {
      console.log("게시글 결과:", data);
    })
    .catch((error) => {
      console.log("게시글 에러:", error);
    });
}

function createArticleData({ title, content, image }) {
  createArticle({ title, content, image })
    .then((data) => {
      console.log("게시글 생성:", data);
    })
    .catch((error) => {
      console.log("게시글 생성에러:", error);
    });
}

function patchArticleData({ title, content, image, id }) {
  patchArticle({ title, content, image, id })
    .then((data) => {
      console.log("게시글 수정:", data);
    })
    .catch((error) => {
      console.log("게시글 수정에러:", error);
    });
}

function deleteArticleData(id) {
  deleteArticle(id)
    .then((data) => {
      console.log("게시글 삭제:", data);
    })
    .catch((error) => {
      console.log("게시글 삭제에러:", error);
    });
}

async function getProductListData() {
  try {
    const products = await getProductList({
      page: 1,
      pageSize: 5,
      keyword: "",
    });
    console.log("상품 목록 결과:", products);
  } catch (error) {
    console.log("상품 목록 에러:", error);
  }
}

async function getProductData(id) {
  try {
    const product = await getProduct(id);
    console.log("상품 결과:", product);
  } catch (error) {
    console.log("상품 에러:", error);
  }
}

async function createProductData({ images, tags, price, description, name }) {
  try {
    const product = await createProduct({
      images,
      tags,
      price,
      description,
      name,
    });
    console.log("상품 생성:", product);
  } catch (error) {
    console.log("상품 생성 에러", error);
  }
}

async function patchProductData({
  id,
  images,
  tags,
  price,
  description,
  name,
}) {
  {
    try {
      const product = await patchProduct({
        id,
        images,
        tags,
        price,
        description,
        name,
      });
      console.log("상품 수정:", product);
    } catch (error) {
      console.log("상품 수정 실패:", error);
    }
  }
}

async function deleteProductData(id) {
  try {
    const product = await deleteProduct(id);
    console.log("상품 삭제:", product);
  } catch (error) {
    console.log("상품 삭제 에러:", error);
  }
}
