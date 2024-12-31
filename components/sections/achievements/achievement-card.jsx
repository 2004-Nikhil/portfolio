"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

export function AchievementCard({ title, description, date, icon }) {
  useEffect(() => {
    const card = document.querySelector(`[data-achievement="${title}"]`);
    if (!card) return;

    const handleHover = () => {
      gsap.to(card, {
        scale: 1.02,
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
  }, [title]);

  return (
    <div 
      data-achievement={title}
      className="bg-card p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="text-primary mt-1">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-2">{description}</p>
          <p className="text-sm text-primary">{date}</p>
        </div>
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};