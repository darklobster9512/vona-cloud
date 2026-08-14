import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Cloud, Database, Globe, Lock, Server, Cpu } from 'lucide-react';

/* ── Architecture graphic (pure SVG/CSS) ── */
const ArchitectureGraphic = () => (
  <div className="relative w-full">
    {/* glow */}
    <div className="absolute inset-6 rounded-full bg-primary/[0.10] blur-[70px]" />

    <div className="relative rounded-[2rem] border border-border/60 bg-white/70 backdrop-blur-xl p-6 sm:p-8 shadow-[0_40px_120px_-50px_hsl(217_91%_60%/0.55)]">
      <div className="absolute inset-0 rounded-[2rem] bg-blueprint-fine opacity-70 pointer-events-none" />

      <div className="relative flex items-center justify-between mb-6">
        <span className="mono-label-muted">völler it · systemlandschaft</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60 animate-ring-expand" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          in betrieb
        </span>

      </div>

      {/* Node map */}
      <div className="relative h-[300px] sm:h-[340px]">
        <svg viewBox="0 0 400 340" className="absolute inset-0 w-full h-full">
          <g
            stroke="hsl(var(--primary))"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5 7"
          >
            <path d="M200 60 L200 150" className="animate-dash-flow" />
            <path d="M200 150 C200 150 100 160 80 240" className="animate-dash-flow" style={{ animationDelay: '0.4s' }} />
            <path d="M200 150 C200 150 300 160 320 240" className="animate-dash-flow" style={{ animationDelay: '0.8s' }} />
            <path d="M200 150 L200 240" className="animate-dash-flow" style={{ animationDelay: '1.2s' }} />
            <path d="M80 240 L200 300" className="animate-dash-flow" style={{ animationDelay: '1.6s' }} />
            <path d="M320 240 L200 300" className="animate-dash-flow" style={{ animationDelay: '2s' }} />
          </g>
          <g fill="hsl(var(--primary))">
            <circle cx="200" cy="105" r="3" className="animate-node-pulse" />
            <circle cx="140" cy="195" r="3" className="animate-node-pulse" style={{ animationDelay: '0.6s' }} />
            <circle cx="262" cy="195" r="3" className="animate-node-pulse" style={{ animationDelay: '1.1s' }} />
            <circle cx="200" cy="270" r="3" className="animate-node-pulse" style={{ animationDelay: '1.7s' }} />
          </g>
        </svg>

        {/* Top: users */}
        <Node className="left-1/2 -translate-x-1/2 top-0" icon={Globe} label="Nutzer & Portale" />
        {/* Center: platform */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[110px] -translate-y-1/2">
          <div className="relative flex items-center gap-3 rounded-2xl bg-gradient-blue px-5 py-3.5 text-primary-foreground shadow-[0_18px_44px_-16px_hsl(217_91%_60%/0.8)]">
            <Cloud size={20} />
            <div className="leading-tight">
              <p className="text-[13px] font-bold">Ihre Anwendung</p>
              <p className="font-mono text-[10px] text-white/70">entwickelt · gewartet</p>
            </div>
          </div>
        </div>
        {/* Row of services */}
        <Node className="left-0 top-[210px]" icon={Server} label="Schnittstellen" />
        <Node className="left-1/2 -translate-x-1/2 top-[218px]" icon={Cpu} label="Prozesse" />
        <Node className="right-0 top-[210px]" icon={Database} label="Datenbank" />
        {/* Bottom */}
        <Node className="left-1/2 -translate-x-1/2 bottom-0" icon={Lock} label="Wartung · Support" />
      </div>

      {/* Live metrics strip */}
      <div className="relative mt-6 grid grid-cols-3 gap-3 border-t border-border/60 pt-5">
        {[
          { k: 'verfügbarkeit', v: '99,9 %' },
          { k: 'reaktionszeit', v: '< 4 h' },
          { k: 'releases/monat', v: '12' },
        ].map((m) => (
          <div key={m.k}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.k}</p>
            <p className="text-base font-bold tracking-tight">{m.v}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
);

const Node = ({
  className,
  icon: Icon,
  label,
}: {
  className: string;
  icon: React.ElementType;
  label: string;
}) => (
  <div className={`absolute ${className}`}>
    <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-white px-3 py-2 shadow-sm">
      <Icon size={14} className="text-primary" />
      <span className="text-[11px] font-semibold whitespace-nowrap">{label}</span>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-blueprint mask-fade-b pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-[8%] h-[520px] w-[520px] rounded-full bg-primary/[0.10] blur-[110px] animate-orb" />
        <div className="absolute top-[18%] right-[4%] h-[460px] w-[460px] rounded-full bg-[hsl(199_89%_48%/0.09)] blur-[110px] animate-orb-delayed" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* Left */}
        <div>
          <div className="hero-animate hero-animate-1 mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary/50" />
            <span className="mono-label">Softwarehaus · Marburg</span>
          </div>

          <h1 className="hero-animate hero-animate-2 text-[2.5rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            Software, die wir
            <br />
            entwickeln,
            <br />
            <span className="text-gradient-blue">betreiben & betreuen.</span>
          </h1>

          <p className="hero-animate hero-animate-3 mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Entwicklung, Betrieb und Vertrieb von Softwareprodukten — einschließlich
            Beratung, Einführung und langfristigem Support.
          </p>

          <div className="hero-animate hero-animate-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/kontakt"
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gradient-blue px-9 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/35"
            >
              Erstgespräch anfragen
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leistungen"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-9 text-base font-semibold backdrop-blur-sm transition-all duration-200 hover:border-primary/40"
            >
              Leistungen
              <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <dl className="hero-animate hero-animate-5 mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border/70 pt-7">
            {[
              { v: '80+', l: 'Softwareprojekte' },
              { v: '15 J.', l: 'Erfahrung' },
              { v: '100 %', l: 'Support inhouse' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-extrabold tracking-tight">{s.v}</dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>

        </div>

        {/* Right */}
        <div className="hero-animate hero-animate-5">
          <ArchitectureGraphic />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
