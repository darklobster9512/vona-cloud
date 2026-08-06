import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-6">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          {/* Logo: fixed size to prevent layout shift */}
          {/* Desktop: logo left */}
          <Link to="/" className="shrink-0 hidden md:block h-10">
            <img src={logo} alt="Efficient Flow" loading="eager" fetchPriority="high" className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-200" />
          </Link>

          {/* Desktop Nav pill */}
          <nav
            className={`hidden md:flex flex-1 transition-all duration-500 rounded-full border px-8 h-16 items-center justify-between ${
              scrolled
                ? 'bg-background/90 backdrop-blur-xl shadow-lg shadow-foreground/5 border-border/80'
                : 'bg-background/60 backdrop-blur-md border-border/40 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="ml-8 pl-6">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors whitespace-nowrap"
              >
                Projekt starten
                <ArrowRight size={15} />
              </Link>
            </div>
          </nav>

          {/* Mobile header bar */}
          <div className="md:hidden flex-1 flex items-center">
            {/* Hamburger in eigener Pille */}
            <button
              className={`p-2.5 rounded-full border transition-all duration-500 ${
                scrolled
                  ? 'bg-background/90 backdrop-blur-xl shadow-lg shadow-foreground/5 border-border/80'
                  : 'bg-background/60 backdrop-blur-md border-border/40 shadow-sm'
              } text-foreground`}
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>

            {/* Logo zentriert, transparent */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="Efficient Flow" loading="eager" fetchPriority="high" className="h-8 hover:scale-105 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Sidebar Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        {/* Sidebar panel */}
        <div
          className={`absolute inset-y-0 left-0 w-[85%] max-w-[320px] bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border/40">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="Efficient Flow" className="h-8" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menü schließen"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3.5 text-lg font-semibold transition-colors ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-6 pb-8">
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-base"
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
