"use client";

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import SkillCard from './skill-card';
import { Code2, Database, Brain, Globe, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "Java", "C", "C++"]
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "Oracle SQL", "MySQL"]
  },
  {
    category: "Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: ["Tensorflow", "Pandas", "PyTorch", "Keras", "scikit-learn", "OpenCV", "Huggingface"]
  },
  {
    category: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: ["React", "Next.js", "Node.js", "REST", "JavaScript", "Spring Boot", "Flask", "Selenium"]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD","Vim", "MATLAB", "Bash", "Maven", "npm", "LATEX"]
  }
];

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.from('.skill-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div key={skill.category} className="skill-card">
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}