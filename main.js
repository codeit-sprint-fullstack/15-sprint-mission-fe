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


// Article API 테스트

// 게시글 목록 조회
getArticleList(1, 10, '');

// 게시글 상세 조회
// getArticle(1);

// 게시글 생성
// createArticle({
//   title: '테스트 게시글',
//   content: '게시글 테스트입니다.',
//   image: '',
// });

// 게시글 수정
// patchArticle(1, {
//   title: '수정된 게시글',
//   content: '수정된 내용입니다.',
//   image: '',
// });

// 게시글 삭제
// deleteArticle(1);

// ======================================

// Product API 테스트

// 상품 목록 조회
// getProductList(1, 10, '');

// 상품 상세 조회
// getProduct(1);

// 상품 생성
// createProduct({
//   name: '테스트 상품',
//   description: '상품 테스트입니다.',
//   price: 10000,
//   tags: ['테스트'],
//   images: [],
// });

// 상품 수정
// patchProduct(1, {
//   name: '수정된 상품',
//   description: '수정된 상품입니다.',
//   price: 20000,
//   tags: ['수정'],
//   images: [],
// });

// 상품 삭제
// deleteProduct(1);