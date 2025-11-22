export default function AboutSection() {
  return (
    <section id="about" className="mb-12 sm:mb-16 lg:mb-24 scroll-mt-16" data-testid="section-about">
      <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 mb-4 w-screen bg-background/90 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>

      <h2 className="text-base font-bold tracking-widest text-foreground mb-6 hidden lg:block">
        <span className="text-primary mr-2">01.</span>
        ABOUT
      </h2>
      
      <div className="space-y-4 text-base leading-relaxed">
        <p className="text-muted-foreground">
          I am an AI and Software Developer dedicated to building intelligent, data-driven, and human-centered technologies. My work focuses on the intersection of machine learning, software engineering, and innovation, with the goal of designing systems that are both technically robust and impactful.
        </p>
        
        <p className="text-muted-foreground">
          Currently, I serve as a Software Developer at <span className="text-foreground font-medium">Ecozyon Tech</span>, where I contribute to projects in artificial intelligence, web technologies, and sustainability. I specialize in combining AI with responsible engineering practices to deliver innovative solutions that address complex real-world challenges.
        </p>
        
        <p className="text-muted-foreground">
          Throughout my career, I have developed expertise across diverse environments—including startups, research initiatives, corporate settings, and social enterprises. This breadth of experience has enabled me to approach problems with both technical depth and strategic insight.
        </p>
        
        <p className="text-muted-foreground">
          Beyond my professional work, I maintain a strong interest in sustainability, social innovation, and the ethical development of AI.
        </p>
      </div>
    </section>
  );
}
