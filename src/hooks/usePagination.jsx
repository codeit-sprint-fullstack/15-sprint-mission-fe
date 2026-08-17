import { useMediaQuery } from './useMediaQuery';

const CONFIG = {
  mobile: {bestItemsPerPage: 1, forSaleItemsPerPage: [2,2]},
  tablet: {bestItemsPerPage: 2, forSaleItemsPerPage: [3,2]},
  desktop: {bestItemsPerPage: 4, forSaleItemsPerPage: [5,2]},
};

export const usePagination = () => {
  const mediaQuery = useMediaQuery();
  return CONFIG[mediaQuery];
}