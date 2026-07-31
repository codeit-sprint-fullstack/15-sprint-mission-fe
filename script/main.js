import ArticleService from "./ArticleService.mjs";
import ProductService from "./ProductService.mjs";


console.log(await ProductService.getProductList());
console.log(await ArticleService.getArticleList());