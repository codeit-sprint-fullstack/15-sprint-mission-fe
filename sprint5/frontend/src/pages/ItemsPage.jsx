import ProductListSection from '../components/ProductListSection';

// 미션5 요구사항: 베스트 상품 목록 조회는 구현하지 않음, 좋아요순 정렬 제외
export default function ItemsPage({ deviceType }) {
  return <ProductListSection deviceType={deviceType} />;
}
