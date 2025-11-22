import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CertificatesSection() {
  const certificates = [
    {
      title: 'AI Skills 4 Women Program',
      issuer: 'Microsoft',
      date: 'May 2025',
      skills: ['AI', 'Machine Learning', 'Women in Tech'],
    },
    {
      title: 'Bank of America Institute Women\'s Entrepreneurship Program',
      issuer: 'Bank of America',
      date: 'Mar 2025',
      skills: ['Entrepreneurship', 'Business Development', 'Leadership'],
    },
    {
      title: 'Hugging Face Agents Course',
      issuer: 'Hugging Face',
      date: 'Feb 2025',
      skills: ['AI Agents', 'NLP', 'Transformers'],
    },
    {
      title: '21st Century Competencies Training Program',
      issuer: 'Yetkin Gençler',
      date: 'Jan 2025',
      skills: ['Youth Leadership', 'Professional Development'],
    },
    {
      title: 'NASA International Space Apps Challenge Galactic Team Member',
      issuer: 'NASA - National Aeronautics and Space Administration',
      date: 'Dec 2024',
      skills: ['Space Technology', 'Hackathon', 'Teamwork'],
    },
    {
      title: 'Harvard - Aspire Leaders Program 2024 (Aspire Alumni)',
      issuer: 'Aspire Institute',
      date: 'Nov 2024',
      skills: ['Leadership', 'Harvard', 'Management'],
    },
    {
      title: 'Climate Change AI Summer School \'24',
      issuer: 'Climate Change AI',
      date: 'Sep 2024',
      skills: ['Climate Change', 'AI for Good', 'Sustainability'],
    },
    {
      title: 'AgileLeap Lab: Intermediate Coding Workshop',
      issuer: 'Techcareer.net',
      date: 'May 2024',
      skills: ['Coding', 'Software Development', 'Agile'],
    },
    {
      title: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company',
      date: 'Nov 2023',
      skills: ['Consulting', 'Strategy', 'Business Skills'],
    },
  ];

  return (
    <section id="certificates" className="mb-12 sm:mb-16 lg:mb-36 scroll-mt-16" data-testid="section-certificates">
      <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 mb-4 w-screen bg-background/90 px-4 sm:px-6 py-4 sm:py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Certificates
        </h2>
      </div>

      <h2 className="text-base font-bold tracking-widest text-foreground mb-6 hidden lg:block">
        <span className="text-primary mr-2">07.</span>
        CERTIFICATES & ACHIEVEMENTS
      </h2>

      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group relative rounded-md bg-card border border-card-border p-5 hover-elevate"
            data-testid="card-certificate"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-semibold text-primary whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 mb-3">
                  <p className="text-sm font-medium text-foreground">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs cursor-pointer hover-elevate hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
