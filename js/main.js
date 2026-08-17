// getArticle, getArticleList, createArticle, patchArticle, deleteArticle 
import * as ArticleService from "./ArticleService.js";
//
// getProduct, getProductList, createProduct ,patchProduct, deleteProduct
import * as ProductService from "./ProductService.js";

// ArticleService.getArticleList({ page: 1, pageSize: 5 }).then((data) => console.log(data));
// ProductService.getProductList({ page: 1, pageSize: 5 }).then((data) => console.log(data));

//실패 데이터
// ArticleService.getArticle(999999999).then(console.log);
// ProductService.getProduct(999999999).then(console.log);

//생성
const image = "https://example.com/...";
const content =  "게시글 내용입니다.";
const title = "게시글 제목입니다.";

const images = ["https://example.com/..."];
const tags = ["전자제품"];
const price = 0;
const description = "string";
const name = "상품이름";

// ArticleService.createArticle({title, content, image}).then((data) => console.log(data));
// ProductService.createProduct({images, tags, price,description,name}).then((data) => console.log(data));

const dataArticle = {title : "수정된 타이틀입니다."};
const dataProduct = {name : "수정된이름입니다."};


//수정
// ArticleService.patchArticle(6814,dataArticle).then((data) => console.log(data));
// ProductService.patchProduct(4168,dataProduct).then((data) => console.log(data));

//데이터 조회
// ArticleService.getArticle(6814).then(console.log);
// ProductService.getProduct(4168).then(console.log);


//삭제
// ArticleService.deleteArticle(6814).then(console.log);
// ProductService.deleteProduct(4168).then(console.log);


