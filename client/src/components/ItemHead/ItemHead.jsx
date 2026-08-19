import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemHead.module.css';

export function ItemHead() {
  const [inputData, setInputData] = useState('');
  const [selected, setSelected] = useState('recent');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('입력값: ', inputData);
    setInputData('');
  };

  const options = [{ name: '최신순', value: 'recent' }];
  const handleChange = (e) => {
    console.log('[SortProducts]정렬기준은: ', e.target.value);
    setSelected(e.target.value);
  };
  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>판매 중인 상품</h1>
      <form  onSubmit={handleSubmit} className={styles.search}>
        <div className={styles.inputSide}>
          <img src="ic_search.svg" alt="돋보기" />
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="검색할 상품명을 입력해주세요"
            className={styles.input}
          />
        </div>
      </form>
      <Link className={styles.resistButton} to="/registration">상품 등록하기</Link>
      <select
        value={selected}
        onChange={handleChange}
        className={styles.selectStyle}
      >
        {options.map((option) => (
          <option
            key={option.name}
            value={option.value}
            className={styles.optionStyle}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
