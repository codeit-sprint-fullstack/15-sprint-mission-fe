import ArticleService from "./ArticleService.mjs";
import ProductService from "./ProductService.mjs";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function consoleInput(question) {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(`${question}`);
  console.log(`입력받은 값: ${answer}`);
  rl.close();
  return answer;
}

async function inputData() {
  let productData = {
    name: "",
    description: "",
    price: 0,
    tags: "",
    images: "",
  };
  productData.name = await consoleInput("게시글 제목은 무엇인가요? : ");
  productData.description = await consoleInput("게시글 내용은 무엇인가요? : ");
  productData.price = Number(await consoleInput("제품 가격은 얼마인가요? : "));
  productData.tags = await consoleInput("태그는 무엇인가요? : ");
  productData.images = await consoleInput("이미지 링크는 무엇인가요? : ");
  for (const key in productData) {
    if (productData[key] === "") productData[key] = undefined;
  }
  console.log("지금까지 입력받은 내용입니다 : ", productData);
  return productData;
}

let selectCommand = null;

while (selectCommand !== "0") {
  try {
    console.log("① ProductService 모듈에 대한 CRUD 시나리오를 수행합니다.");
    selectCommand = await consoleInput(`
0. 프로그램 종료
1. 게시글 리스트 불러오기
2. 게시글 찾기
3. 게시글 생성하기
4. 게시글 업데이트
5. 게시글 삭제
무엇을 실행하고 싶으신가요? : `);

    switch (selectCommand) {
      case "1":
        console.log(
          "1. 게시글을 불러옵니다. 아래 불러올 리스트의 크기를 입력해주세요.",
        );
        const page = await consoleInput("페이지 갯수는 얼마인가요? : ");
        const pageSize = await consoleInput("페이지 크기는 얼마인가요? : ");
        let keyword = await consoleInput(
          "검색할 키워드는 무엇인가요?(없으면 x를 입력해 주세요.) : ",
        );
        if (keyword === "x") keyword = undefined;
        console.log(
          `${page}페이지에 ${pageSize}크기, keword는 ${keyword}인 리스트를 불러옵니다.`,
          await ProductService.getProductList(page, pageSize, keyword),
        );
        break;
      case "2":
        console.log("2. 원하는 게시글 찾습니다.");
        console.log(
          "해당 게시글을 출력합니다.",
          await ProductService.getProduct(
            Number(
              await consoleInput("찾기를 원하는 게시글의 ID는 무엇인가요? : "),
            ),
          ),
        );
        break;
      case "3":
        console.log("3. 게시글을 생성합니다.");
        await ProductService.createProduct(await inputData());
        break;
      case "4":
        console.log("4. 원하는 게시글의 내용을 바꿉니다.");
        const id = await consoleInput(
          "업데이트를 원하는 게시글의 ID는 무엇인가요? : ",
        );
        const data = await inputData();
        await ProductService.patchProduct({ id, ...data });
        break;
      case "5":
        console.log("5. 원하는 게시글을 삭제합니다.");
        console.log(
          "해당 게시글을 삭제합니다.",
          await ProductService.deleteProduct(
            Number(
              await consoleInput("삭제를 원하는 게시글의 ID는 무엇인가요? : "),
            ),
          ),
        );
        break;
      case "0":
        console.log("ProductService 모듈에 대한 CRUD 시나리오를 종료합니다.");
        break;
      default:
        console.log("잘못된 입력입니다. 다시 입력하세요.");
    }
  } catch (error) {
    console.log(
      "명령 실행중 에러가 발생했습니다. 아래 에러메시지를 참고하세요.",
    );
    console.log(error.message);
  }
}

// //1.ProductService 모듈에 대한 CRUD 시나리오 수행
// console.log("1.ProductService 모듈에 대한 CRUD 시나리오");

// //1단계: Product 게시글 하나를 생성합니다.(create메소드)
// console.log(
//   "1단계: Product 게시글 하나를 생성합니다.",
//   await ProductService.createProduct(
//     "LG V60 ThinQ 5G 판매",
//     "LG모바일의 마지막 불꽃! V60을 판매합니다!",
//     350_000,
//     "모바일",
//     "https://ex.com",
//   ),
// );

// //2단계: Product 게시글 전체의 일부를 불러옵니다.(GET메소드, 1페이지에 3개의 게시글 불러옴)
// console.log(
//   "2단계: Product 게시글 전체의 일부를 불러옵니다. (1페이지에 3개의 게시글 불러옴)",
//   await ProductService.getProductList(1, 3),
// );

// //3단계: Product 게시글중 아까 작성된 게시글을 찾습니다.(GET메소드, ID사용하여 단일 객체 불러옴)
// console.log("3단계: Product 게시글중 아까 작성된 게시글을 찾습니다.");
// const getProductList = await ProductService.getProductList(1, 1, "LG");
// const findProductId = getProductList.list[0].id;
// console.log(`ID찾음: ${findProductId}`);

// //4단계: 해당 게시글을 업데이트 합니다.(POST메소드, 가격변경: 30만원)
// console.log(
//   `4단계: id:${findProductId} 게시글을 업데이트 합니다.(가격변경: 30만원)`,
//   await ProductService.patchProduct({ id: findProductId, price: 300_000 }),
// );

// //5단계: 해당 게시글을 삭제합니다.(DELETE메소드)
// console.log(
//   `5단계: id:${findProductId} 게시글을 삭제합니다.`,
//   await ProductService.deleteProduct(findProductId),
// );

// //2.ArticleService 모듈에 대한 CRUD 시나리오 수행
// console.log("2.ArticleService 모듈에 대한 CRUD 시나리오");

// //1단계: Article 게시글 하나를 생성합니다.(create메소드)
// console.log(
//   "1단계: Article 게시글 하나를 생성합니다.",
//   await ArticleService.createArticle(
//     "고양이에 대한 경고",
//     "고양이는 매우 위험한 존재입니다. 사람의 마음을 폭행하죠. 주의하십시오!",
//     "https://ex.com",
//   ),
// );

// //2단계: Article 게시글 전체의 일부를 불러옵니다.(GET메소드, 1페이지에 3개의 게시글 불러옴)
// console.log(
//   "2단계: Article 게시글 전체의 일부를 불러옵니다. (1페이지에 3개의 게시글 불러옴)",
//   await ArticleService.getArticleList(1, 3),
// );

// //3단계: Article 게시글중 아까 작성된 게시글을 찾습니다.(GET메소드, ID사용하여 단일 객체 불러옴)
// console.log("3단계: Article 게시글중 아까 작성된 게시글을 찾습니다.");
// const getArticleList = await ArticleService.getArticleList(1, 1, "고양이");
// const findArticleId = getArticleList.list[0].id;
// console.log(`ID찾음: ${findArticleId}`);

// //4단계 해당 게시글을 업데이트 합니다.(POST메소드, 가격변경: 30만원)
// console.log(
//   `4단계: id:${findArticleId} 게시글을 업데이트 합니다.(content 변경)`,
//   await ArticleService.patchArticle({
//     id: findArticleId,
//     content: "장난입니다. 설마 그러겠어요? ㅋㅋㅋ",
//   }),
// );

// //5단계: 해당 게시글을 삭제합니다.(DELETE메소드)
// console.log(
//   `5단계: id:${findArticleId} 게시글을 삭제합니다.`,
//   await ArticleService.deleteArticle(findArticleId),
// );
