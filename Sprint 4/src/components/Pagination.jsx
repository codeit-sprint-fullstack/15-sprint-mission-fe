import arrowLeftIcon from '../assets/icons/arrow_left.svg';
import arrowRightIcon from '../assets/icons/arrow_right.svg';
import './Pagination.css';

const PAGE_GROUP_SIZE = 5;

const MAX_PAGES = 10;

export default function Pagination({ page, totalCount, pageSize, onPageChange }) {
 
  const totalPages = Math.min(MAX_PAGES, Math.max(1, Math.ceil(totalCount / pageSize)));

 
  const groupIndex = Math.floor((page - 1) / PAGE_GROUP_SIZE);
  const groupStart = groupIndex * PAGE_GROUP_SIZE + 1;
  const groupEnd = Math.min(groupStart + PAGE_GROUP_SIZE - 1, totalPages);

  const pageNumbers = [];
  for (let number = groupStart; number <= groupEnd; number += 1) {
    pageNumbers.push(number);
  }

  const hasPrevGroup = groupStart > 1;
  const hasNextGroup = groupEnd < totalPages;

  return (
    <div className="pagination">
      <button
        type="button"
        disabled={!hasPrevGroup}
        onClick={() => onPageChange(groupStart - 1)}
        aria-label="이전 5개 페이지"
      >
        <img src={arrowLeftIcon} alt="" />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          className={number === page ? 'pagination__page pagination__page--active' : 'pagination__page'}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        disabled={!hasNextGroup}
        onClick={() => onPageChange(groupEnd + 1)}
        aria-label="다음 5개 페이지"
      >
        <img src={arrowRightIcon} alt="" />
      </button>
    </div>
  );
}
