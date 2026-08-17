import { useState, useEffect } from 'react';

function getMediaQuery() {
  if (window.matchMedia('(max-width: 480px)').matches) return 'mobile';
  if (window.matchMedia('(min-width: 481px) and (max-width: 768px)').matches)
    return 'tablet';
  return 'desktop';
}

export function useMediaQuery() {
  const [mediaQuery, setMediaQuery] = useState(getMediaQuery);

  useEffect(() => {
    const handler = () => setMediaQuery(getMediaQuery());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return mediaQuery;
}

