import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  companyUrl: string;
  companyLogo?: string;
  image?: string;
  description: string;
  technologies: string[];
  links?: Array<{ label: string; url: string }>;
}

export default function ExperienceCard({
  startDate,
  endDate,
  title,
  company,
  companyUrl,
  companyLogo,
  image,
  description,
  technologies,
  links,
}: ExperienceCardProps) {
  return (
    <div
      className="group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      data-testid="card-experience"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-md lg:group-hover:drop-shadow-lg" />
      
      <div className="relative z-10">
        <div className="mb-2">
          <h3 className="font-medium leading-snug text-foreground">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-company"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {company} · {title}
              </span>
            </a>
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {startDate} — {endDate}
          </p>
        </div>

        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>

        {links && links.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-4" aria-label="Related links">
            {links.map((link) => (
              <li key={link.label} className="flex items-center">
                <a
                  className="relative inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-3 flex flex-wrap gap-2" data-testid="list-technologies">
          {technologies.map((tech) => (
            <li key={tech}>
              <Badge 
                variant="secondary" 
                className="text-xs cursor-pointer hover-elevate hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              >
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
