import ExperienceCard from './ExperienceCard';
import ensightLogo from '@assets/ensightinc_logo_1762349633744.jpg';
import ecozyonLogo from "@assets/Logo (3)_1763806750530.png";
import floLogo from '@assets/unnamed_1762347332050.jpg';
import tongucLogo from '@assets/tongucworks_logo_1762350675212.jpg';
import sylLogo from '@assets/images (3)_1762351026855.png';
import itoLogo from '@assets/image_1762351746522.png';
import uretkenLogo from '@assets/image_1762353003522.png';
import englishTimeLogo from '@assets/images (4)_1762352779709.png';

export default function ExperienceSection() {
  const experiences = [
    {
      startDate: '10.2025',
      endDate: 'PRESENT',
      title: 'Long Term Intern',
      company: 'Ensight Data & AI',
      companyUrl: 'https://ensight.com.tr/',
      image: ensightLogo,
      description: 'Contributes to the development of data analytics and AI-driven solutions to enhance corporate business processes, focusing on integration and optimization initiatives.',
      technologies: ['Microsoft Copilot Studio', 'Power Platform', 'Microsoft Fabric', 'AI/ML'],
    },
    {
      startDate: '09.2023',
      endDate: 'PRESENT',
      title: 'Women Entrepreneurs Board Member',
      company: 'Istanbul Chamber of Commerce',
      companyUrl: 'https://www.ito.org.tr/',
      image: itoLogo,
      description: 'Continues to serve as a member of the Istanbul Chamber of Commerce Women Entrepreneurs Board, actively contributing to initiatives that promote youth empowerment and entrepreneurship.',
      technologies: ['Leadership', 'Strategic Planning', 'Entrepreneurship', 'Youth Development'],
    },
    {
      startDate: '02.2023',
      endDate: 'PRESENT',
      title: 'Co-Founder & Software Developer',
      company: 'Ecozyon Tech',
      companyUrl: '#',
      image: ecozyonLogo,
      description: 'Ecozyon Tech is an innovative sustainability startup developing AI-powered wearable technologies and eco-friendly solutions. We focus on reducing carbon footprints and promoting sustainable lifestyle practices. By combining technology, education, and community engagement, we enable individuals and organizations to contribute to a cleaner, greener, and more livable future.',
      technologies: ['Leadership', 'Project Management', 'AI/ML', 'Sustainability Tech'],
    },
    {
      startDate: '08.2025',
      endDate: '09.2025',
      title: 'Artificial Intelligence Intern',
      company: 'FLO Group',
      companyUrl: 'https://www.flo.com.tr/',
      image: floLogo,
      description: 'I actively contributed to the development of an AI-powered return management system aimed at optimizing and accelerating shoe return processes. My work involved analyzing visual data to generate accurate classification outputs and reduce operational errors. I processed large-scale datasets to improve the accuracy of decision-making mechanisms. Additionally, I conducted research and hands-on development using Python, Node.js and PostgreSQL to build scalable, secure, and solution-oriented applications with a modern user interface.',
      technologies: ['Python', 'React', 'Node.js', 'PostgreSQL', 'AI/ML'],
    },
    {
      startDate: '01.2025',
      endDate: '06.2025',
      title: 'Artificial Intelligence Intern',
      company: 'Tonguç WORKS',
      companyUrl: 'https://www.tongucakademi.com/',
      image: tongucLogo,
      description: 'I actively contributed to projects in computer vision and natural language processing (NLP). My work involved processing visual and textual data provided by users to generate meaningful outputs. I analyzed large-scale datasets to support content-matching processes. Additionally, I conducted research and hands-on development using Python and AI libraries to build solution-oriented applications.',
      technologies: ['Python', 'NLP', 'Image Processing', 'TensorFlow', 'OpenCV'],
    },
    {
      startDate: '09.2024',
      endDate: '01.2025',
      title: 'Operations Intern',
      company: 'SYL Insurance - AgeSA',
      companyUrl: 'https://www.agesa.com.tr/',
      image: sylLogo,
      description: 'I conducted sectoral research to support the company\'s operational goals and developed strategic recommendations. Additionally, I evaluated customer requests, ensured all necessary information was complete, and took prompt actions to provide effective solutions. I was also responsible for organizing, archiving, and updating documents related to insurance processes. Furthermore, I informed customers about the company\'s products and services while actively participating in training sessions. Moreover, I contributed to the company\'s digitalization and process improvement projects by providing valuable recommendations.',
      technologies: ['Excel', 'SQL', 'Process Management', 'Data Analysis', 'Customer Service'],
    },
    {
      startDate: '09.2023',
      endDate: '10.2023',
      title: 'Intern',
      company: 'Uretken Akademi',
      companyUrl: '#',
      image: uretkenLogo,
      description: 'I prepared reports and informative booklets, planned strategies to acquire new customers and retain existing ones, and managed customer relationships to enhance satisfaction. Additionally, I conducted thorough reviews of finalized training materials to identify and correct any errors, ensuring their accuracy and quality.',
      technologies: ['MS Office', 'Canva', 'Customer Relations'],
    },
    {
      startDate: '06.2023',
      endDate: '07.2023',
      title: 'Web Development Intern',
      company: 'English Time',
      companyUrl: 'https://englishtime.com.tr/',
      image: englishTimeLogo,
      description: 'Developing web projects using HTML and CSS, designing user-friendly interfaces and gaining experience in database management.',
      technologies: ['HTML', 'CSS', 'Web Development', 'Database Management'],
    },
  ];

  return (
    <section id="experience" className="mb-12 sm:mb-16 lg:mb-24 scroll-mt-16" data-testid="section-experience">
      <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 mb-4 w-screen bg-background/90 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Experience
        </h2>
      </div>

      <h2 className="text-base font-bold tracking-widest text-foreground mb-6 hidden lg:block">
        <span className="text-primary mr-2">02.</span>
        PROFESSIONAL EXPERIENCE
      </h2>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <ExperienceCard {...exp} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
