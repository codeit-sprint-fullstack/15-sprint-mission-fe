//# 위 컴포넌트들을 조립하는 페이지 (url path: '/')
// pages/MarketPage.jsx
import { useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import BestProductList from '../product/BestProductList';
import ProductListHeader from '../product/ProductListHeader';
import ProductList from '../product/ProductList';

export default function MarketPage() {
  // 검색어/정렬 기준은 헤더(입력)와 목록(조회)이 함께 써야 하므로
  // 두 컴포넌트의 공통 부모인 여기서 소유한다 ("상태 끌어올리기")
  const [keyword, setKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('recent');

  return (
    <div>
      <Navbar />
      <BestProductList />
      <ProductListHeader
        keyword={keyword}
        onKeywordChange={setKeyword}
        orderBy={orderBy}
        onOrderByChange={setOrderBy}
      />
      <ProductList keyword={keyword} orderBy={orderBy} />
      <Footer />
    </div>
  );
}
