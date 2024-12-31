"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function SkillCard({ category, skills, icon }) {
  useEffect(() => {
    const card = document.querySelector(`[data-category="${category}"]`);
    if (!card) return;

    const handleHover = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleHover);
    card.addEventListener('mouseleave', handleLeave);

    return () => {
      card.removeEventListener('mouseenter', handleHover);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, [category]);

  return (
    <div 
      data-category={category}
      className="bg-card p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}