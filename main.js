import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";
import * as productServices from "./ProductService.js";

/* ============================================================
   ARTICLE API 대표 흐름 (전체 CRUD 사이클을 한 번에 확인)
   ============================================================ */

async function runArticleFlow() {
  console.log("<ARTICLE API 대표 흐름>");
  console.log("");
  console.log("1. 게시글 생성");
  const created = await createArticle(
    "대표 흐름 테스트",
    "생성 → 조회 → 수정 → 삭제까지 이어지는 대표 흐름입니다.",
    "https://example.com/article-flow-test.jpg",
  );
  console.log("");
  console.log("2. 생성된 게시글 상세 조회");
  await getArticle(created.id);
  console.log("");
  console.log("3. 게시글 수정");
  await patchArticle(created.id, "수정된 제목", "수정된 내용입니다.", "https://example.com/article-flow-updated.jpg");
  console.log("");
  console.log("4. 게시글 삭제 (테스트 데이터 정리)");
  await deleteArticle(created.id);
  console.log("");
  console.log("5. 삭제 확인 - 재조회 시도 (404가 정상)");
  await getArticle(created.id);
  console.log("");
  console.log("--- --- --- --- 끝 --- --- --- ---");
  console.log("");
}

await runArticleFlow();

/* ============================================================
   PRODUCT API 대표 흐름 (전체 CRUD 사이클을 한 번에 확인)
   ============================================================ */

async function runProductFlow() {
  console.log("<PRODUCT API 대표 흐름>");
  console.log("");
  console.log("1. 상품 생성");
  const created = await productServices.createProduct(
    "대표 흐름 테스트 상품",
    "생성 → 조회 → 수정 → 삭제까지 이어지는 대표 흐름입니다.",
    10000,
    ["테스트"],
    ["https://example.com/product-flow-test.jpg"],
  );
  console.log("");
  console.log("2. 생성된 상품 상세 조회");
  await productServices.getProduct(created.id);
  console.log("");
  console.log("3. 상품 수정");
  await productServices.patchProduct(
    created.id,
    "수정된 상품명",
    "수정된 설명입니다.",
    15000,
    ["테스트", "수정"],
    ["https://example.com/product-flow-updated.jpg"],
  );
  console.log("");
  console.log("4. 상품 삭제 (테스트 데이터 정리)");
  await productServices.deleteProduct(created.id);
  console.log("");
  console.log("5. 삭제 확인 - 재조회 시도 (404가 정상)");
  await productServices.getProduct(created.id);
  console.log("");
  console.log("--- --- --- --- 끝 --- --- --- ---");
  console.log("");
}

await runProductFlow();

/* ============================================================
   ARTICLE API 테스트
   ============================================================ */

/* ---- 1. getArticleList: 쿼리 파라미터 검증 ----
   아래 5가지 조합을 하나씩 주석 해제하며 확인하세요.
   확인 포인트: 매번 다른 결과(totalCount, list 개수)가 나오는지 */

// (1) 파라미터 없음 → 기본값(page:1, pageSize:10 상당)으로 조회되는지
// getArticleList();

// (2) page만 지정
// getArticleList({ page: 3 });

// (3) pageSize만 지정 → list 배열 길이가 정확히 3개인지 확인
// getArticleList({ pageSize: 3 });

// (4) page + pageSize 조합
// getArticleList({ page: 3, pageSize: 3 });

// (5) keyword만 지정 → 제목/내용에 해당 단어가 포함된 것만 오는지
//     (실제 데이터에 없는 단어면 list가 빈 배열일 수 있음, 그 자체도 정상 동작 증거)
// getArticleList({ keyword: "테스트" });
// getArticleList({ keyword: "냉장고" });

/* ---- 2. getArticle: 상세 조회 ----
   존재하는 id로 테스트 (없으면 위 목록 조회 결과에서 id 하나 확인 후 교체) */
// getArticle(6868);
// getArticle(4246);
// getArticle(6889);
// getArticle(6890);

/* ---- 3. createArticle: 생성 ----
   실행 후 콘솔에 찍히는 결과의 id를 아래 4, 5단계에 사용 */
// createArticle("테스트 게시글", "Article CRUD 테스트용 내용입니다.", "https://example.com/article-test.jpg");

/* ---- 4. patchArticle: 수정 ----
   3단계에서 생성된 id로 교체해서 실행 */
// patchArticle(/* articleID */ 6889, "수정된 제목", "수정된 내용입니다.", "https://example.com/article-updated.jpg");

/* ---- 5. deleteArticle: 삭제 ----
   3단계에서 생성한 게시글을 정리하는 용도 */
// deleteArticle(/* articleID */ 6889);

/* ---- 6. 에러 처리 확인: 존재하지 않는 id로 상세 조회 ----
   2XX가 아닐 때 에러메시지가 콘솔에 출력되는지 확인 */
// getArticle(999999999);

/* ============================================================
   PRODUCT API 테스트
   ============================================================ */

/* ---- 1. getProductList: 쿼리 파라미터 검증 ----
   Article과 동일하게 5가지 조합을 확인 */

// (1) 파라미터 없음
// productServices.getProductList();

// (2) page만 지정
// productServices.getProductList({ page: 2 });

// (3) pageSize만 지정 → list 배열 길이가 정확히 3개인지 확인
// productServices.getProductList({ pageSize: 3 });

// (4) page + pageSize 조합
// productServices.getProductList({ page: 1, pageSize: 3 });

// (5) keyword만 지정
// productServices.getProductList({ keyword: "테스트" });
// productServices.getProductList({ keyword: "수정" });
// productServices.getProductList({ keyword: "스프린트" });

/* ---- 2. getProduct: 상세 조회 ----
   위 목록 조회 결과에서 실제 존재하는 id로 교체 */
// productServices.getProduct(1);
// productServices.getProduct(3769);
// productServices.getProduct(4249);

/* ---- 3. createProduct: 생성 ----
   실행 후 콘솔에 찍히는 결과의 id를 아래 4, 5단계에 사용 */
// productServices.createProduct(
//   "테스트 상품",
//   "Product CRUD 테스트용 설명입니다.",
//   10000,
//   ["전자제품"],
//   ["https://example.com/product-test.jpg"],
// );

/* ---- 4. patchProduct: 수정 ----
   3단계에서 생성된 id로 교체해서 실행 */
// productServices.patchProduct(
//   /* productId */ 4249,
//   "수정된 상품명",
//   "수정된 설명입니다.",
//   15000,
//   ["가전", "할인"],
//   ["https://example.com/product-updated.jpg"],
// );

/* ---- 5. deleteProduct: 삭제 ----
   3단계에서 생성한 상품을 정리하는 용도 */
// productServices.deleteProduct(/* productId */ 4249);

/* ---- 6. 에러 처리 확인: 존재하지 않는 id로 상세 조회 ----
   error.response 분기(상태 코드, 서버 에러 메시지)가 콘솔에 출력되는지 확인 */
// productServices.getProduct(999999999);
