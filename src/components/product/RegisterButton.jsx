//# 상품 등록 페이지로 이동하는 버튼
import { useNavigate } from 'react-router';

export default function RegisterButton({ href = '/items/add', className }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={className}
      onClick={() => navigate(href)}
    >
      상품 등록하기
    </button>
  );
}
