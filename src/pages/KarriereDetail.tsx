import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Clock, Timer, Euro, ArrowRight, ArrowLeft, Mail } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { stellen } from '@/data/karriereStellen';

const KarriereDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = stellen.findIndex((s) => s.slug === slug);
  const stelle = stellen[index];
  const { ref, isVisible } = useScrollAnimation();

  if (!stelle) return <Navigate to="/karriere" replace />;

  const prev = index > 0 ? stellen[index - 1] : undefined;
  const next = index < stellen.length - 1 ? stellen[index + 1] : undefined;

  const contentSections: { title: string; text?: string; items?: string[] }[] = [
    { title: 'Über die Position', text: stelle.beschreibung },
    { title: 'Deine Aufgaben', items: stelle.aufgaben },
    { title: 'Dein Profil', items: stelle.voraussetzungen },
    { title: 'Was wir bieten', items: stelle.benefits },
  ];

  const facts = [
    { icon: MapPin, label: 'Standort', value: stelle.standort },
    { icon: Clock, label: 'Arbeitsmodell', value: stelle.modell },
    ...(stelle.arbeitszeit ? [{ icon: Timer, label: 'Arbeitszeit', value: stelle.arbeitszeit }] : []),
    ...(stelle.stundenlohn ? [{ icon: Euro, label: 'Stundenlohn', value: stelle.stundenlohn }] : []),
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

      {/* Meta chip row */}
      <div className="border-y border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          {facts.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-2 mono-label-muted text-[10px] px-3 py-1.5 border border-border rounded-md bg-background/70"
            >
              <f.icon size={12} className="text-primary" />
              {f.value}
            </span>
          ))}
        </div>
      </div>

      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-[0.5] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Content */}
            <div className="flex-1 min-w-0 space-y-12">
              {contentSections.map((section, i) => (
                <div
                  key={section.title}
                  className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}
                >
                  <div className="flex items-baseline gap-4 pb-4 border-b border-border">
                    <span className="mono-label-muted text-[10px]">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="text-xl font-extrabold tracking-tight text-foreground">{section.title}</h2>
                  </div>

                  {section.text ? (
                    <p className="mt-5 text-muted-foreground leading-relaxed">{section.text}</p>
                  ) : (
                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {section.items?.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-[2px] bg-primary shrink-0 rotate-45" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Prev / Next */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4">
                {prev ? (
                  <Link
                    to={`/karriere/${prev.slug}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="line-clamp-1">{prev.titel}</span>
                  </Link>
                ) : (
                  <Link to="/karriere" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft size={15} />
                    Alle Stellen
                  </Link>
                )}
                {next && (
                  <Link
                    to={`/karriere/${next.slug}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors sm:text-right"
                  >
                    <span className="line-clamp-1">{next.titel}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-[300px] shrink-0">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Apply block */}
                <div className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} relative rounded-2xl bg-ink overflow-hidden`}>
                  <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />
                  <div className="relative p-7">
                    <span className="mono-label text-primary">Bewerbung</span>
                    <h3 className="mt-2 text-lg font-extrabold tracking-tight text-white">Interessiert?</h3>
                    <p className="mt-2 text-sm text-white/60">
                      Kurzes Formular, keine langen Anschreiben.
                    </p>
                    <Link
                      to={`/karriere/bewerbung?stelle=${encodeURIComponent(stelle.titel)}`}
                      className="mt-5 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:scale-[1.02] transition-transform duration-200"
                    >
                      Jetzt bewerben
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Facts */}
                <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border bg-card/60 p-6`}>
                  <span className="mono-label-muted text-[10px]">Fakten</span>
                  <dl className="mt-4 divide-y divide-border">
                    {facts.map((f) => (
                      <div key={f.label} className="flex items-start justify-between gap-4 py-2.5">
                        <dt className="text-xs text-muted-foreground">{f.label}</dt>
                        <dd className="text-xs font-medium text-foreground text-right">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Contact */}
                <Link
                  to="/kontakt"
                  className={`scroll-hidden delay-3 ${isVisible ? 'scroll-visible' : ''} group flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:border-primary/40 hover:bg-card transition-colors`}
                >
                  <Mail size={15} className="text-primary" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Fragen zur Stelle?
                  </span>
                  <ArrowRight size={14} className="ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KarriereDetail;
