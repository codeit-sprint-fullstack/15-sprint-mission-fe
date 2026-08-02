import articleFunction from "./ArticleService.js";
import productFunction from "./ProductService.js";

//import 된 articleFunction 동작 확인
//파라미터인 게시글 아이디 : articleID 는 실행 시 다를 수 있음
articleFunction.getArticleList();
articleFunction.getArticle(6762);
articleFunction.createArticle();
articleFunction.patchArticle(6802);
articleFunction.deleteArticle(6802);

// //import 된 productFunction 동작 확인
//파라미터인 상품목록 아이디 : productID 는 실행 시 다를 수 있음
productFunction.getProductList();
productFunction.getProduct(4110);
productFunction.createProduct();
productFunction.patchProduct(4160);
productFunction.deleteProduct(4160);
