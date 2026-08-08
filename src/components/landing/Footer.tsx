import { Link } from 'react-router-dom';
import { Mail, Building2, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from '@/components/Logo';

const columns = [
  {
    label: 'Unternehmen',
    links: [
      { label: 'Methodik', href: '/methodik' },
      { label: 'Team', href: '/team' },
      { label: 'Karriere', href: '/karriere' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    label: 'Leistungen',
    links: [
      { label: 'Softwareentwicklung', href: '/leistungen' },
      { label: 'Softwareprodukte & Vertrieb', href: '/leistungen' },
      { label: 'Betrieb & Support', href: '/leistungen' },
      { label: 'Beratung', href: '/leistungen' },
    ],
  },
  {
    label: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'Software', href: '/software' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* Akzent-Oberkante */}
      <div className="h-px w-full bg-gradient-blue" />
      <div className="pointer-events-none absolute inset-0 bg-blueprint-light opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Obere Zone */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
          <div>
            <Link to="/" className="inline-flex items-center">
              <Logo size="lg" className="brightness-0 invert transition-opacity duration-200 hover:opacity-80" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Entwicklung, Betrieb und Vertrieb von Softwareprodukten einschließlich
              Beratung — aus Wiesbaden, mit Hosting in der EU.
            </p>
          </div>

          <div className="lg:pl-12 lg:border-l lg:border-white/10">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
              Direkt schreiben
            </span>
            <a
              href="mailto:kontakt@vona-cloud.com"
              className="group mt-4 flex items-center gap-3 text-xl font-semibold tracking-tight text-white transition-colors hover:text-primary sm:text-2xl"
            >
              kontakt@vona-cloud.com
              <ArrowUpRight
                size={20}
                className="shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/50">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              Antwort in 24 h — werktags meist schneller.
            </p>
          </div>
        </div>

        {/* Linkspalten */}
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {columns.map((col, i) => (
            <div
              key={col.label}
              className={i > 0 ? 'lg:pl-12 lg:border-l lg:border-white/10' : 'lg:pr-12'}
            >
              <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
                {col.label}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link, j) => (
                  <li key={`${col.label}-${j}`}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Firmen- / Adresszeile */}
        <div className="flex flex-col gap-4 py-10 text-sm text-white/55 sm:flex-row sm:items-center sm:gap-10">
          <span className="flex items-center gap-2">
            <Building2 className="h-4 w-4 shrink-0 text-primary" />
            VONA Cloud Solutions GmbH
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            Rheingaustr. 53, 65201 Wiesbaden
          </span>
        </div>
      </div>

      {/* Untere Leiste */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} VONA Cloud Solutions GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Hosting in der EU
            </span>
            <Link to="/impressum" className="text-xs text-white/50 transition-colors hover:text-white">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-xs text-white/50 transition-colors hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
