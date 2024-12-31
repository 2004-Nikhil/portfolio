"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ProjectCard } from './project-card';

export function ProjectCarousel({ projects }) {
  const carouselRef = useRef(null);
  const slideTrackRef = useRef(null);

  useEffect(() => {
    if (!slideTrackRef.current) return;

    // Create three sets of projects for seamless looping
    const totalWidth = slideTrackRef.current.scrollWidth / 3;
    let currentX = -totalWidth; // Start from the middle set

    // Position the track at the middle set initially
    gsap.set(slideTrackRef.current, { x: currentX });

    const animate = () => {
      gsap.to(slideTrackRef.current, {
        x: currentX - totalWidth,
        duration: 30,
        ease: "none",
        onComplete: () => {
          currentX -= totalWidth;
          // When we reach the end of the middle set, jump back to the start of it
          if (currentX <= -(totalWidth * 2)) {
            currentX = -totalWidth;
            gsap.set(slideTrackRef.current, { x: currentX });
          }
          animate(); // Continue the animation
        }
      });
    };

    // Start the animation
    animate();

    // Pause animation on hover
    const handleMouseEnter = () => {
      gsap.to(slideTrackRef.current, { duration: 0.5, timeScale: 0 });
    };

    const handleMouseLeave = () => {
      gsap.to(slideTrackRef.current, { duration: 0.5, timeScale: 1 });
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
      gsap.killTweensOf(slideTrackRef.current);
    };
  }, [projects]);

  // Create three sets of projects for seamless looping
  const tripleProjects = [...projects, ...projects, ...projects];

  return (
    <div 
      ref={carouselRef}
      className="w-full overflow-hidden"
    >
      <div 
        ref={slideTrackRef}
        className="flex gap-6"
      >
        {tripleProjects.map((project, index) => (
          <div 
            key={`${project.title}-${index}`}
            className="w-[400px] flex-shrink-0"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}