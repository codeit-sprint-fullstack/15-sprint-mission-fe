import readline from "readline";
import ArticleService from "./ArticleService.mjs";
import ProductService from "./ProductService.mjs";

//1.ProductService 모듈에 대한 CRUD 시나리오 수행
console.log("1.ProductService 모듈에 대한 CRUD 시나리오");

//1단계: Product 게시글 하나를 생성합니다.(create메소드)
console.log(
  "1단계: Product 게시글 하나를 생성합니다.",
  await ProductService.createProduct(
    "LG V60 ThinQ 5G 판매",
    "LG모바일의 마지막 불꽃! V60을 판매합니다!",
    350_000,
    "모바일",
    "https://ex.com",
  ),
);

//2단계: Product 게시글 전체의 일부를 불러옵니다.(GET메소드, 1페이지에 3개의 게시글 불러옴)
console.log(
  "2단계: Product 게시글 전체의 일부를 불러옵니다. (1페이지에 3개의 게시글 불러옴)",
  await ProductService.getProductList(1, 3),
);

//3단계: Product 게시글중 아까 작성된 게시글을 찾습니다.(GET메소드, ID사용하여 단일 객체 불러옴)
console.log("3단계: Product 게시글중 아까 작성된 게시글을 찾습니다.");
const getProductList = await ProductService.getProductList(1, 1, "LG");
const findProductId = getProductList.list[0].id;
console.log(`ID찾음: ${findProductId}`);

//4단계: 해당 게시글을 업데이트 합니다.(POST메소드, 가격변경: 30만원)
console.log(
  `4단계: id:${findProductId} 게시글을 업데이트 합니다.(가격변경: 30만원)`,
  await ProductService.patchProduct({ id: findProductId, price: 300_000 }),
);

//5단계: 해당 게시글을 삭제합니다.(DELETE메소드)
console.log(
  `5단계: id:${findProductId} 게시글을 삭제합니다.`,
  await ProductService.deleteProduct(findProductId),
);

//2.ArticleService 모듈에 대한 CRUD 시나리오 수행
console.log("2.ArticleService 모듈에 대한 CRUD 시나리오");

//1단계: Article 게시글 하나를 생성합니다.(create메소드)
console.log(
  "1단계: Article 게시글 하나를 생성합니다.",
  await ArticleService.createArticle(
    "고양이에 대한 경고",
    "고양이는 매우 위험한 존재입니다. 사람의 마음을 폭행하죠. 주의하십시오!",
    "https://ex.com",
  ),
);

//2단계: Article 게시글 전체의 일부를 불러옵니다.(GET메소드, 1페이지에 3개의 게시글 불러옴)
console.log(
  "2단계: Article 게시글 전체의 일부를 불러옵니다. (1페이지에 3개의 게시글 불러옴)",
  await ArticleService.getArticleList(1, 3),
);

//3단계: Article 게시글중 아까 작성된 게시글을 찾습니다.(GET메소드, ID사용하여 단일 객체 불러옴)
console.log("3단계: Article 게시글중 아까 작성된 게시글을 찾습니다.");
const getArticleList = await ArticleService.getArticleList(1, 1, "고양이");
const findArticleId = getArticleList.list[0].id;
console.log(`ID찾음: ${findArticleId}`);

//4단계 해당 게시글을 업데이트 합니다.(POST메소드, 가격변경: 30만원)
console.log(
  `4단계: id:${findArticleId} 게시글을 업데이트 합니다.(content 변경)`,
  await ArticleService.patchArticle({
    id: findArticleId,
    content: "장난입니다. 설마 그러겠어요? ㅋㅋㅋ",
  }),
);

//5단계: id:${findArticleId} 게시글을 삭제합니다.(DELETE메소드)
console.log(
  `5단계: id:${findArticleId} 게시글을 삭제합니다.`,
  await ArticleService.deleteArticle(findArticleId),
);
