import { useParams } from 'react-router-dom';
import { useGetPostById } from '../hooks/useGetPostById';


export function ProductDetails() {
  const { productId } = useParams();
  console.log('표시할ID:',productId)
  const post = useGetPostById(productId);
  console.log('상세페이지 표시데이터',post);

  if (!post) return <div>로딩 중...</div>;

  return (
    <>
      <h1>제품상세페이지입니다.</h1>
      <p>상품명:{post.name}</p>
      <p>상품소개:{post.description}</p>
      <p>판매가격:{post.price}</p>
      {post.tags.map((tag, index) => (
        <span key={index}>#{tag} </span>
      ))}
    </>
  );
}
