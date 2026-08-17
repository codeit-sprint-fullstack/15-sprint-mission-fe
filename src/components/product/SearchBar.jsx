//# 상품 검색 입력창 (부모가 keyword 상태를 소유, 여긴 controlled input)
import { useState, useEffect } from 'react';

export default function SearchBar({ keyword, onSearch, placeholder = '검색할 상품을 입력해주세요', className }) {
  // 사용자가 타이핑하는 동안 즉시 반영되는 내부(로컬) 상태
  const [inputValue, setInputValue] = useState(keyword ?? '');

  // 부모의 keyword가 바뀌면(ex. 초기화) 입력창도 동기화
  useEffect(() => {
    setInputValue(keyword ?? '');
  }, [keyword]);

  // 타이핑을 멈추고 300ms 뒤에만 실제 검색(onSearch)을 실행 -> 매 키 입력마다 API를 부르지 않도록 방지
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (inputValue !== keyword) {
        onSearch(inputValue);
      }
    }, 300);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <input
      type="text"
      className={className}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={placeholder}
      aria-label="상품 검색"
    />
  );
}
