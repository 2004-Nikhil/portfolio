"use client";

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ContactForm } from './contact-form';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    href: "mailto:nikhilnikhil242004@gmail.com"
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/2004-Nikhil"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/2004-nikhil/"
  },
];

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.from('.contact-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="contact-content space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out through any of these channels:
            </p>
            <div className="flex flex-col space-y-4">
              {contactLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  className="justify-start gap-2"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="contact-content">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}