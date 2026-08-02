import { getArticleList, createArticle } from "./ArticleService.js";
import { getProductList, createProduct } from "./ProductService.js";

getArticleList({ page: 1, pageSize: 5 }).then((data) => console.log(data));
getProductList({ page: 1, pageSize: 5 }).then((data) => console.log(data));

//싫패 데이터
getArticle(999999999).then(console.log);


