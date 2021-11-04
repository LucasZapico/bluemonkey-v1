import React, { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollDir, setScrollDir] = useState('down');
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const handleScroll = () => {
    setLastScrollPos((prev) => {
      const dif = window.pageYOffset - prev;
      if (dif > 0) {
        setScrollDir((last) => 'down');
      } else {
        setScrollDir((last) => 'up');
      }
      return window.pageYOffset;
    });
  };
  useEffect(() => {
    // window scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return { scrollDir, lastScrollPos };
};
