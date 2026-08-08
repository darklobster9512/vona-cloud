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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-xl border-b border-border/70 shadow-[0_1px_24px_-12px_hsl(217_91%_60%/0.45)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
            <Link to="/" className="shrink-0 group">
              <Logo size="lg" className="transition-opacity duration-200 group-hover:opacity-80" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const active = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`group relative py-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                      active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-blue transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-foreground text-background font-mono text-[11px] font-medium uppercase tracking-[0.16em] hover:bg-foreground/90 transition-colors whitespace-nowrap"
              >
                Projekt starten
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile trigger */}
            <button
              className="md:hidden p-2.5 rounded-xl border border-border/70 bg-background/70 backdrop-blur-md text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

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
