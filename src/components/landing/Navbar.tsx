import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Software', href: '/software' },
  { label: 'Methodik', href: '/methodik' },
  { label: 'Team', href: '/team' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pointer-events-none">
        <div
          className={`mx-auto max-w-6xl pointer-events-auto transition-all duration-500 ${
            scrolled ? 'mt-3' : 'mt-5'
          }`}
        >
          {/* Desktop: schwebende Glas-Insel */}
          <div
            className={`hidden md:flex items-center rounded-2xl border transition-all duration-500 ${
              scrolled
                ? 'h-[4.5rem] bg-background/85 backdrop-blur-2xl border-border/70 shadow-[0_18px_50px_-24px_hsl(217_91%_60%/0.55)]'
                : 'h-20 bg-background/55 backdrop-blur-xl border-border/40 shadow-[0_12px_40px_-28px_hsl(217_91%_60%/0.4)]'
            }`}
          >
            <Link to="/" className="flex items-center pl-5 pr-5 shrink-0 transition-opacity hover:opacity-80">
              <Logo size="lg" eager />
            </Link>

            <div className="h-8 w-px bg-border/70" />

            <nav className="flex-1 flex items-center justify-center gap-1 px-4">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="h-8 w-px bg-border/70" />

            <div className="pl-5 pr-4">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 h-10 pl-4 pr-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors whitespace-nowrap"
              >
                Projekt starten
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-lg bg-background/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile: schmale Glas-Insel */}
          <div
            className={`md:hidden flex items-center justify-between h-14 pl-4 pr-2.5 rounded-2xl border transition-all duration-500 ${
              scrolled
                ? 'bg-background/90 backdrop-blur-2xl border-border/70 shadow-[0_16px_40px_-24px_hsl(217_91%_60%/0.5)]'
                : 'bg-background/60 backdrop-blur-xl border-border/40 shadow-sm'
            }`}
          >
            <Link to="/" className="flex items-center">
              <Logo size="md" eager />
            </Link>
            <button
              className="p-2.5 rounded-xl text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Sidebar Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        <div
          className={`absolute inset-y-0 left-0 w-[85%] max-w-[320px] bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border/40">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <Logo size="md" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menü schließen"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {navLinks.map((link, i) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-baseline gap-3 py-3.5 border-b border-border/40 transition-colors ${
                    active ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-semibold">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="px-6 pb-8">
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-blue text-primary-foreground font-semibold text-base"
            >
              Projekt starten
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
