import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutDashboard, Workflow, Plug, Boxes } from 'lucide-react';

const tabs = [
  {
    id: 'dashboards',
    icon: LayoutDashboard,
    label: 'Dashboards',
    title: 'Kennzahlen in Echtzeit',
    text: 'Auswertungen, die direkt aus dem laufenden System kommen — ohne Excel-Export und ohne Wartezeit.',
  },
  {
    id: 'workflows',
    icon: Workflow,
    label: 'Workflows',
    title: 'Prozesse automatisiert',
    text: 'Freigaben, Benachrichtigungen und wiederkehrende Aufgaben laufen regelbasiert und nachvollziehbar.',
  },
  {
    id: 'apis',
    icon: Plug,
    label: 'Integrationen',
    title: 'Systeme verbunden',
    text: 'ERP, CRM und Drittanbieter über stabile APIs angebunden — mit Retry, Logging und Monitoring.',
  },
  {
    id: 'infra',
    icon: Boxes,
    label: 'Cloud-native',
    title: 'Skaliert mit der Last',
    text: 'Containerisiert, horizontal skalierbar und mit Zero-Downtime-Deploys ausgeliefert.',
  },
];

const panels: Record<string, JSX.Element> = {
  dashboards: (
    <div className="grid grid-cols-2 gap-3">
      {[
        { k: 'MRR', v: '€ 184.200', d: '+8,4 %' },
        { k: 'Aktive Nutzer', v: '12.480', d: '+3,1 %' },
        { k: 'Fehlerrate', v: '0,02 %', d: '−0,01' },
        { k: 'Ø Antwortzeit', v: '48 ms', d: '−12 ms' },
      ].map((c) => (
        <div key={c.k} className="rounded-xl border border-border/60 bg-white p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.k}</p>
          <p className="mt-1.5 text-lg font-extrabold tracking-tight">{c.v}</p>
          <p className="mt-0.5 text-[11px] font-semibold text-primary">{c.d}</p>
        </div>
      ))}
    </div>
  ),
  workflows: (
    <div className="space-y-2.5">
      {['Antrag eingegangen', 'Automatische Prüfung', 'Freigabe Fachbereich', 'Buchung im ERP', 'Benachrichtigung'].map(
        (s, i) => (
          <div key={s} className="flex items-center gap-3 rounded-xl border border-border/60 bg-white px-4 py-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-[10px] font-bold text-primary">
              {i + 1}
            </span>
            <span className="flex-1 text-xs font-semibold">{s}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          </div>
        ),
      )}
    </div>
  ),
  apis: (
    <div className="space-y-2.5 font-mono text-[11px]">
      {[
        ['POST', '/v1/orders', '201'],
        ['GET', '/v1/customers', '200'],
        ['PUT', '/v1/invoices/8842', '200'],
        ['GET', '/v1/health', '200'],
      ].map(([m, p, s]) => (
        <div key={p} className="flex items-center gap-3 rounded-xl border border-border/60 bg-white px-4 py-3">
          <span className="w-12 shrink-0 font-bold text-primary">{m}</span>
          <span className="flex-1 truncate text-muted-foreground">{p}</span>
          <span className="rounded-full bg-primary/[0.08] px-2 py-0.5 font-bold text-primary">{s}</span>
        </div>
      ))}
    </div>
  ),
  infra: (
    <div className="space-y-3">
      {[
        { k: 'api', pods: 6 },
        { k: 'worker', pods: 4 },
        { k: 'scheduler', pods: 2 },
      ].map((r) => (
        <div key={r.k} className="rounded-xl border border-border/60 bg-white px-4 py-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold text-primary">{r.k}</span>
            <span className="font-mono text-[10px] text-muted-foreground">{r.pods} pods</span>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: r.pods }).map((_, i) => (
              <span
                key={i}
                className="h-5 flex-1 rounded bg-gradient-blue opacity-80 animate-node-pulse"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

const SoftwareShowcase = () => {
  const [active, setActive] = useState(tabs[0].id);
  const { ref, isVisible } = useScrollAnimation();
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="software" ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mb-14 max-w-2xl scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="mono-label mb-4">03½ — Software</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Individuelle Software,
            <br />
            <span className="text-gradient-blue">cloud-native gedacht.</span>
          </h2>
        </div>

        <div className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} overflow-hidden rounded-[2rem] border border-border/60 bg-muted/25`}>
          {/* Tab rail */}
          <div className="flex overflow-x-auto border-b border-border/60 bg-white/60 backdrop-blur">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`relative flex shrink-0 items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon size={16} />
                  {t.label}
                  {isActive && <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-gradient-blue" />}
                </button>
              );
            })}
          </div>

          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{current.title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{current.text}</p>
              <Link
                to="/software"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Software ansehen
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-primary/[0.06] blur-[50px]" />
              <div className="rounded-2xl border border-border/60 bg-white/70 p-5 backdrop-blur">{panels[active]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
