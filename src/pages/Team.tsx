import { useEffect } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

import seitz from '@/assets/team/seitz.png';
import lindner from '@/assets/team/lindner.png';
import winterfeld from '@/assets/team/winterfeld.png';
import ademi from '@/assets/team/ademi.png';
import bergmann from '@/assets/team/bergmann.png';
import reuter from '@/assets/team/reuter.png';
import sorin from '@/assets/team/sorin.png';
import sanders from '@/assets/team/sanders.png';
import fuchs from '@/assets/team/fuchs.png';
import hagenauer from '@/assets/team/hagenauer.png';


const teamMembers = [
  {
    name: 'Klaus Völler',
    role: 'Geschäftsführer',
    description:
      'Verantwortet Strategie, Produktportfolio und Vertrieb — und bleibt dabei nah an Kunden und Technik.',
    image: seitz,
  },
  {
    name: 'Andreas Lindner',
    role: 'Head of Software Engineering',
    description:
      'Führt die Entwicklung: Architektur, Code-Qualität und Releases, die verlässlich in Betrieb gehen.',
    image: lindner,
  },
  {
    name: 'Michael Winterfeld',
    role: 'Projektleiter',
    description:
      'Steuert Kundenprojekte von der Anforderung bis zum Go-Live — Termine, Budget und Umfang im Griff.',
    image: winterfeld,
  },
  {
    name: 'Kerim Ademi',
    role: 'Senior Software Engineer',
    description:
      'Entwickelt Backends, Schnittstellen und Integrationen für unsere Softwareprodukte.',
    image: ademi,
  },
  {
    name: 'Mia Bergmann',
    role: 'UX/UI Design',
    description:
      'Gestaltet Oberflächen, die im Arbeitsalltag funktionieren — klar, schnell, ohne Schulungsbedarf.',
    image: bergmann,
  },
  {
    name: 'Nadine Reuter',
    role: 'Requirements Engineering',
    description:
      'Übersetzt Fachprozesse in präzise Anforderungen und sorgt für ein gemeinsames Verständnis.',
    image: reuter,
  },
  {
    name: 'Elena Sorin',
    role: 'Business Consultant',
    description:
      'Berät bei Prozessen, Auswahl und Einführung von Software — mit Blick auf messbaren Nutzen.',
    image: sorin,
  },
  {
    name: 'Claudia Sanders',
    role: 'Head of Operations & Support',
    description:
      'Verantwortet Betrieb, Wartung und Support unserer Lösungen inklusive Service-Levels.',
    image: sanders,
  },
  {
    name: 'Lena Fuchs',
    role: 'HR & People',
    description:
      'Baut Team und Kultur — von Onboarding bis Weiterentwicklung.',
    image: fuchs,
  },
  {
    name: 'Jonas Hagenauer',
    role: 'Recruiter',
    description:
      'Findet passende Köpfe und begleitet Bewerberinnen und Bewerber durch den gesamten Prozess.',
    image: hagenauer,
  },
];

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [lead, ...rest] = teamMembers;

  return (
    <>
      <PageHero
        title="Unser"
        highlight="Team"
        subtitle="Die Menschen hinter Völler IT Solutions — Entwicklung, Betrieb, Vertrieb und Beratung an einem Ort."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Team' }]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-70 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          {/* Section marker */}
          <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
            <span className="mono-label">Team / {teamMembers.length} Personen</span>
            <span className="mono-label-muted hidden sm:block">Marburg</span>
          </div>

          {/* Lead / Geschäftsführung */}
          <div className="scroll-hidden mt-8 rounded-[1.75rem] bg-ink p-7 sm:p-9 relative overflow-hidden">
            <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden ring-1 ring-white/20">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                  00 / {lead.role}
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">{lead.name}</h2>
                <p className="mt-2 text-sm text-white/60 max-w-xl leading-relaxed">{lead.description}</p>
              </div>
              <a
                href="mailto:kontakt@voeller-it.com"
                className="sm:ml-auto inline-flex items-center gap-2 shrink-0 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:border-primary/60 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Kontakt
              </a>
            </div>
          </div>

          {/* Technical rows */}
          <div className="mt-6 border-t border-border">
            {rest.map((member, i) => (
              <div
                key={member.name}
                className={`scroll-hidden delay-${Math.min((i % 4) + 1, 4)} group grid grid-cols-[auto_1fr] md:grid-cols-[3.5rem_auto_1fr_1.2fr] items-start md:items-center gap-x-5 gap-y-3 border-b border-border py-6 transition-colors hover:bg-primary/[0.03]`}
              >
                <span className="hidden md:block font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-foreground tracking-tight">{member.name}</h3>
                  <span className="mono-label block mt-1">{member.role}</span>
                </div>

                <p className="col-span-2 md:col-span-1 text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Join us */}
          <div className="scroll-hidden mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card px-6 py-5">
            <div>
              <span className="mono-label-muted">Offene Positionen</span>
              <p className="mt-1 text-sm text-foreground font-medium">
                Wir suchen Menschen, die Software bauen, betreiben und erklären können.
              </p>
            </div>
            <Link
              to="/karriere"
              className="inline-flex items-center gap-2 shrink-0 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Karriere ansehen
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Team;
