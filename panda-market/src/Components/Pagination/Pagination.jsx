import prevBtn from '../../assets/arrow_left.svg';
import nextBtn from '../../assets/arrow_right.svg';
import './Pagination.css';

export const Pagination = ({ nowPage, totalPages, onPageChange }) => {
  const PAGE_PER_GR = 5;

  const nowGroup = Math.ceil(nowPage / PAGE_PER_GR);

  const startPage = (nowGroup - 1) * PAGE_PER_GR + 1;
  const endPage = Math.min(startPage + PAGE_PER_GR - 1, totalPages);
  
  
  const pageNumber = []
  for (let i = startPage; i <= endPage; i++){
    pageNumber.push(i)
  }

  return (
    <div className="pagination">
      <button className="prevBtn" onClick={() => onPageChange(nowPage - 1)}>
        <img src={prevBtn} alt="#이전버튼" />
      </button>
      {pageNumber.map((pageNum) => (
        <button
          key={pageNum}
          type="button"
          onClick={() => onPageChange(pageNum)}
          className={nowPage === pageNum ? 'active' : undefined}
          aria-current={nowPage === pageNum ? 'page' : undefined}
        >
          {pageNum}
        </button>
      ))}
      <button className="nextBtn" onClick={() => onPageChange(nowPage + 1)}
        disabled = {nowPage === totalPages}>
        <img src={nextBtn} alt="#다음버튼" />
      </button>
    </div>
  );
};
