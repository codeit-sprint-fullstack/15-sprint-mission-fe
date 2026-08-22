import { useMediaQuery } from './useMediaQuery';

const CONFIG = {
  mobile: {bestItemsPerPage: 1, allItemsPerPage: 4},
  tablet: {bestItemsPerPage: 2, allItemsPerPage: 6},
  desktop: {bestItemsPerPage: 4, allItemsPerPage: 10},
};

export const useResponsiveCount = () => {
  const mediaQuery = useMediaQuery();
  return CONFIG[mediaQuery];
}