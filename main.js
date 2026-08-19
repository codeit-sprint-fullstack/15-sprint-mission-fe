import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct
} from "./ProductService.js";
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle
} from "./ArticleService.js";

getArticleList(1, 10, "")
  .then((response) => {
    if (!response.ok) {
      throw new Error("API 요청에 실패했습니다.");
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.list[0]);
  })
  .catch((error) => {
    console.error(error);
  });

getArticle(6831)
  .then((response) => {
    if (!response.ok) {
      throw new Error("게시글을 가져오는데 실패했습니다.");
    }

    return response.json();
  })
  .then((data) => {
    console.log("가져온 게시글:", data);
  })
  .catch((error) => {
    console.error(error);
  });

// createArticle(
//   "새로운 게시글입니다.",
//   "POST 요청으로 만든 게시글입니다.",
//   "https://test.com/image.jpg"
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("게시글 생성에 실패했습니다.");
//     }

//     return response.json();
//   })
//   .then((data) => {
//     console.log("생성된 게시글:", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// patchArticle(
//   6860,
//   "수정된 제목입니다.",
//   "PATCH로 내용을 수정했습니다.",
//   "https://test.com/updated-image.jpg"
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("게시글 수정에 실패했습니다.");
//     }

//     return response.json();
//   })
//   .then((data) => {
//     console.log("수정된 게시글:", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// deleteArticle(6860)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("게시글 삭제에 실패했습니다.");
//     }

//     console.log("게시글 삭제 성공!");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function testProductList() {
  try {
    const response = await getProductList(1, 10, "");

    if (!response.ok) {
      throw new Error("상품 목록을 가져오는데 실패했습니다.");
    }

    const data = await response.json();

    console.log("상품 목록:", data);
    console.log("첫번째 상품:", data.list[0]);
  } catch (error) {
    console.error(error);
  }
}

testProductList();

async function testProduct() {
  try {
    const response = await getProduct(4237);

    if (!response.ok) {
      throw new Error("상품을 가져오는데 실패했습니다.");
    }
    const data = await response.json();

    console.log("가져온 상품:", data);
  } catch (error) {
    console.error(error);
  }
}

testProduct();

// async function testCreateProduct() {
//   try {
//     const response = await createProduct(
//       "새로운 상품",
//       "async/await로 만든 상품입니다.",
//       100000,
//       ["전자제품", "테스트"],
//       ["https:test.com/product.jpg"]
//     );
//     if (!response.ok) {
//       throw new Error("상품 생성에 실패했습니다.");
//     }
//     const data = await response.json();

//     console.log("생성된 상품:", data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// testProduct();

// async function testPatchProduct() {
//   try {
//     const response = await patchProduct(
//       4239,
//       "수정된 상품",
//       "PATCH로 수정한 상품입니다.",
//       20000,
//       ["수정", "테스트"],
//       ["https://test.com/updated-product.jpg"]
//     );
//     if (!response.ok) {
//       throw new Error("상품 수정에 실패했습니다.");
//     }

//     const data = await response.json();

//     console.log("수정된 상품:", data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// testPatchProduct();

//  async function testDeleteProduct() {
//    try {
//      const response = await deleteProduct(4238);

//      if (!response) {
//        throw new Error("상품 삭제에 실패했습니다.");
//      }
//      console.log("상품삭제 성공");
//    } catch (error) {
//      console.error(error);
//    }
//  }

//  testDeleteProduct();
