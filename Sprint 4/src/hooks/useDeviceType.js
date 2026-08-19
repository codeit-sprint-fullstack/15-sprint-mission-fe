import useMediaQuery from './useMediaQuery';


export default function useDeviceType() {
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1199px)');

  if (isDesktop) return 'desktop';
  if (isTablet) return 'tablet';
  return 'mobile';
}
