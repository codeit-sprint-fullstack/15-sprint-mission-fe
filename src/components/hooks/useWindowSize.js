//# 반응형 감지 (pageSize, 컬럼 수 조정용)
import { useState, useEffect } from 'react';

// App.css의 브레이크포인트(1199px / 743px)와 동일한 기준을 사용한다.
export const BREAKPOINTS = {
  tablet: 1199,
  mobile: 743,
};

function getDeviceType(width) {
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
}

export function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : BREAKPOINTS.tablet + 1
  );

  useEffect(() => {
    // 리사이즈 이벤트가 너무 자주 발생하지 않도록 약간의 debounce를 둔다.
    let timerId;
    function handleResize() {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const deviceType = getDeviceType(windowWidth);

  return {
    windowWidth,
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
  };
}
