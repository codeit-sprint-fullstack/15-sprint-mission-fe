import { useState, useEffect } from "react";

export function usePageSize() {
  const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 768) return 4; 
    if (width < 1024) return 6; 
    return 10; 
  };

  const [pageSize, setPageSize] = useState(getPageSize);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
}
