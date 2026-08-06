import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Lightbulb, Monitor, Code2, Cog, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    number: '01',
    total: '04',
    title: 'Strategische Prozessberatung',
    headline: 'Consulting',
    description:
      'Wir analysieren Ihre bestehenden Abläufe, identifizieren Engpässe und entwickeln maßgeschneiderte Strategien für nachhaltige Effizienzsteigerung — datenbasiert und transparent.',
    features: ['Prozessanalyse', 'Potenzialermittlung', 'Roadmap-Entwicklung'],
  },
  {
    icon: Monitor,
    number: '02',
    total: '04',
    title: 'Von Legacy zu Modern',
    headline: 'Digitalisierung',
    description:
      'Transformation Ihrer analogen und veralteten Systeme in eine zukunftsfähige digitale Infrastruktur. Keine halben Sachen — vollständige Modernisierung.',
    features: ['System-Migration', 'Cloud-Transformation', 'Digitale Workflows'],
  },
  {
    icon: Code2,
    number: '03',
    total: '04',
    title: 'Maßgeschneiderte Lösungen',
    headline: 'Software-Entwicklung',
    description:
      'Individuelle Softwarelösungen, die exakt auf Ihre Geschäftsprozesse zugeschnitten sind — von Konzept bis Deployment, mit erstklassiger UX.',
    features: ['Web-Applikationen', 'API-Entwicklung', 'Dashboard & Analytics'],
  },
  {
    icon: Cog,
    number: '04',
    total: '04',
    title: 'Systematische Verbesserung',
    headline: 'Prozessoptimierung',
    description:
      'Datengestützte Analyse und Optimierung Ihrer Workflows für messbare Ergebnisse und weniger Verschwendung — kontinuierlich und nachhaltig.',
    features: ['Workflow-Automation', 'KPI-Tracking', 'Lean Management'],
  },
];

/* ── Individual mock visuals per service ── */

const ConsultingVisual = () => (
  <div className="w-full max-w-xs space-y-4">
    {/* Mini flowchart */}
    <div className="flex items-center gap-3">
      <div className="w-16 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">Analyse</div>
      <div className="w-6 h-0.5 bg-primary/30" />
      <div className="w-16 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center text-[10px] font-bold text-primary/80">Strategie</div>
      <div className="w-6 h-0.5 bg-primary/30" />
      <div className="w-16 h-10 rounded-lg bg-primary/[0.07] border border-primary/10 flex items-center justify-center text-[10px] font-bold text-primary/60">Roadmap</div>
    </div>
    {/* Metrics */}
    {[
      { label: 'Engpässe identifiziert', value: '12', bar: 85 },
      { label: 'Optimierungspotenzial', value: '340h/Jahr', bar: 72 },
      { label: 'ROI-Prognose', value: '+280%', bar: 94 },
    ].map((m) => (
      <div key={m.label} className="p-3 rounded-xl bg-white border border-border/40">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-medium text-muted-foreground">{m.label}</span>
          <span className="text-xs font-bold text-primary">{m.value}</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary/40" style={{ width: `${m.bar}%` }} />
        </div>
      </div>
    ))}
  </div>
);

const DigitalisierungVisual = () => (
  <div className="w-full max-w-xs space-y-3">
    {/* Before / After */}
    <div className="grid grid-cols-2 gap-3">
      <div className="p-3 rounded-xl bg-destructive/[0.04] border border-destructive/10">
        <p className="text-[9px] font-bold text-destructive/60 uppercase tracking-wider mb-2">Vorher</p>
        <div className="space-y-1.5">
          <div className="h-2 rounded bg-destructive/10 w-full" />
          <div className="h-2 rounded bg-destructive/10 w-3/4" />
          <div className="h-2 rounded bg-destructive/10 w-1/2" />
        </div>
        <p className="text-[10px] font-bold text-destructive/50 mt-2">5 Systeme · 23 Schritte</p>
      </div>
      <div className="p-3 rounded-xl bg-primary/[0.04] border border-primary/15">
        <p className="text-[9px] font-bold text-primary/70 uppercase tracking-wider mb-2">Nachher</p>
        <div className="space-y-1.5">
          <div className="h-2 rounded bg-primary/20 w-full" />
          <div className="h-2 rounded bg-primary/15 w-2/3" />
        </div>
        <p className="text-[10px] font-bold text-primary mt-2">1 System · 4 Schritte</p>
      </div>
    </div>
    {/* Migration progress */}
    <div className="p-3 rounded-xl bg-white border border-border/40">
      <div className="flex justify-between mb-1.5">
        <span className="text-[10px] font-medium text-muted-foreground">Migration</span>
        <span className="text-[10px] font-bold text-primary">78%</span>
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-blue w-[78%]" />
      </div>
    </div>
    <div className="p-3 rounded-xl bg-white border border-border/40 flex items-center gap-2">
      <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-[10px] text-primary">☁</div>
      <span className="text-[10px] font-medium text-muted-foreground">Cloud-Infrastruktur aktiv</span>
      <span className="ml-auto text-[10px] font-bold text-[hsl(142_71%_35%)]">Live</span>
    </div>
  </div>
);

