import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, ServerCog, MoveRight, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    id: 'entwicklung',
    title: 'Web-Apps, SaaS & APIs',
    headline: 'Cloud-Entwicklung',
    description:
      'Wir entwickeln Cloud-Anwendungen von Grund auf — mit klarer Architektur, getesteter Codebasis und automatisierter Auslieferung. Vom Prototyp bis zum produktiven Release.',
    longDescription:
      'Unsere Teams arbeiten in kurzen Iterationen: jede Woche ein sichtbarer Fortschritt, jedes Release automatisiert ausgeliefert. Wir setzen auf bewährte Technologien statt Experimente und dokumentieren Entscheidungen so, dass Ihr Team jederzeit übernehmen kann.',
    features: [
      'Full-Stack Web- und SaaS-Anwendungen',
      'API- und Integrationsschicht',
      'Multi-Tenancy & Rollenmodelle',
      'Automatisierte Tests & CI/CD',
      'Container & Infrastructure as Code',
      'Wartung und Weiterentwicklung',
    ],
  },
  {
    icon: ServerCog,
    id: 'betrieb',
    title: 'Deployment, Monitoring & Support',
    headline: 'Managed Cloud-Betrieb',
    description:
      'Wir übernehmen den Betrieb Ihrer Anwendungen: Infrastruktur, Monitoring, Alerting, Backups und Skalierung — überwacht statt gehofft.',
    longDescription:
      'Betrieb ist kein Nebenprodukt der Entwicklung, sondern eine eigene Disziplin. Wir bauen Monitoring und Alerting so auf, dass Probleme auffallen, bevor Ihre Nutzer sie merken, und testen Wiederherstellungen regelmäßig statt nur zu dokumentieren.',
    features: [
      'Monitoring, Logging & Alerting',
      'Backups mit getesteter Recovery',
      'Autoscaling & Lastverteilung',
      'Patch- und Update-Management',
      'Incident-Handling mit Reaktionszeiten',
      'Regelmäßige Betriebsreports',
    ],
  },
  {
    icon: MoveRight,
    id: 'migration',
    title: 'Vom Altsystem in die Cloud',
    headline: 'Cloud-Migration',
    description:
      'Bestehende Systeme migrieren wir schrittweise und ohne Stillstand — mit Zielarchitektur, Migration in Wellen und einem Rollback-Pfad in jeder Phase.',
    longDescription:
      'Migrationen scheitern selten an der Technik, sondern an fehlender Reihenfolge. Wir beginnen mit einer vollständigen Bestandsaufnahme, definieren Abhängigkeiten und schalten erst um, wenn die neue Umgebung verifiziert ist.',
    features: [
      'Bestandsaufnahme & Abhängigkeitsanalyse',
      'Zielarchitektur und Migrationsplan',
      'Datenmigration mit Abgleich',
      'Parallelbetrieb und stufenweise Umschaltung',
      'Ablösung von Legacy-Komponenten',
      'Wissenstransfer an Ihr Team',
    ],
  },
  {
    icon: ShieldCheck,
    id: 'beratung',
    title: 'Architektur, Kosten & Compliance',
    headline: 'Cloud-Beratung',
    description:
      'Wir bewerten Ihre Architektur, senken Cloud-Kosten und bringen Security- sowie DSGVO-Anforderungen in eine belastbare Form — inklusive EU-Hosting.',
    longDescription:
      'Wir sagen offen, was gut läuft und was nicht. Das Ergebnis ist kein Foliensatz, sondern eine priorisierte Liste konkreter Maßnahmen mit Aufwand, Wirkung und Reihenfolge.',
    features: [
      'Architektur- und Code-Review',
      'Cloud Cost Optimization',
      'Security-Assessment',
      'DSGVO-konforme Verarbeitung & EU-Hosting',
      'Vermeidung von Vendor Lock-in',
      'Technische Due Diligence',
    ],
  },
];


const Leistungen = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Leistungen | VONA Cloud';
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <PageHero
        title="Unsere"
        highlight="Leistungen"
        subtitle="Vier Bereiche rund um die Cloud — Entwicklung, Betrieb, Migration und Beratung aus einer Hand."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Leistungen' },
        ]}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={service.id}
                className={`scroll-hidden delay-${Math.min(i + 1, 4)} ${isVisible ? 'scroll-visible' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:direction-rtl' : ''}`}>
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center">
                        <Icon size={22} className="text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground tracking-wider">
                        0{i + 1}/04
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{service.title}</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{service.headline}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">{service.longDescription}</p>
                    <Link
                      to="/kontakt"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
                    >
                      Projekt besprechen
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl border border-border/60 bg-white p-8">
                      <h3 className="text-sm font-bold text-foreground mb-6">Was wir liefern</h3>
                      <div className="grid gap-4">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CTASection />
      <Footer />
    </>
  );
};

export default Leistungen;
