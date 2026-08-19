import { useState } from "react";
import './SearchBar.css'

export const SearchBar = ({onSearch}) => {
  //input 입력 칸에 들어오는 값을 담는 변수
  const [inputValue, setInputValue] = useState('');

  //입력 값을 보내는 함수
  function handleSearch(event) {
    setInputValue(event.target.value);
  }

  //Enter키를 눌렀을 때 검색이 되게 하는 기능
  function handleKeydown(event) {
    if (event.key === 'Enter') {
      onSearch(inputValue);
      //SearchBar 함수에서 파라미터로 onSearch를 구조분해로 받아야됨
    }
  }

  return (
    <input
      className="searchItem"
      type="text"
      placeholder="검색할 상품을 입력하세요 (Enter)"
      value={inputValue}
      onChange={handleSearch}
      onKeyDown={handleKeydown}
    />
  );
};
