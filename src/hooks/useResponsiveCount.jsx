import { useMediaQuery } from './useMediaQuery';

const CONFIG = {
  mobile: {bestItemsPerPage: 1, forSaleItemsPerPage: 4},
  tablet: {bestItemsPerPage: 2, forSaleItemsPerPage: 6},
  desktop: {bestItemsPerPage: 4, forSaleItemsPerPage: 10},
};

export const useResponsiveCount = () => {
  const mediaQuery = useMediaQuery();
  return CONFIG[mediaQuery];
}