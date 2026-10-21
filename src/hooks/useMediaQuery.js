import { useEffect } from "react";
import { useState } from "react";

export function useMediaQuery(size) {
  const [matches, setMatches] = useState(() => window.matchMedia(size).matches);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(size);
    const handler = (e) => setMatches(e.matches);

    mediaQueryList.addEventListener("change", handler);
    return () => mediaQueryList.removeEventListener("change", handler);
  }, [size]);
  return matches;
}
