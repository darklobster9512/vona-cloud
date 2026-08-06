import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, LayoutDashboard, GitBranch, BarChart3, FolderKanban, Settings, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'prozesse', label: 'Prozesse', icon: GitBranch },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'projekte', label: 'Projekte', icon: FolderKanban },
  { id: 'einstellungen', label: 'Einstellungen', icon: Settings },
];

const tabContent: Record<string, {
  kpis?: { label: string; value: string; color: string }[];
  content: React.ReactNode;
}> = {
  dashboard: {
    kpis: [
      { label: 'Effizienz', value: '+42%', color: 'text-[hsl(142_71%_35%)]' },
      { label: 'Prozesse', value: '128', color: 'text-primary' },
      { label: 'Einsparung', value: '€340k', color: 'text-[hsl(270_60%_50%)]' },
    ],
    content: (
      <div className="flex-1 rounded-xl border border-border/40 bg-background p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Monatsübersicht</div>
          <div className="flex gap-1.5">
            <div className="h-5 px-2 rounded-md bg-muted text-[9px] flex items-center text-muted-foreground">Woche</div>
            <div className="h-5 px-2 rounded-md bg-primary/10 text-[9px] flex items-center text-primary font-medium">Monat</div>
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-24">
          {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 92].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-gradient-blue opacity-60 transition-all duration-300" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  prozesse: {
    kpis: [
      { label: 'Aktiv', value: '24', color: 'text-primary' },
      { label: 'Abgeschlossen', value: '89', color: 'text-[hsl(142_71%_35%)]' },
      { label: 'Ausstehend', value: '15', color: 'text-[hsl(45_93%_47%)]' },
    ],
    content: (
      <div className="flex-1 rounded-xl border border-border/40 bg-background p-3 flex flex-col gap-2">
        {[
          { name: 'Onboarding-Flow', status: 'Aktiv', icon: Clock, statusColor: 'text-primary bg-primary/10' },
          { name: 'Rechnungsfreigabe', status: 'Fertig', icon: CheckCircle2, statusColor: 'text-[hsl(142_71%_35%)] bg-[hsl(142_71%_35%/0.1)]' },
          { name: 'Lagerverwaltung', status: 'Aktiv', icon: Clock, statusColor: 'text-primary bg-primary/10' },
          { name: 'Support-Tickets', status: 'Review', icon: AlertCircle, statusColor: 'text-[hsl(45_93%_47%)] bg-[hsl(45_93%_47%/0.1)]' },
        ].map((p) => (
          <div key={p.name} className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-muted/40">
            <div className="flex items-center gap-2">
              <p.icon size={12} className="text-muted-foreground" />
              <span className="text-[11px] font-medium text-foreground">{p.name}</span>
            </div>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${p.statusColor}`}>{p.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  analytics: {
    kpis: [
      { label: 'Besucher', value: '12.4k', color: 'text-primary' },
      { label: 'Conversion', value: '3.2%', color: 'text-[hsl(142_71%_35%)]' },
      { label: 'Umsatz', value: '€1.2M', color: 'text-[hsl(270_60%_50%)]' },
    ],
    content: (
      <div className="flex-1 rounded-xl border border-border/40 bg-background p-3">
        <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-3">Besuchertrend</div>
        <svg viewBox="0 0 300 100" className="w-full h-24" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,80 L25,65 L50,70 L75,45 L100,50 L125,30 L150,35 L175,20 L200,25 L225,15 L250,18 L275,10 L300,12 L300,100 L0,100Z" fill="url(#lineGrad)" />
          <polyline points="0,80 25,65 50,70 75,45 100,50 125,30 150,35 175,20 200,25 225,15 250,18 275,10 300,12" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
  },
  projekte: {
    kpis: [
      { label: 'Laufend', value: '8', color: 'text-primary' },
      { label: 'Geplant', value: '5', color: 'text-[hsl(45_93%_47%)]' },
      { label: 'Fertig', value: '34', color: 'text-[hsl(142_71%_35%)]' },
    ],
    content: (
      <div className="flex-1 grid grid-cols-2 gap-2">
        {[
          { name: 'Website Relaunch', progress: 75 },
          { name: 'CRM Integration', progress: 40 },
          { name: 'App Entwicklung', progress: 90 },
          { name: 'API Migration', progress: 20 },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border border-border/40 bg-background p-2.5 flex flex-col justify-between">
            <span className="text-[10px] font-semibold text-foreground">{p.name}</span>
            <div className="mt-2">
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-gradient-blue transition-all duration-500" style={{ width: `${p.progress}%` }} />
              </div>
              <span className="text-[9px] text-muted-foreground mt-1 block">{p.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  einstellungen: {
    content: (
      <div className="flex-1 rounded-xl border border-border/40 bg-background p-3 flex flex-col gap-3 col-span-full">
        {[
          { label: 'E-Mail Benachrichtigungen', on: true },
          { label: 'Zwei-Faktor-Authentifizierung', on: false },
          { label: 'Automatische Reports', on: true },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between px-2 py-1.5">
            <span className="text-[11px] font-medium text-foreground">{s.label}</span>
            <div className={`w-8 h-4 rounded-full flex items-center px-0.5 transition-colors ${s.on ? 'bg-primary justify-end' : 'bg-muted justify-start'}`}>
              <div className="w-3 h-3 rounded-full bg-background shadow-sm" />
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-2 mt-1">
          <div className="h-8 rounded-lg border border-border/50 bg-muted/30 flex items-center px-3">
            <span className="text-[10px] text-muted-foreground">team@unternehmen.de</span>
          </div>
          <div className="h-8 rounded-lg border border-border/50 bg-muted/30 flex items-center px-3">
            <span className="text-[10px] text-muted-foreground">••••••••••••</span>
          </div>
        </div>
      </div>
    ),
  },
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const current = tabContent[activeTab];

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-16 lg:pt-0 lg:min-h-[calc(100vh-140px)] lg:pb-0 overflow-hidden hero-gradient">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[100px] animate-orb" />
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-[hsl(199_89%_48%/0.06)] blur-[100px] animate-orb-delayed" />
        <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[80px] animate-orb" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text content */}
        <div className="text-left">
          <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/[0.06] backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary tracking-wide">Beratung & Software für 2026</span>
          </div>

          <h1 className="hero-animate hero-animate-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.08] mb-6">
            Wir digitalisieren,{' '}
            <span className="text-gradient-blue">was Sie bremst.</span>
          </h1>

          <p className="hero-animate hero-animate-3 text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Wir beraten Unternehmen in Effizienzsteigerung, Digitalisierung und
            Prozessoptimierung — und entwickeln die Software, die Ihre Prozesse
            in echten Wettbewerbsvorteil verwandelt.
          </p>

          <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2.5 px-10 h-14 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.03] transition-all duration-200"
            >
              Projekt starten
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center justify-center gap-2 px-10 h-14 rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground font-semibold text-base hover:bg-background hover:border-primary/40 transition-all duration-200"
            >
              Leistungen entdecken
              <ChevronRight size={18} className="text-muted-foreground" />
            </Link>
          </div>
        </div>

        {/* Right: Interactive Dashboard Mockup */}
        <div className="hero-animate hero-animate-5 relative">
          <div className="absolute -inset-10 bg-primary/[0.06] blur-[60px] rounded-full" />

          <div className="relative rounded-2xl border border-border/60 bg-background shadow-2xl shadow-primary/[0.08] overflow-hidden animate-float-slow lg:rotate-1" style={{ perspective: '1000px' }}>
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[hsl(0_84%_60%/0.6)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(45_93%_47%/0.6)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(142_71%_45%/0.6)]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-background border border-border/50 flex items-center px-3">
                  <span className="text-xs text-muted-foreground">app.efficientflow.solutions/{activeTab}</span>
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5 grid grid-cols-12 gap-3 min-h-[280px]">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:flex flex-col gap-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`h-7 rounded-lg flex items-center px-2.5 gap-2 transition-all duration-200 cursor-pointer text-left ${
                      activeTab === item.id
                        ? 'bg-primary/10'
                        : 'hover:bg-muted/60'
                    }`}
                  >
                    <item.icon size={12} className={activeTab === item.id ? 'text-primary' : 'text-muted-foreground'} />
                    <span className={`text-[10px] font-medium truncate ${activeTab === item.id ? 'text-primary' : 'text-muted-foreground'}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-12 md:col-span-9 flex flex-col gap-3 transition-all duration-200">
                {current.kpis && (
                  <div className="grid grid-cols-3 gap-2.5">
                    {current.kpis.map((kpi) => (
                      <div key={kpi.label} className="rounded-xl border border-border/40 bg-background p-3">
                        <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{kpi.label}</p>
                        <p className={`text-lg font-bold mt-0.5 ${kpi.color}`}>{kpi.value}</p>
                      </div>
                    ))}
                  </div>
                )}
                {current.content}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
