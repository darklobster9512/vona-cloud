import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import methodologyTeam from '@/assets/landing/methodology-team.jpg';

const phases = [
  {
    step: '01',
    title: 'Analyse & Beratung',
    duration: 'Woche 1–2',
    description: 'Wir sehen uns Abläufe, bestehende Systeme und Anforderungen an. Ergebnis: ein dokumentiertes Zielbild mit Prioritäten.',
    points: ['Prozessaufnahme', 'Systembestand', 'Aufwandsschätzung'],
  },
  {
    step: '02',
    title: 'Konzept & Umsetzung',
    duration: 'Woche 3 bis Go-live',
    description: 'Konzept und Oberflächen werden abgestimmt, danach entwickeln wir in kurzen Iterationen mit regelmäßigen Demos.',
    points: ['Konzept & Prototyp', 'Entwicklung in Sprints', 'Tests & Abnahme'],
  },
  {
    step: '03',
    title: 'Einführung & Betrieb',
    duration: 'laufend',
    description: 'Wir begleiten Einführung und Schulung und übernehmen anschließend Wartung, Updates und Support.',
    points: ['Schulung & Rollout', 'Wartung & Updates', 'Support mit Reaktionszeit'],
  },
];


const Methodology = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mb-16 max-w-2xl scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="mono-label mb-4">04 — Vorgehen</p>
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
                  <div className="flex items-center justify-center rounded-full border border-primary/25 bg-white px-4 py-3 font-mono text-sm font-bold text-primary shadow-[0_8px_24px_-12px_hsl(217_91%_60%/0.6)]">
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
        <figure className="scroll-hidden delay-4 mt-16 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
          <img
            src={methodologyTeam}
            alt="Team bespricht Software-Architektur und Prozessablauf am großen Bildschirm"
            width={1344}
            height={768}
            loading="lazy"
            className="w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default Methodology;
