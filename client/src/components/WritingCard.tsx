interface WritingCardProps {
  title: string;
  year: string;
  articleUrl: string;
  image?: string;
}

export default function WritingCard({ title, year, articleUrl, image }: WritingCardProps) {
  return (
    <li className="mb-4">
      <a
        href={articleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-6 hover-elevate rounded-md p-4 bg-card border border-card-border"
        data-testid="card-writing"
      >
        {image && (
          <div className="relative z-10 sm:col-span-2">
            <img
              alt=""
              loading="lazy"
              width="200"
              height="150"
              decoding="async"
              className="rounded border-2 border-card-border transition"
              src={image}
              data-testid="img-writing"
            />
          </div>
        )}

        <div className={`relative z-10 ${image ? 'sm:col-span-6' : 'sm:col-span-8'}`}>
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            {year}
          </div>
          <h3 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors inline-flex items-baseline text-base">
            {title}
          </h3>
        </div>
      </a>
    </li>
  );
}
