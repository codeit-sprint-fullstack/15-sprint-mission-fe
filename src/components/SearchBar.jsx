import { useState } from "react";
import ic_search from "../assets/ic_search.svg";

function SearchBar({ onSearch, placeholder = "검색할 상품을 입력해주세요" }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-[320px] h-[42px]">
      <img
        src={ic_search}
        src={ic_search}
        alt="검색 아이콘"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6"
      />
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-[12px] bg-[#F3F4F6] font-normal focus:outline-none focus:border-[#2F80ED]"
      />
    </form>
  );
}

export default SearchBar;
