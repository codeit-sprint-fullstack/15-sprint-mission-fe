import { useState, useEffect } from 'react';

function getMediaQuery() {
  if (window.matchMedia('(max-width: 480px)').matches) return 'mobile';
  if (window.matchMedia('(min-width: 481px) and (max-width: 768px)').matches)
    return 'tablet';
  return 'desktop';
}
// getMediaQuery 함수를 선언한다.
// window.matchMedia의 matches 메서드는 화면의 너비가 주어진 조건에 일치하는지 불린 값으로 알려준다.
// 모바일 화면보다 작으면 'mobile', 태블릿 화면 구간에 속하면 'tablet', 그보다도 크면 'desktop' 문자열을 리턴한다.

export function useMediaQuery() {
  // useMediaQuery 커스텀 훅을 선언한다.
  const [mediaQuery, setMediaQuery] = useState(getMediaQuery);
  // 함수 본문 최상단에 useState로 mediaQuery 변수와 초기값, 세터 함수를 선언한다.
  // 초기값을 선언할 때는 함수를 즉시 호출하지 않고 함수 참조만 넣는다. (지연 초기화로 렌더링시마다 함수가 실행되는 것 방지)

  useEffect(() => {
    const handler = () => setMediaQuery(getMediaQuery());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  
  return mediaQuery;
}
