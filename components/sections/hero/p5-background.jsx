"use client";

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import p5.js
const P5Wrapper = dynamic(() => import('p5'), { ssr: false });

export function P5Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const sketch = (p) => {
      let particles = [];

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style("z-index", "-1");

        for (let i = 0; i < 100; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            speed: p.random(0.5, 2)
          });
        }
      };

      p.draw = () => {
        p.clear();
        particles.forEach((particle) => {
          p.noStroke();
          p.fill(p.color(255, 255, 255, 15));
          p.circle(particle.x, particle.y, 4);

          particle.y -= particle.speed;
          if (particle.y < 0) {
            particle.y = p.height;
            particle.x = p.random(p.width);
          }
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    // Initialize p5 with the container reference
    const p5Instance = new P5Wrapper(sketch, containerRef.current);

    // Cleanup the p5 instance on component unmount
    return () => {
      p5Instance.remove();
    };
  }, []); // Empty dependency array ensures this effect only runs on mount and unmount

  return <div ref={containerRef} className="fixed inset-0" />;
}