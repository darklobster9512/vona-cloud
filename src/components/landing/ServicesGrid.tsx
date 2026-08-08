import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Code2, Boxes, LifeBuoy, Compass, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    number: '01',
    headline: 'Softwareentwicklung',
    title: 'Individuelle Anwendungen',
    description:
      'Wir entwickeln Software, die genau Ihren Ablauf abbildet: Fachanwendungen, Web-Portale und Schnittstellen — sauber gebaut, getestet und dokumentiert.',
    features: ['Fachanwendungen', 'Web-Portale', 'Schnittstellen & APIs'],
  },
  {
    icon: Boxes,
    number: '02',
    headline: 'Softwareprodukte',
    title: 'Vertrieb & Einführung',
    description:
      'Eigene Produkte und bewährte Lösungen — mit Lizenzierung, Einrichtung und Schulung Ihrer Mitarbeiter.',
    features: ['Lizenzmodelle', 'Einführung', 'Schulung'],
  },
  {
    icon: LifeBuoy,
    number: '03',
    headline: 'Betrieb & Support',
    title: 'Wartung, Updates & Hilfe',
    description:
      'Wir halten Ihre Software am Laufen: Hosting, Updates, Überwachung und ein Ansprechpartner mit zugesagter Reaktionszeit.',
    features: ['Hosting in der EU', 'Wartung & Updates', 'Support'],
  },
  {
    icon: Compass,
    number: '04',
    headline: 'Beratung',
    title: 'Prozesse, Auswahl & Konzept',
    description:
      'Wir analysieren Abläufe, bewerten bestehende Systeme und sagen offen, was sich lohnt — inklusive Datenschutz und Aufwandsschätzung.',
    features: ['Prozessanalyse', 'Systemauswahl', 'Datenschutz'],
  },
];


/* ── Illustrations ── */

const DevVisual = () => (
  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 font-mono text-[11px] leading-relaxed">
    <div className="mb-3 flex gap-1.5">
      <span className="h-2 w-2 rounded-full bg-primary/30" />
      <span className="h-2 w-2 rounded-full bg-primary/20" />
      <span className="h-2 w-2 rounded-full bg-primary/10" />
    </div>
    {[
      ['release', 'v2.14'],
      ['tests', '318 / 318'],
      ['module', 'Auftrag · Lager · Faktura'],
      ['übergabe', 'inkl. Dokumentation'],
    ].map(([k, v]) => (
      <div key={k} className="flex justify-between border-b border-border/40 py-1.5 last:border-0">
        <span className="text-primary">{k}</span>
        <span className="text-muted-foreground">{v}</span>
      </div>
    ))}
  </div>
);

const ProductVisual = () => (
  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
    <div className="mb-3 flex items-center justify-between">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">module</span>
      <span className="font-mono text-[10px] text-primary">aktiv</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {['Basis', 'Erweiterung', 'Portal', 'Auswertung'].map((m) => (
        <div key={m} className="rounded-lg border border-border bg-white px-2 py-2 text-center text-[10px] font-semibold text-foreground/70">
          {m}
        </div>
      ))}
    </div>
  </div>
);

const SupportVisual = () => (
  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
    <div className="flex items-center gap-2">
      <span className="flex-1 rounded-lg border border-border bg-white px-2 py-2 text-center text-[10px] font-semibold text-muted-foreground">
        Meldung
      </span>
      <svg width="34" height="10" className="shrink-0">
        <line x1="0" y1="5" x2="34" y2="5" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash-flow" />
      </svg>
      <span className="flex-1 rounded-lg bg-gradient-blue px-2 py-2 text-center text-[10px] font-semibold text-primary-foreground">
        Gelöst
      </span>
    </div>
    <div className="mt-4 flex items-baseline justify-between">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">reaktion</span>
      <span className="text-lg font-extrabold text-primary">&lt; 4 h</span>
    </div>
  </div>
);

const ConsultVisual = () => (
  <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
    <div className="grid grid-cols-3 gap-2">
      {['Analyse', 'DSGVO', 'Konzept'].map((t) => (
        <div key={t} className="rounded-lg border border-primary/20 bg-primary/[0.06] py-3 text-center font-mono text-[10px] font-bold text-primary">
          {t}
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-baseline justify-between">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">aufwand</span>
      <span className="text-lg font-extrabold text-primary">fest kalkuliert</span>
    </div>
  </div>
);

const visuals = [DevVisual, ProductVisual, SupportVisual, ConsultVisual];

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="leistungen" ref={ref} className="relative overflow-hidden bg-muted/25 py-24 md:py-32">
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className={`mb-14 flex flex-col gap-6 scroll-hidden md:flex-row md:items-end md:justify-between ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="max-w-xl">
            <p className="mono-label mb-4">02 — Leistungen</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Vier Bausteine,
              <br />
              <span className="text-gradient-blue">ein Betriebsmodell.</span>
            </h2>
          </div>
          <Link
            to="/leistungen"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/40 md:self-auto"
          >
            Alle Leistungen
            <ArrowUpRight size={16} className="text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid gap-5 md:grid-cols-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const Visual = visuals[i];
            const featured = i === 0;
            const span = ['md:col-span-4', 'md:col-span-2', 'md:col-span-3', 'md:col-span-3'][i];
            return (
              <article
                key={s.number}
                className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} card-flat card-flat-hover group relative overflow-hidden p-7 md:p-8 ${span}`}

              >
                <span className="pointer-events-none absolute right-6 top-6 font-mono text-[11px] tracking-widest text-muted-foreground/60">
                  {s.number}
                </span>

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary transition-colors group-hover:bg-gradient-blue group-hover:text-primary-foreground">
                  <Icon size={22} />
                </div>

                <p className="mono-label-muted mb-2">{s.title}</p>
                <h3 className={`font-extrabold tracking-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                  {s.headline}
                </h3>
                <p className={`mt-3 leading-relaxed text-muted-foreground ${featured ? 'text-base max-w-lg' : 'text-sm'}`}>
                  {s.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="rounded-full border border-border/70 px-3 py-1 text-[11px] font-medium text-foreground/70">
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={`mt-7 ${featured ? 'max-w-md' : ''}`}>
                  <Visual />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
