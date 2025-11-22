import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function ConnectSection() {
  const contacts = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      description: 'Profesyonel ağımda benimle bağlantı kurun',
      value: 'linkedin.com/in/meryem-erd',
      href: 'https://www.linkedin.com/in/meryem-erd',
    },
    {
      icon: Github,
      label: 'GitHub',
      description: 'Açık kaynak projelerime ve kodlarıma göz atın',
      value: 'github.com/Meryem-Erdogdu',
      href: 'https://github.com/Meryem-Erdogdu',
    },
  ];

  return (
    <section id="connect" className="mb-16 lg:mb-24 scroll-mt-16" data-testid="section-connect">
      <div className="flex flex-wrap gap-6">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hover-elevate rounded-md p-3"
              data-testid={`link-contact-${contact.label.toLowerCase()}`}
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">
                {contact.value}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
