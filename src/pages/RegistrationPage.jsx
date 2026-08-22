import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePost } from '../hooks/useCreatePost';
import styles from '../styles/RegistrationPage.module.css';

export function RegistrationPage() {
  const [tagsData, setTagsData] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);
  const navigate = useNavigate();
  const { submitPost } = useCreatePost();
  const isNamePass = nameValue.length <= 10 && nameValue.length >= 1;
  const isDescroptionPass =
    descriptionValue.length >= 10 && descriptionValue.length <= 100;
  const isPricePass = typeof priceValue === 'string';
  const isTagPass = tagInput.length <= 5;
  const [outCursor1, setOutCursor1] = useState(false);
  const [outCursor2, setOutCursor2] = useState(false);
  const [outCursor3, setOutCursor3] = useState(false);
  console.log(
    'name',
    isNamePass,
    'desc',
    isDescroptionPass,
    'price',
    isPricePass,
    'tag',
    isTagPass,
  );
  const handleFormKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };
  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const value = e.target.value.trim();
      if (value === '' || tagsData.includes(value) || !isTagPass) return;

      setTagsData((prev) => [...prev, value]);
      setTagInput('');
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
  const handleBlur1 = () => {
    setOutCursor1(true);
    console.log('blur1', outCursor1);
  };
  const handleBlur2 = () => {
    setOutCursor2(true);
    console.log('blur1', outCursor2);
  };
  const handleBlur3 = () => {
    setOutCursor3(true);
    console.log('blur1', outCursor3);
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
          <button
            disabled={
              isNamePass || isDescroptionPass || isPricePass || isTagPass
            }
            className={
              isNamePass && isDescroptionPass && isPricePass && isTagPass
                ? styles.registButton
                : styles.disableRegistButton
            }
          >
            등록
          </button>
        </div>

        <label htmlFor="productName" className={styles.labels}>
          상품명
        </label>
        <textarea
          name="상품명"
          type="text"
          id="productName"
          placeholder="상품명을 입력해주세요"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          onBlur={handleBlur1}
          className={`${styles.inputs} ${!isNamePass && outCursor1 ? styles.bedInput : ''}`}
        />
        <label className={`${styles.errorLabelsNone} ${!isNamePass && outCursor1 ? styles.errorLabels : ''}`}>10자 이내로 입력해주세요</label>
        <label htmlFor="productDescription" className={styles.labels}>
          상품 소개
        </label>
        <textarea
          name="상품소개"
          type="text"
          id="productDescription"
          placeholder="상품 소개를 입력해주세요"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          onBlur={handleBlur2}
          className={`${styles.inputs} ${styles.bigProductNameInput} ${!isDescroptionPass && outCursor2 ? styles.bedInput : ''}`}
        />
        <label className={`${styles.errorLabelsNone} ${!isDescroptionPass && outCursor1 ? styles.errorLabels : ''}`}>10자 이상 입력해주세요</label>
        <label htmlFor="productPrice" className={styles.labels}>
          판매가격
        </label>
        <textarea
          name="판매가격"
          type="number"
          id="productPrice"
          placeholder="판매 가격을 입력해주세요"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
          onBlur={handleBlur3}
          className={`${styles.inputs} ${!isPricePass && outCursor3 ? styles.bedInput : ''}`}
        />
        <label className={`${styles.errorLabelsNone} ${!isPricePass && outCursor1 ? styles.errorLabels : ''}`}>숫자로 입력해주세요</label>
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
          className={`${styles.inputs} ${!isTagPass ? styles.bedInput : ''}`}
        />
        <label className={`${styles.errorLabelsNone} ${!isTagPass && outCursor1 ? styles.errorLabels : ''}`}>5글자 이내로 입력해주세요</label>
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
