"use client";

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { AchievementCard } from './achievement-card';
import { Trophy, Code, Award, Laptop } from 'lucide-react';

const achievements = [
  {
    title: "Smart India Hackathon Finalist 2024",
    description: "Developed an AI-powered solution for healthcare accessibility.",
    date: "December 2024",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "Microsoft IDC SEFA Program",
    description: "Attended various workshops held by Microsoft. Developed a user journey map for food delivery services using FigJam.",
    date: "April 2024",
    icon: <Laptop className="w-6 h-6" />
  },
  {
    title: "Codeforces Pupil",
    description: "About to achieved Pupil rank (1192+) on Codeforces competitive programming platform.",
    date: "December 2023",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Compitive Programming",
    description: "Solved 500+ DSA problems in coding platforms like Codeforces and Leetcode, building problem solving skills.",
    date: "November 2023",
    icon: <Award className="w-6 h-6" />
  }
];

export function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.from('.achievement-card', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="achievements" className="py-20">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="achievement-card">
              <AchievementCard {...achievement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}