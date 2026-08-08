import { Link } from 'react-router-dom';
import { Mail, Building2, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative border-t-2 border-primary/20 bg-gradient-blue-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="VONA Cloud" className="h-10 hover:scale-105 transition-transform duration-200" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Entwicklung, Betrieb und Vertrieb von Softwareprodukten einschließlich
              Beratung — aus Wiesbaden, mit Hosting in der EU.
            </p>


          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Unternehmen</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Methodik', href: '/methodik' },
                { label: 'Team', href: '/team' },
                { label: 'Karriere', href: '/karriere' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Leistungen</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Softwareentwicklung', href: '/leistungen' },
                { label: 'Softwareprodukte & Vertrieb', href: '/leistungen' },
                { label: 'Betrieb & Support', href: '/leistungen' },
                { label: 'Beratung', href: '/leistungen' },

              ].map((link, i) => (

                <li key={i}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:kontakt@vona-cloud.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary/70 shrink-0" />
                  kontakt@vona-cloud.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary/70 shrink-0" />
                <span>VONA Cloud Solutions GmbH</span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" />
                <span>Rheingaustr. 53<br />65201 Wiesbaden</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="border-t border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VONA Cloud Solutions GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
