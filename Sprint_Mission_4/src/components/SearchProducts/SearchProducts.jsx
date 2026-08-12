import { useState } from 'react';

export function SearchProducts({ search }) {
  const [inputData, setInputData] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('입력값: ', inputData);
    search(inputData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="검색할 상품명을 입력해주세요"
      />
    </form>
  );
}
