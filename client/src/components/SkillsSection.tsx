import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
  const skills = {
    'PROGRAMMING': ['Python', 'R', 'C++', 'HTML', 'CSS', 'JavaScript'],
    'DATABASES & TOOLS': ['SQL', 'MongoDB', 'PostgreSQL', 'MS Office'],
    'AI & DATA SCIENCE': ['Machine Learning', 'NLP', 'Image Processing', 'Data Analytics', 'TensorFlow', 'OpenCV'],
    'PROJECT & COLLABORATION': ['Trello', 'Jira', 'Slack', 'Notion', 'Canva', 'Git'],
  };

  return (
    <section id="skills" className="mb-12 sm:mb-16 lg:mb-24 scroll-mt-16" data-testid="section-skills">
      <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 mb-4 w-screen bg-background/90 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Technıcal Skılls
        </h2>
      </div>

      <h2 className="text-base font-bold tracking-widest text-foreground mb-6 hidden lg:block">
        <span className="text-primary mr-2">03.</span>
        TECHNICAL SKILLS
      </h2>

      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2" data-testid={`list-${category.toLowerCase().replace(/\s+/g, '-')}`}>
              {items.map((skill) => (
                <li key={skill}>
                  <Badge 
                    variant="secondary" 
                    className="text-xs px-3 py-1.5 cursor-pointer hover-elevate hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
