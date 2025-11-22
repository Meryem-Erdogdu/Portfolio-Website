import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import InterestsSection from '@/components/InterestsSection';
import AchievementsSection from '@/components/WritingSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'certificates', 'interests', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <a
        href="#content"
        className="absolute left-0 top-0 z-50 block -translate-x-full rounded bg-primary px-4 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground focus:translate-x-0"
        data-testid="link-skip"
      >
        Skip to Content
      </a>

      <div className="pointer-events-none fixed inset-0 transition duration-300 hidden lg:block" style={{ background: 'radial-gradient(600px at calc(var(--mouse-x, 0) * 1px) calc(var(--mouse-y, 0) * 1px), rgba(79, 70, 229, 0.15), transparent 80%)' }} />

      <div className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-8 font-sans sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Navigation activeSection={activeSection} />

          <main id="content" className="pt-8 lg:w-1/2 lg:py-24" data-testid="main-content">
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificatesSection />
            <InterestsSection />
            <AchievementsSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
