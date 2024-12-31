"use client";

import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.from('.about-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [inView]);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="about-content text-lg">
          A highly motivated and academically proficient Computer Science Engineering student with a knack for leveraging cutting-edge technologies to solve real-world problems, exemplified through diverse projects in machine learning, web development, and data analytics.
          </p>
          <p className="about-content text-lg">
          Adept at collaborating in team environments and independently managing complex projects, backed by strong skills in programming languages like Python, C++, and Java, alongside hands-on experience in frameworks such as React, Spring Boot, and TensorFlow.
          </p>
          <p className="about-content text-lg">
          A proactive learner with excellent analytical skills, driven to excel in challenging environments and contribute meaningfully to innovative and impactful technological solutions.
          </p>
        </div>
      </div>
    </section>
  );
}