import { useState, useEffect } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About', mobileLabel: 'About', number: '01' },
    { id: 'experience', label: 'Professional Experience', mobileLabel: 'Experience', number: '02' },
    { id: 'skills', label: 'Technical Skills', mobileLabel: 'Skills', number: '03' },
    { id: 'projects', label: 'Featured Projects', mobileLabel: 'Projects', number: '04' },
    { id: 'certificates', label: 'Certificates & Achievements', mobileLabel: 'Certificates', number: '05' },
    { id: 'interests', label: 'Current Interests', mobileLabel: 'Interests', number: '06' },
    { id: 'achievements', label: 'Professional Blog', mobileLabel: 'Blog', number: '07' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Meryem-Erdogdu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/meryem-erd', label: 'LinkedIn' },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a 
          href="#" 
          className="group block"
          data-testid="link-home"
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            <span className="block">Meryem Erdogdu</span>
          </h1>
          <h2 className="mt-2 sm:mt-3 text-base sm:text-lg font-medium tracking-tight text-foreground lg:text-xl">
            AI/ML Software Developer
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xs text-sm sm:text-base leading-normal text-muted-foreground">
            I create AI solutions that empower innovation and meaningful change.
          </p>
        </a>

        <nav className="nav mt-8 lg:mt-20" aria-label="In-page jump links" data-testid="nav-menu">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:w-max lg:gap-0">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`group flex items-center py-2 px-3 lg:px-0 lg:py-3 rounded-md lg:rounded-none ${
                    activeSection === section.id ? 'active bg-primary/10 lg:bg-transparent' : 'hover-elevate lg:hover:bg-transparent'
                  }`}
                  data-testid={`link-${section.id}`}
                >
                  <span
                    className={`nav-indicator mr-2 lg:mr-4 h-px transition-all hidden lg:block ${
                      activeSection === section.id
                        ? 'w-16 bg-primary'
                        : 'w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground'
                    }`}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === section.id
                        ? 'text-primary'
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    <span className="mr-1 lg:mr-2">{section.number}.</span>
                    <span className="hidden sm:inline">{section.label}</span>
                    <span className="sm:hidden">{section.mobileLabel}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <TooltipProvider delayDuration={300}>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media" data-testid="social-links">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label} className="mr-5 text-xs">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-colors"
                      aria-label={link.label}
                      data-testid={`link-social-${link.label.toLowerCase()}`}
                    >
                      <span className="sr-only">{link.label}</span>
                      <Icon className="h-6 w-6" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </TooltipProvider>
    </header>
  );
}
