import ProjectCard from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';
import bursaLogo from '@assets/image_1762355291308.png';
import bursa1 from '@assets/1683794563734_1762354818343.jpg';
import bursa2 from '@assets/1683794564811_1762354823561.jpg';
import dyslexiaImage from '@assets/image_1762356120053.png';
import dyslexiaLogo from '@assets/images_1762356193029.png';
import nasaLogo from '@assets/images_1762356538706.jpg';
import nasa1 from '@assets/IMG_9555_1762357321254.jpeg';
import nasa2 from '@assets/IMG_8849_1762357323305.jpeg';
import nasa3 from '@assets/IMG_9455_1762357333797.jpeg';
import unescoImage from '@assets/image_1762357755060.png';
import unescoLogo from '@assets/indir (2)_1762365506115.png';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'UNESCO x Nestlé Global Youth Award',
      description: 'As part of the UNESCO x Nestlé Youth Impact – Because You Matter initiative, we were among the 100 distinguished leaders/projects developing solutions focused on environmental sustainability and climate action.',
      projectUrl: '#',
      technologies: ['UNESCO', 'Global Youth', 'Sustainability', 'Innovation'],
      logo: unescoLogo,
    },
    {
      title: 'NASA Space Apps Challenge',
      description: 'NASA Space Apps Challenge is a global hackathon organized by NASA, where participants worldwide develop innovative solutions for challenges in space and environmental fields.',
      projectUrl: '#',
      technologies: ['Space Tech', 'Hackathon', 'Social Media', 'Environmental Science', 'Innovation'],
      logo: nasaLogo,
      role: 'Team Member',
      images: [nasa1, nasa2, nasa3],
    },
    {
      title: 'DyslexiColor – Dyslexia Support App',
      description: 'DyslexiColor is a mobile application project designed to make the reading process easier and more enjoyable for students with dyslexia. The app aims to track students\' progress and provide feedback to teachers and families through personalized color and contrast settings, interactive content, and AI-supported monitoring features.',
      projectUrl: '#',
      technologies: ['Mobile App', 'AI', 'Education', 'Accessibility', 'React Native'],
      logo: dyslexiaLogo,
      images: [dyslexiaImage],
    },
    {
      title: 'Bursa Metropolitan Municipality Climate Change and Combating Drought Idea Competition',
      description: 'I participated with Ecozyon Tech, developing sustainable, tech-driven solutions to combat climate change and drought. The project focuses on reducing water scarcity and promoting renewable energy for long-term regional resilience.',
      projectUrl: '#',
      technologies: ['Sustainability', 'Climate Tech', 'Renewable Energy', 'Water Management'],
      logo: bursaLogo,
      images: [bursa1, bursa2],
    },
  ];

  return (
    <section id="projects" className="mb-12 sm:mb-16 lg:mb-24 scroll-mt-16" data-testid="section-projects">
      <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 mb-4 w-screen bg-background/90 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>

      <h2 className="text-base font-bold tracking-widest text-foreground mb-6 hidden lg:block">
        <span className="text-primary mr-2">04.</span>
        FEATURED PROJECTS
      </h2>

      <div>
        <ol className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <ProjectCard {...project} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
