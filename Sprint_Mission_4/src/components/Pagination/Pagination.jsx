export function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
    console.log('[Pagination]현재페이지:',currentPage, '전체페이지:', totalPages)
    return (
        <nav>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </nav>
    )
    
}