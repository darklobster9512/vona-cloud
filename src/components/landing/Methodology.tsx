import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const phases = [
  {
    step: '01',
    title: 'Assessment',
    duration: 'Woche 1–2',
    description: 'Bestandsaufnahme von System, Infrastruktur und Kosten. Ergebnis: dokumentierter Ist-Stand mit Risiken.',
    points: ['Architektur-Analyse', 'Kosten- & Risiko-Check', 'Zielbild'],
  },
  {
    step: '02',
    title: 'Architektur',
    duration: 'Woche 3–4',
    description: 'Zielarchitektur, Infrastructure as Code und Migrationspfad — abgestimmt, bevor gebaut wird.',
    points: ['Zielarchitektur', 'IaC-Blueprint', 'Migrationsplan'],
  },
  {
    step: '03',
    title: 'Build & Betrieb',
    duration: 'laufend',
    description: 'Umsetzung in Iterationen, dann überwachter Dauerbetrieb mit Monitoring, Backups und Reporting.',
    points: ['CI/CD-Pipelines', '24/7 Monitoring', 'Monatliches Reporting'],
  },
];

const Methodology = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mb-16 max-w-2xl scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="mono-label mb-4">03 — Vorgehen</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Drei Phasen,
            <br />
            <span className="text-gradient-blue">klar abgegrenzt.</span>
          </h2>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          <div className="absolute left-0 top-[26px] hidden h-px w-full bg-border md:block" />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {phases.map((p, i) => (
              <div key={p.step} className={`relative scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}>
                {/* Node */}
                <div className="relative z-10 mb-7 flex items-center gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-full border border-primary/25 bg-white px-4 py-3 font-mono text-sm font-bold text-primary shadow-[0_8px_24px_-12px_hsl(217_91%_60%/0.6)]">
                    {p.step}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {p.duration}
                  </span>
                </div>

                <div className="rounded-[1.5rem] border border-border/60 bg-white p-7 hover-lift">
                  <h3 className="text-xl font-extrabold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
