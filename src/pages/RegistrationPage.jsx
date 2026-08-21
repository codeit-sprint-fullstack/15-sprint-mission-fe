import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePost } from '../hooks/useCreatePost';
import styles from '../styles/RegistrationPage.module.css';

export function RegistrationPage() {
  const [tagsData, setTagsData] = useState([]); // 태그 배열
  const [tagInput, setTagInput] = useState('');
  const navigate = useNavigate();
  const { submitPost } = useCreatePost();
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
    <div className={styles.body}>
      <form
        onSubmit={handleSubmit}
        onKeyDown={handleFormKeyDown}
        className={styles.formBody}
      >
        <div className={styles.nav}>
          <p className={styles.title}>상품 등록하기</p>
          <button className={styles.registButton}>등록</button>
        </div>

        <label htmlFor="productName" className={styles.labels}>
          상품명
        </label>
        <textarea
          name="상품명"
          type="text"
          id="productName"
          placeholder="상품명을 입력해주세요"
          className={styles.inputs}
        />
        <label htmlFor="productDescription" className={styles.labels}>
          상품 소개
        </label>
        <textarea
          name="상품소개"
          type="text"
          id="productDescription"
          placeholder="상품 소개를 입력해주세요"
          className={`${styles.inputs} ${styles.bigProductNameInput}`}
        />
        <label htmlFor="productPrice" className={styles.labels}>
          판매가격
        </label>
        <textarea
          name="판매가격"
          type="number"
          id="productPrice"
          placeholder="판매 가격을 입력해주세요"
          className={styles.inputs}
        />
        <label htmlFor="productTags" className={styles.labels}>
          태그
        </label>
        <textarea
          name="태그"
          type="text"
          id="productTags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
          placeholder="태그를 입력해주세요"
          className={styles.inputs}
        />
      </form>
      <div className={styles.tagsBody}>
        {tagsData.map((tag, index) => (
          <div key={index} className={styles.tags}>
            #{tag}{' '}
            <button
              type="button"
              onClick={() => handleTagRemove(index)}
              className={styles.tagDeleteButton}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
