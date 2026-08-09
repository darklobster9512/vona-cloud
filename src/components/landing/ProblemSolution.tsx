import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, Check, ArrowDown } from 'lucide-react';
import workspaceSolution from '@/assets/landing/workspace-solution.jpg';

const before = [
  'Excel-Listen als heimliches Hauptsystem',
  'Insellösungen, die nicht miteinander reden',
  'Software läuft, aber niemand pflegt sie',
  'Bei Störungen kein klarer Ansprechpartner',
  'Wissen steckt in einzelnen Köpfen',
];

const after = [
  'Eine Anwendung, die den Prozess abbildet',
  'Systeme über Schnittstellen verbunden',
  'Wartung, Updates und Weiterentwicklung fest geregelt',
  'Fester Ansprechpartner mit zugesagter Reaktionszeit',
  'Dokumentation, die im Haus bleibt',
];


const ProblemSolution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`mb-16 max-w-2xl scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="mono-label mb-4">01 — Ausgangspunkt</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Von gewachsenen Lösungen
            <br />
            <span className="text-gradient-blue">zu verlässlicher Software.</span>
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 md:gap-0">
          {/* Center axis */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-sm md:flex">
            <ArrowDown size={16} className="-rotate-90 text-primary" />
          </div>

          {/* Before */}
          <div className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} md:pr-14`}>
            <p className="mono-label-muted mb-6">Vorher</p>
            <ul className="space-y-3">
              {before.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 px-5 py-4 text-sm text-muted-foreground"
                >
                  <X size={16} className="mt-0.5 shrink-0 text-destructive/60" />
                  <span className="line-through decoration-destructive/30">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} md:pl-14`}>
            <p className="mono-label mb-6">Mit VONA</p>
            <ul className="space-y-3">
              {after.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/[0.05] px-5 py-4 text-sm font-medium text-foreground"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
