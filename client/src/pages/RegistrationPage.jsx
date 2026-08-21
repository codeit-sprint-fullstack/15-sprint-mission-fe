import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePost } from '../hooks/useCreatePost';

export function RegistrationPage() {
  const [tagsData, setTagsData] = useState([]); // 태그 배열
  const [tagInput, setTagInput] = useState('');
  const navigate = useNavigate();
  const {submitPost} = useCreatePost();
  const handleFormKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };
  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // submit 방지 + form의 keydown보다 먼저 처리됨

      const value = e.target.value.trim();
      if (value === '' || tagsData.includes(value)) return;

      setTagsData((prev) => [...prev, value]);
      setTagInput(''); // 입력창 비우기
    }
  };
  const handleTagRemove = (indexToRemove) => {
    setTagsData((prev) => prev.filter((_, index) => index !== indexToRemove));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('상품명');
    const description = formData.get('상품소개');
    const price = formData.get('판매가격');
    const tags = tagsData;
    const newId = await submitPost(name, description, price, tags);
    console.log(
      '등록 처리',
      name.current,
      description.current,
      price.current,
      tags.current,
      newId,
    );
    if (newId) navigate(`/product/${newId}`);
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
        <h1>상품등록 페이지입니다.</h1>
        <button>등록</button>
        <label htmlFor="productName">상품명</label>
        <input
          name="상품명"
          type="text"
          id="productName"
          placeholder="상품명을 입력해주세요"
        />
        <label htmlFor="productDescription">상품 소개</label>
        <input
          name="상품소개"
          type="text"
          id="productDescription"
          placeholder="상품 소개를 입력해주세요"
        />
        <label htmlFor="productPrice">판매가격</label>
        <input
          name="판매가격"
          type="number"
          id="productPrice"
          placeholder="판매 가격을 입력해주세요"
        />
        <label htmlFor="productTags">태그</label>
        <input
          name="태그"
          type="text"
          id="productTags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
          placeholder="태그를 입력해주세요"
        />
      </form>
      <div>
        {tagsData.map((tag, index) => (
          <span key={index}>
            #{tag}{' '}
            <button type="button" onClick={() => handleTagRemove(index)}>
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
