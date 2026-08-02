import {
  getArticle,
  getArticleList,
  createArticle,
  deleteArticle,
  patchArticle,
} from "./ArticleService";

const testArticle = {
  title: "제목",
  content: "내용",
  image: "https://example.com/test.jpg",
};

const testProduct = {
    name: "이름",
    description: "상품 설명",
    price: 1000,
    tags: ['상품'],
    images: ["https://example.com/test.jpg"],
};