"use client";

import { useEffect, useRef } from 'react';
import p5 from 'p5';

export function P5Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p) => {
      let particles = [];

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');

        for (let i = 0; i < 100; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            speed: p.random(0.5, 2),
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

    const p5Instance = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0" />;
}