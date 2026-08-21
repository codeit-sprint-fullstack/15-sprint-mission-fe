import { useSearchParams } from "react-router-dom";

export function useProductParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const orderBy = searchParams.get("orderBy") || "recent";
  const keyword = searchParams.get("keyword") || "";

  const handleSortChange = (newSort) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("orderBy", newSort);
      next.set("page", "1"); 
      return next;
    });
  };

  const handleSearch = (newKeyword) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (newKeyword) {
        next.set("keyword", newKeyword);
      } else {
        next.delete("keyword");
      }
      next.set("page", "1"); 
      return next;
    });
  };

  return {
    page,
    orderBy,
    keyword,
    handleSortChange,
    handleSearch,
  };
}