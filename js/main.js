// getArticle, getArticleList, createArticle, patchArticle, deleteArticle 
import * as ArticleService from "./ArticleService.js";
//
// getProduct, getProductList, createProduct ,patchProduct, deleteProduct
import * as ProductService from "./ProductService.js";

ArticleService.etArticleList({ page: 1, pageSize: 5 }).then((data) => console.log(data));
ProductService.getProductList({ page: 1, pageSize: 5 }).then((data) => console.log(data));

//실패 데이터
ArticleService.getArticle(999999999).then(console.log);


