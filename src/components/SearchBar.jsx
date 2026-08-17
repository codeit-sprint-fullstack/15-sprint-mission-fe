import "../styles/SearchBar.css";

function SearchBar({ keyword, setKeyword, onSearch }) {
  return (
    <div className="searchbar">
      <button onClick={onSearch}>
        <img src="./image/ic_search.png" alt="검색" />
      </button>
      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default SearchBar;
