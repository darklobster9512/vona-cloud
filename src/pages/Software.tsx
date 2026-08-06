import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, CheckCircle2, Globe, Smartphone, Server, BarChart3 } from 'lucide-react';

import reactSvg from '@/assets/tech/react.svg';
import nextjsSvg from '@/assets/tech/nextjs.svg';
import nodejsSvg from '@/assets/tech/nodejs.svg';
import pythonSvg from '@/assets/tech/python.svg';
import postgresqlSvg from '@/assets/tech/postgresql.svg';
import csharpSvg from '@/assets/tech/csharp.svg';
import html5Svg from '@/assets/tech/html5.svg';
import css3Svg from '@/assets/tech/css3.svg';
import phpSvg from '@/assets/tech/php.svg';

const techStack = [
  { name: 'React', icon: reactSvg },
  { name: 'Next.js', icon: nextjsSvg },
  { name: 'Node.js', icon: nodejsSvg },
  { name: 'Python', icon: pythonSvg },
  { name: 'PostgreSQL', icon: postgresqlSvg },
  { name: 'C#', icon: csharpSvg },
  { name: 'HTML5', icon: html5Svg },
  { name: 'CSS3', icon: css3Svg },
  { name: 'PHP', icon: phpSvg },
];

const capabilities = [
  {
    icon: Globe,
    title: 'Web-Applikationen',
    description: 'Moderne, performante Single-Page-Applications und Progressive Web Apps mit React, Next.js und TypeScript.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Skalierbare REST- und GraphQL-APIs mit Node.js, Python oder .NET — inklusive Datenbank-Design und Cloud-Deployment.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Analytics',
    description: 'Echtzeit-Dashboards und Datenvisualisierung für fundierte Geschäftsentscheidungen auf einen Blick.',
  },
  {
    icon: Smartphone,
    title: 'Responsive & Mobile',
    description: 'Jede Anwendung wird mobile-first entwickelt und funktioniert perfekt auf allen Geräten und Bildschirmgrößen.',
  },
];

const projects = [
  {
    title: 'Logistik-Dashboard',
    category: 'Dashboard & Analytics',
    description: 'Echtzeit-Tracking und Optimierung von Lieferketten für ein mittelständisches Logistikunternehmen.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'HR-Management Platform',
    category: 'Web-Applikation',
    description: 'Digitalisierung des gesamten HR-Prozesses — von Bewerbungen über Onboarding bis zur Personalverwaltung.',
    tags: ['Next.js', 'Python', 'Cloud'],
  },
  {
    title: 'Produktionssteuerung',
    category: 'Prozessautomation',
    description: 'Automatisierte Steuerung und Überwachung von Fertigungsprozessen mit IoT-Integration.',
    tags: ['C#', '.NET', 'IoT'],
  },
];

const Software = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <PageHero
        title="Maßgeschneiderte"
        highlight="Software-Lösungen"
        subtitle="Von der Idee bis zum Deployment — wir entwickeln Software, die Ihre Prozesse transformiert und mit Ihrem Unternehmen wächst."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Software' },
        ]}
      />

      {/* Capabilities */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Kompetenzen</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Was wir <span className="text-gradient-blue">entwickeln</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} group rounded-2xl border border-border/60 bg-white p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05] transition-all duration-500`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Technologien</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Unser <span className="text-gradient-blue">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wir setzen auf bewährte, moderne Technologien für maximale Performance und Zukunftssicherheit.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6 scroll-hidden">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-border/60 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Projekte</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Ausgewählte <span className="text-gradient-blue">Referenzen</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="scroll-hidden rounded-2xl border border-border/60 bg-white p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05] transition-all duration-500">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold tracking-tight mt-2 mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Software;
