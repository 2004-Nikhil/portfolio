import { Navbar } from '../components/navbar';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Projects } from '../components/sections/projects';
import { Skills } from '../components/sections/skills';
import { Achievements } from '../components/sections/achievements';
import { Contact } from '../components/sections/contact';
import { Footer } from '../components/footer';
import { ScrollProvider } from '../components/scroll-provider';

export default function Home() {
  return (
    <ScrollProvider>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </ScrollProvider>
  );
}