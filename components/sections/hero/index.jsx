"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { P5Background } from './p5-background';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleRef = useRef(null);

  useEffect(() => {
    if (inView && titleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }
  }, [inView]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <P5Background />
      <div ref={ref} className="container mx-auto px-4 text-center">
        <h1 ref={titleRef} className="space-y-4">
          <span className="block text-4xl md:text-6xl font-bold">
            Hi, I'm NIKHIL NAWANI
          </span>
          <span className="block text-xl md:text-l text-muted-foreground">
            SIH'24 Finalist | Data Science Enthusiast
          </span>
        </h1>
        <div className="mt-8 relative z-10">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://drive.google.com/file/d/1QjtgkqUzb2SoHa05KH3sJ-LZV4RY76VV/view?usp=sharing', '_blank')}
          >
            <FileText className="w-4 h-4" />
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
}