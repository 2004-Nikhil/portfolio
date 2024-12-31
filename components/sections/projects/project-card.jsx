"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function ProjectCard({ title, description, technologies, githubUrl, imageUrl }) {
  useEffect(() => {
    const card = document.querySelector(`[data-project="${title}"]`);
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
  }, [title]);

  return (
    <div 
      data-project={title}
      className="bg-card rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl h-full"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <Button variant="outline" className="gap-2 w-full" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            View Source
          </a>
        </Button>
      </div>
    </div>
  );
}