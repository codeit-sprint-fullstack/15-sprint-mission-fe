import leftButton from "../assets/leftButton.svg";
import rightButton from "../assets/rightButton.svg";
import pageButton1 from "../assets/pageButton1.svg";
import pageButton2 from "../assets/pageButton2.svg";
import pageButton3 from "../assets/pageButton3.svg";
import pageButton4 from "../assets/pageButton4.svg";
import pageButton5 from "../assets/pageButton5.svg";
import { Link } from "react-router-dom";

const pageImages = {
  1: pageButton1,
  2: pageButton2,
  3: pageButton3,
  4: pageButton4,
  5: pageButton5,
};

function PaginationBar({ currentPage, totalPages }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <nav className="flex items-center justify-center gap-1 my-6">
      {isFirstPage ? (
        <img src={leftButton} alt="이전 페이지 버튼" className="opacity-30" />
      ) : (
        <Link to={`?page=${currentPage - 1}`}>
          <img src={leftButton} alt="이전 페이지 버튼" />
        </Link>
      )}

      {pageNumbers.map((page) => {
        const isCurrent = page === currentPage;

        return (
          <Link key={page} to={`?page=${page}`}>
            {isCurrent ? (
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2F80ED] text-white">
                {page}
              </span>
            ) : (
              <img src={pageImages[page]} alt={`${page}페이지 버튼`} />
            )}
          </Link>
        );
      })}

      {isLastPage ? (
        <img src={rightButton} alt="다음 페이지 버튼" className="opacity-30" />
      ) : (
        <Link to={`?page=${currentPage + 1}`}>
          <img src={rightButton} alt="다음 페이지 버튼" />
        </Link>
      )}
    </nav>
  );
}

export default PaginationBar;
