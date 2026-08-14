import { Link } from 'react-router-dom';
import { Mail, Building2, MapPin, ArrowUpRight, ShieldCheck, Phone } from 'lucide-react';
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
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link to="/" className="inline-flex">
              <Logo size="lg" className="brightness-0 invert transition-opacity duration-200 hover:opacity-80" />
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-white/60">
              Entwicklung, Betrieb und Vertrieb von Softwareprodukten einschließlich Beratung.
            </p>
          </div>

          <a
            href="mailto:kontakt@voeller-it.com"
            className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-white transition-colors hover:text-primary"
          >
            kontakt@voeller-it.com
            <ArrowUpRight
              size={16}
              className="shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Linkspalten */}
        <div className="grid gap-8 border-b border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {columns.map((col, i) => (
            <div
              key={col.label}
              className={i > 0 ? 'lg:pl-10 lg:border-l lg:border-white/10' : 'lg:pr-10'}
            >
              <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-primary">
                {col.label}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link, j) => (
                  <li key={`${col.label}-${j}`}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Untere Leiste */}
        <div className="relative py-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-[11px] text-white/40">
              © {new Date().getFullYear()} Völler IT Solutions GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-col flex-wrap items-start gap-x-6 gap-y-2 text-[11px] text-white/50 sm:flex-row sm:items-center">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-primary" />
                Völler IT Solutions GmbH
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Sandweg 44, 35037 Marburg
              </span>
              <a href="tel:+4961318888371" className="group flex items-center gap-1.5 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5 text-primary" />
                06131 8888371
              </a>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Hosting in der EU
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/impressum" className="text-[11px] text-white/50 transition-colors hover:text-white">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-[11px] text-white/50 transition-colors hover:text-white">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
