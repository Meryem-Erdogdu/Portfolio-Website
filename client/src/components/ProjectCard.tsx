import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  logo?: string;
  projectUrl: string;
  technologies: string[];
  stars?: number;
  badge?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  images,
  logo,
  projectUrl,
  technologies,
  stars,
  badge,
  role,
  startDate,
  endDate,
}: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div
      className="group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      data-testid="card-project"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-md lg:group-hover:drop-shadow-lg" />
      
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl w-full p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Project screenshot"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>

      <div className="relative z-10">
        <div className="mb-2">
          <h3 className="font-medium leading-snug text-foreground">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-project"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}
              </span>
            </a>
          </h3>
          {(startDate || endDate) && (
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {startDate} — {endDate}
            </p>
          )}
        </div>

        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          {description}
        </p>

        {images && images.length > 0 && (
          <div className="mt-3 flex gap-2 flex-wrap">
            {images.slice(0, 3).map((img, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (img) setSelectedImage(img);
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md border border-primary/20 bg-primary/5 overflow-hidden hover:border-primary/30 transition-colors cursor-pointer hover-elevate"
                data-testid={`image-thumbnail-${index}`}
              >
                {img ? (
                  <img
                    src={img}
                    alt={`${title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-xs">
                    +
                  </div>
                )}
              </div>
            ))}
          </div>
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
