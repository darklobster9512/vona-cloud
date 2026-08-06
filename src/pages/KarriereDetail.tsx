import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Clock, Timer, Euro, ArrowRight, CheckCircle2, Mail } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { stellen } from '@/data/karriereStellen';

const KarriereDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const stelle = stellen.find((s) => s.slug === slug);
  const { ref, isVisible } = useScrollAnimation();

  if (!stelle) return <Navigate to="/karriere" replace />;

  const contentSections = [
    { title: 'Deine Aufgaben', items: stelle.aufgaben },
    { title: 'Dein Profil', items: stelle.voraussetzungen },
    { title: 'Was wir bieten', items: stelle.benefits },
  ];

  return (
    <>

      <PageHero
        title={stelle.titel}
        subtitle={stelle.kurzbeschreibung}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere', href: '/karriere' },
          { label: stelle.titel },
        ]}
      />

      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column — Content */}
            <div className="flex-1 space-y-6">
              {/* About */}
              <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border bg-card p-8`}>
                <h2 className="text-lg font-bold text-foreground mb-4">Über die Position</h2>
                <p className="text-muted-foreground leading-relaxed">{stelle.beschreibung}</p>
              </div>

              {/* Sections */}
              {contentSections.map((section, i) => (
                <div
                  key={section.title}
                  className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border bg-card p-8`}
                >
                  <h2 className="text-lg font-bold text-foreground mb-5">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right column — Sticky sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* CTA */}
                <div className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border bg-card p-8`}>
                  <h3 className="text-lg font-bold text-foreground mb-2">Interessiert?</h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Bewirb dich jetzt und werde Teil unseres Teams.
                  </p>
                  <Link
                    to={`/karriere/bewerbung?stelle=${encodeURIComponent(stelle.titel)}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-200"
                  >
                    Jetzt bewerben
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Meta */}
                <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border bg-card p-8 space-y-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Standort</p>
                      <p className="text-sm font-medium text-foreground">{stelle.standort}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Arbeitsmodell</p>
                      <p className="text-sm font-medium text-foreground">{stelle.modell}</p>
                    </div>
                  </div>
                  {stelle.arbeitszeit && (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Timer size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Arbeitszeit</p>
                        <p className="text-sm font-medium text-foreground">{stelle.arbeitszeit}</p>
                      </div>
                    </div>
                  )}
                  {stelle.stundenlohn && (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Euro size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Stundenlohn</p>
                        <p className="text-sm font-medium text-foreground">{stelle.stundenlohn}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact */}
                <div className={`scroll-hidden delay-3 ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border bg-card p-8`}>
                  <h3 className="text-lg font-bold text-foreground mb-2">Fragen zur Stelle?</h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Wir helfen dir gerne weiter.
                  </p>
                  <Link
                    to="/kontakt"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-accent transition-colors duration-200"
                  >
                    <Mail size={16} />
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KarriereDetail;
