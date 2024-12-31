"use client";

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export function ScrollProvider({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
}