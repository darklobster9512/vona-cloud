import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { value: '99,9 %', label: 'Uptime im Betrieb', sub: 'überwacht 24/7' },
  { value: '120+', label: 'Cloud-Services', sub: 'in Produktion' },
  { value: '34 %', label: 'Ø Kostenersparnis', sub: 'nach Optimierung' },
  { value: '100 %', label: 'EU-Hosting', sub: 'DSGVO-konform' },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-20 md:py-24">
      <div className="absolute inset-0 bg-blueprint-light opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className={`mb-14 flex flex-col gap-3 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
            05 — Betrieb in Zahlen
          </span>
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-white md:text-4xl">
            Kennzahlen, die wir messen — nicht behaupten.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} border-t border-white/15 pt-6`}
            >
              <p className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">{s.value}</p>
              <p className="mt-3 text-sm font-semibold text-white/85">{s.label}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
