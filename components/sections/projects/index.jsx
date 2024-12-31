"use client";

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ProjectCarousel } from './project-carousel';

const projects = [
  {
    title: "Stock Market Prediction",
    description: "Predict stock prices using a Long-Short Term Memory (LSTM) network. and achieved an accuracy of 98%.",
    technologies: ["TensorFlow", "Neural Networks", "Data Visualization"],
    githubUrl: "https://github.com/2004-Nikhil/stock-price-prediction",
    imageUrl: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Sign Language Detection and Control System",
    description: "Develop a system to detect sign language in real-time using Convolutional neural networks and OpenCV.",
    technologies: ["OpenCV", "CNN"],
    githubUrl: "https://github.com/2004-Nikhil/Sign-Language-Detection-and-Control-System",
    imageUrl: "https://plus.unsplash.com/premium_photo-1666990820793-79c7fb0a2e3b?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Character recognition",
    description: "Developed a web app for handwritten character recognition using a Convolutional Neural Network (CNN) model.",
    technologies: ["CNN", "Flask"],
    githubUrl: "https://github.com/2004-Nikhil/character-recognition",
    imageUrl: "https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Develop a system to detect fraudulent credit card transactions using advanced machine learning techniques, including XGBoost.",
    technologies: ["XGBoost", "Finance"],
    githubUrl: "#",
    imageUrl: "https://plus.unsplash.com/premium_photo-1681819806412-418bb52f8cc8?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Expense Tracker",
    description: "Help users manage their finances effectively and uses JPA, Hibernate and Leverages Maven.",
    technologies: ["React", "SpringBoot", "MySQL"],
    githubUrl: "https://github.com/2004-Nikhil/Expence-tracker",
    imageUrl: "https://plus.unsplash.com/premium_photo-1681760172620-98a67f93b08a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "YouTube Video Analyst",
    description: "Extract and analyze insights from YouTube videos.Offers valuable insights for content creators, researchers, and marketers.",
    technologies: ["PyTorch", "Generative AI", "Large Language Modules"],
    githubUrl: "https://github.com/2004-Nikhil/Youtube_Analysis",
    imageUrl: "https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Professional Network Analytics Dashboard",
    description: "Responsive React-based dashboard. Implemented interactive visualizations using Recharts.",
    technologies: ["React", "Tailwinds", "CSS"],
    githubUrl: "#",
    imageUrl: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Task Management Application",
    description: "Developed the frontend UI using React, implementing features such as task creation, filtering, and real-time updates.",
    technologies: ["React ", "MongoDB", "Express", "Node.js"],
    githubUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Malware Detection",
    description: "Implements Random Forest Classifier for classification tasks, also used Plotly and scikit-learn for Data Visualization. and achived an accuracy of 97%.",
    technologies: ["Random Forest", "Data Visualization"],
    githubUrl: "https://github.com/2004-Nikhil/Malware-Detection",
    imageUrl: "https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Mobile Price Prediction",
    description: "Uses Optuna to optimize hyperparameters for a Decision tree Regressor based on cross-validated R2 scores.",
    technologies: ["Neural Networks", "Decision tree"],
    githubUrl: "https://github.com/2004-Nikhil/mobile-price-prediction",
    imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.from('.projects-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="projects" className="py-20">
      <div ref={ref} className="container mx-auto px-4">
        <div className="projects-content">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="relative">
            <ProjectCarousel projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}