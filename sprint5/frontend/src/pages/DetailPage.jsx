import { useParams } from 'react-router-dom';
import './DetailPage.css';

export default function DetailPage() {
  const { productId } = useParams();

  return (
    <section className="detail-page">
      <h2 className="detail-page__title">상품 상세 페이지</h2>
      <p className="detail-page__id">상품 id: {productId}</p>
    </section>
  );
}