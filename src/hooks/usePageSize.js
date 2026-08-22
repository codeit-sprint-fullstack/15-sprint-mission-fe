import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

function getPageSizeFromWidth(width) {
  if (width < 768) return 4;
  if (width < 1024) return 6;
  return 10;
}

export function usePageSize() {
  const [rawWidth, setRawWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setRawWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const debouncedWidth = useDebounce(rawWidth, 200);

  return getPageSizeFromWidth(debouncedWidth);
}