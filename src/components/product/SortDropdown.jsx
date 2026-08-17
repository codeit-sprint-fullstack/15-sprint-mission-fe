//# 정렬 기준(최신순/좋아요순) 드롭다운 - 부모가 orderBy 상태를 소유
export default function SortDropdown({ orderBy, onChange, className }) {
  const options = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  return (
    <select
      className={className}
      value={orderBy}
      onChange={(e) => onChange(e.target.value)}
      aria-label="상품 정렬 기준"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
