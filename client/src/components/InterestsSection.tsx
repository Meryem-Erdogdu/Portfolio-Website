export default function InterestsSection() {
  const interests = [
    'AI/ML & Algorithm Optimization',
    'Sustainability & Climate Action',
    'Social Impact through Technology',
    'Physics & Quantum Computing',
    'Cryptography & Security Systems',
    'Space & Earth Science Applications',
  ];

  return (
    <section id="interests" className="mb-12 sm:mb-16 lg:mb-24 scroll-mt-16" data-testid="section-interests">
      <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 mb-4 w-screen bg-background/90 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Current Interests
        </h2>
      </div>

      <h2 className="text-base font-bold tracking-widest text-foreground mb-6 hidden lg:block">
        <span className="text-primary mr-2">05.</span>
        CURRENT INTERESTS
      </h2>

      <div className="grid gap-3 sm:gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="group relative rounded-md bg-card border border-card-border p-4 sm:p-6 hover-elevate flex items-center" 
            data-testid={`card-interest-${index}`}
          >
            <div className="flex items-start gap-3 w-full">
              <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 rounded-full bg-primary" data-testid={`dot-interest-${index}`} />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-foreground leading-relaxed" data-testid={`title-interest-${index}`}>
                {interest}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
