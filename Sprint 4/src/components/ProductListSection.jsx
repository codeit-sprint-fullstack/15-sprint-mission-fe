import { useCallback, useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropDown';
import Pagination from './Pagination';
import './ProductListSection.css';


const PAGE_SIZE = { mobile: 4, tablet: 6, desktop: 10 };

export default function ProductListSection({ deviceType }) {
  const [orderBy, setOrderBy] = useState('recent');
  const [keyword, setKeyword] = useState('');
  const pageSize = PAGE_SIZE[deviceType];

  const { products, totalCount, page, setPage, isLoading, error } = useProducts({
    pageSize,
    orderBy,
    keyword,
  });

  const handleSearch = useCallback((value) => setKeyword(value), []);

  return (
    <section className="product-section">
      <div className="product-section__toolbar">
        <h2 className="product-section__title">판매 중인 상품</h2>
        <div className="product-section__controls">
          <SearchBar onSearch={handleSearch} />
          <button type="button" className="product-section__register">
            상품 등록하기
          </button>
          <SortDropdown orderBy={orderBy} onChange={setOrderBy} />
        </div>
      </div>

      {error && <p className="product-section__message">상품을 불러오지 못했어요.</p>}
      {!error && isLoading && <p className="product-section__message">불러오는 중...</p>}
      {!error && !isLoading && products.length === 0 && (
        <p className="product-section__message">검색 결과가 없어요.</p>
      )}

      <div className={`product-section__grid product-section__grid--${deviceType}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={setPage}
      />
    </section>
  );
}
