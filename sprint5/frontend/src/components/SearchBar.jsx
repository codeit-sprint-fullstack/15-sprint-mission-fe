import { useEffect, useState } from 'react';
import searchIcon from '../assets/icons/ic_search.svg';
import './SearchBar.css';


export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value.trim());
    }, 300);

    return () => clearTimeout(timerId);
  }, [value, onSearch]);

  return (
    <div className="search-bar">
      <img src={searchIcon} alt="" className="search-bar__icon" />
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}
