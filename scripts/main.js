import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './ArticleService.js';

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './ProductService.js';


getArticleList(1, 5, '')
  .then((list) => {
    console.log('게시글 목록:', list);
  })
  .catch((e) => {
    console.log('목록 조회 실패');
  });

getArticle(1)
  .then((article) => {
    console.log('게시글 상세:', article);
  })
  .catch((e) => {
    console.log('상세 조회 실패');
  });

createArticle('테스트 제목', '테스트 내용입니다.', 'https://example.com/image.jpg')
  .then((newArticle) => {
    console.log('생성된 게시글:', newArticle);
  })
  .catch((e) => {
    console.log('생성 실패');
  });

  async function testProductFunctions() {
  try {
    const productList = await getProductList(1, 5, '');
    console.log('상품 목록:', productList);

    const product = await getProduct(1);
    console.log('상품 상세:', product);

    const newProduct = await createProduct(
      '테스트 상품',
      '테스트 설명입니다.',
      10000,
      ['테스트'],
      ['https://example.com/product.jpg']
    );
    console.log('생성된 상품:', newProduct);
  } catch (e) {
    console.log('Product 관련 요청 중 오류 발생');
  }
}

testProductFunctions();

patchArticle(6871, '수정된 제목', '수정된 내용입니다.', 'https://example.com/image2.jpg')
  .then((updatedArticle) => {
    console.log('수정된 게시글:', updatedArticle);
  })
  .catch((e) => {
    console.log('수정 실패');
  });

deleteArticle(6880)
  .then((result) => {
    console.log('게시글 삭제 완료:', result);
  })
  .catch((e) => {
    console.log('삭제 실패');
  });

async function testProductPatchDelete() {
  try {
    const updatedProduct = await patchProduct(
      4240,
      '수정된 상품 이름',
      '수정된 설명입니다.',
      20000,
      ['수정'],
      ['https://example.com/product2.jpg']
    );
    console.log('수정된 상품:', updatedProduct);

    const deleteResult = await deleteProduct(4240);
    console.log('상품 삭제 완료:', deleteResult);
  } catch (e) {
    console.log('Product patch/delete 중 오류 발생');
  }
}

testProductPatchDelete();