const SoftwareVisual = () => (
  <div className="w-full max-w-xs space-y-3">
    {/* Code snippet */}
    <div className="p-3 rounded-xl bg-[hsl(220_15%_13%)] border border-border/20 font-mono text-[10px] leading-relaxed">
      <div><span className="text-[hsl(207_82%_66%)]">const</span> <span className="text-[hsl(187_47%_55%)]">workflow</span> = <span className="text-[hsl(207_82%_66%)]">await</span></div>
      <div className="pl-3"><span className="text-[hsl(187_47%_55%)]">optimize</span>(<span className="text-[hsl(29_54%_61%)]">'process_v2'</span>);</div>
      <div className="mt-1"><span className="text-[hsl(95_38%_62%)]">// Effizienz: +42% ✓</span></div>
    </div>
    {/* Mini dashboard */}
    <div className="grid grid-cols-2 gap-2">
      <div className="p-3 rounded-xl bg-white border border-border/40 text-center">
        <p className="text-lg font-bold text-primary">98.9%</p>
        <p className="text-[9px] text-muted-foreground">Uptime</p>
      </div>
      <div className="p-3 rounded-xl bg-white border border-border/40 text-center">
        <p className="text-lg font-bold text-[hsl(142_71%_35%)]">42ms</p>
        <p className="text-[9px] text-muted-foreground">Latenz</p>
      </div>
    </div>
    <div className="p-3 rounded-xl bg-white border border-border/40">
      <p className="text-[10px] font-medium text-muted-foreground mb-2">API Requests / Tag</p>
      <div className="flex items-end gap-1 h-10">
        {[30, 50, 40, 70, 55, 85, 65, 90, 75, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-primary/30" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </div>
);

const OptimierungVisual = () => (
  <div className="w-full max-w-xs space-y-3">
    {/* KPI Cards */}
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: 'Zykluszeit', value: '-38%', color: 'text-[hsl(142_71%_35%)]' },
        { label: 'Fehlerrate', value: '-62%', color: 'text-primary' },
        { label: 'Durchsatz', value: '+45%', color: 'text-[hsl(270_60%_50%)]' },
      ].map((kpi) => (
        <div key={kpi.label} className="p-2.5 rounded-xl bg-white border border-border/40 text-center">
          <p className={`text-sm font-bold ${kpi.color}`}>{kpi.value}</p>
          <p className="text-[8px] text-muted-foreground mt-0.5">{kpi.label}</p>
        </div>
      ))}
    </div>
    {/* Workflow steps */}
    {[
      { step: 'Datenerfassung', status: 'Automatisiert', done: true },
      { step: 'Qualitätsprüfung', status: 'Automatisiert', done: true },
      { step: 'Berichterstellung', status: 'In Optimierung', done: false },
    ].map((item) => (
      <div key={item.step} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border/40">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
          item.done ? 'bg-[hsl(142_71%_45%/0.15)] text-[hsl(142_71%_35%)]' : 'bg-muted text-muted-foreground'
        }`}>
          {item.done ? '✓' : '◔'}
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-medium text-foreground">{item.step}</p>
        </div>
        <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
          item.done ? 'bg-[hsl(142_71%_45%/0.1)] text-[hsl(142_71%_35%)]' : 'bg-muted text-muted-foreground'
        }`}>
          {item.status}
        </span>
      </div>
    ))}
  </div>
);

const serviceVisuals = [ConsultingVisual, DigitalisierungVisual, SoftwareVisual, OptimierungVisual];

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="leistungen" ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Leistungen</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Vier Säulen. <span className="text-gradient-blue">Ein Ziel.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Maximale Effizienz durch ganzheitliche Beratung und moderne Technologie.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const Visual = serviceVisuals[i];
            return (
              <div
                key={service.number}
                className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} group relative rounded-2xl border border-border/60 bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05] transition-all duration-500 overflow-hidden`}
              >
                <div className="grid md:grid-cols-[1fr_1fr] gap-0">
                  {/* Text side */}
                  <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground tracking-wider">
                        {service.number}/{service.total}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{service.title}</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">{service.headline}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link to="/kontakt" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline group/link">
                      Mehr erfahren
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual side - unique per service */}
                  <div className="hidden md:flex items-center justify-center p-8 bg-muted/30 border-l border-border/40">
                    <Visual />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
