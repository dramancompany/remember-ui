import { useState, useEffect } from 'react';

export function useDetectScrollPositionTop() {
  const [isScrollTop, setIsScrollTop] = useState(true);

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 0) {
      setIsScrollTop(false);
    } else if (scrollPos <= 0) {
      setIsScrollTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrollTop;
}
