import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import sarahMeier from '@/assets/team/sarah-meier.jpg';
import michaelFischer from '@/assets/team/michael-fischer.jpg';
import jonasHartmann from '@/assets/team/jonas-hartmann.jpg';
import thomasWeber from '@/assets/team/thomas-weber.jpg';
import lauraSchneider from '@/assets/team/laura-schneider.jpg';
import danielKrause from '@/assets/team/daniel-krause.jpg';
import annaHoffmann from '@/assets/team/anna-hoffmann.jpg';
import markusBauer from '@/assets/team/markus-bauer.jpg';
import juliaWagner from '@/assets/team/julia-wagner.jpg';
import sebastianRichter from '@/assets/team/sebastian-richter.jpg';

const teamMembers = [
  {
    name: 'Ulrich Papst',
    role: 'Geschäftsführer / CEO',
    description: 'Visionär mit über 20 Jahren Erfahrung in der digitalen Transformation und strategischen Unternehmensführung.',
    image: thomasWeber,
  },
  {
    name: 'Thomas Papst',
    role: 'Geschäftsführer / CEO',
    description: 'Führt das Unternehmen gemeinsam mit seinem Vater und treibt Innovation und Wachstum voran.',
    image: danielKrause,
  },
  {
    name: 'Laura Schneider',
    role: 'Head of Software Engineering',
    description: 'Leitet unser Entwicklungsteam mit Leidenschaft für Clean Code und skalierbare Architekturen.',
    image: lauraSchneider,
  },
  {
    name: 'Michael Fischer',
    role: 'Projektleiter',
    description: 'Steuert komplexe Kundenprojekte von der Konzeption bis zum erfolgreichen Go-Live.',
    image: michaelFischer,
  },
  {
    name: 'Julia Wagner',
    role: 'Business Consultant',
    description: 'Verbindet betriebswirtschaftliches Know-how mit technologischem Verständnis für optimale Beratungsergebnisse.',
    image: juliaWagner,
  },
  {
    name: 'Anna Hoffmann',
    role: 'UX/UI Designerin',
    description: 'Gestaltet intuitive Benutzeroberflächen, die Nutzerbedürfnisse in den Mittelpunkt stellen.',
    image: annaHoffmann,
  },
  {
    name: 'Markus Bauer',
    role: 'Data Analyst',
    description: 'Verwandelt komplexe Datensätze in klare Insights und messbare Handlungsempfehlungen.',
    image: markusBauer,
  },
  {
    name: 'Sarah Meier',
    role: 'HR Managerin',
    description: 'Sorgt für ein starkes Team und eine Unternehmenskultur, in der Talente wachsen können.',
    image: sarahMeier,
  },
  {
    name: 'Jonas Hartmann',
    role: 'Recruiter',
    description: 'Findet die besten Köpfe der Branche und begleitet sie auf ihrem Weg zu Efficient Flow.',
    image: jonasHartmann,
  },
  {
    name: 'Sebastian Richter',
    role: 'DevOps Engineer',
    description: 'Automatisiert Deployments und sorgt für reibungslose CI/CD-Pipelines und stabile Systeme.',
    image: sebastianRichter,
  },
];

const Team = () => {
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
        title="Unser"
        highlight="Team"
        subtitle="Die Menschen hinter Efficient Flow — Expert:innen mit Leidenschaft für digitale Exzellenz."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Team' },
        ]}
      />

      <section ref={ref} className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`scroll-hidden delay-${Math.min(i % 4 + 1, 4)} ${isVisible ? 'scroll-visible' : ''} group flex flex-col items-center text-center p-5 rounded-2xl border border-border/60 bg-card hover:shadow-lg hover:shadow-primary/[0.05] hover:border-primary/20 transition-all duration-300`}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-border/40 group-hover:ring-primary/30 transition-all duration-300 mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>
              <h3 className="text-sm font-bold text-foreground leading-tight">{member.name}</h3>
              <p className="text-xs font-semibold text-primary mt-0.5">{member.role}</p>
              <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed line-clamp-3">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Team;
