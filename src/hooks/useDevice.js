import { useMediaQuery } from "./useMediaQuery";

export function useDevice() {
  const isTablet = useMediaQuery("(max-width : 744px)");
  const isMobile = useMediaQuery("(max-width : 375px)");

  return { isTablet, isMobile };
}
