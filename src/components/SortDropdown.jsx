import "../styles/SortDropdown.css";

function SortDropdown({ orderBy, setOrderBy }) {
  return (
    <select
      value={orderBy}
      onChange={(event) => setOrderBy(event.target.value)}
    >
      <option value="recent">최신순</option>
      <option value="favorite">좋아요순</option>
    </select>
  );
}
export default SortDropdown;
