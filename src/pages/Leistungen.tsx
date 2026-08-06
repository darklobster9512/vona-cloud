import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb, Monitor, Code2, Cog, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    id: 'consulting',
    title: 'Strategische Prozessberatung',
    headline: 'Consulting',
    description:
      'Wir analysieren Ihre bestehenden Abläufe bis ins Detail, identifizieren Engpässe und entwickeln maßgeschneiderte Strategien für nachhaltige Effizienzsteigerung — datenbasiert, transparent und zukunftsorientiert.',
    longDescription:
      'Unsere Berater bringen jahrelange Erfahrung in der Optimierung von Geschäftsprozessen mit. Wir arbeiten eng mit Ihrem Team zusammen, um tiefgreifende Einblicke in Ihre aktuellen Abläufe zu gewinnen und Verbesserungspotenziale aufzudecken.',
    features: [
      'Umfassende Prozessanalyse & Mapping',
      'Identifikation von Engpässen und Ineffizienzen',
      'Datenbasierte Potenzialermittlung',
      'Strategische Roadmap-Entwicklung',
      'Change-Management Begleitung',
      'ROI-Prognosen und Erfolgsmessung',
    ],
  },
  {
    icon: Monitor,
    id: 'digitalisierung',
    title: 'Von Legacy zu Modern',
    headline: 'Digitalisierung',
    description:
      'Transformation Ihrer analogen und veralteten Systeme in eine zukunftsfähige digitale Infrastruktur. Keine halben Sachen — vollständige Modernisierung mit klarem Plan.',
    longDescription:
      'Die digitale Transformation ist mehr als nur neue Software. Wir begleiten Sie bei der kompletten Modernisierung Ihrer IT-Landschaft — von der Strategie über die Migration bis zum laufenden Betrieb.',
    features: [
      'Legacy-System-Migration',
      'Cloud-Transformation & Infrastruktur',
      'Digitale Workflow-Implementierung',
      'Datenbank-Modernisierung',
      'API-First Architektur',
      'Schulung und Onboarding',
    ],
  },
  {
    icon: Code2,
    id: 'software',
    title: 'Maßgeschneiderte Lösungen',
    headline: 'Software-Entwicklung',
    description:
      'Individuelle Softwarelösungen, die exakt auf Ihre Geschäftsprozesse zugeschnitten sind — von Konzept bis Deployment, mit erstklassiger UX und modernster Technologie.',
    longDescription:
      'Ob Web-Applikation, interne Tools oder komplexe Plattformen — wir entwickeln Software, die perfekt zu Ihren Anforderungen passt und mit Ihrem Unternehmen wächst.',
    features: [
      'Full-Stack Web-Applikationen',
      'API-Design & Entwicklung',
      'Dashboards & Analytics-Plattformen',
      'Responsive Design & Mobile-First',
      'CI/CD & DevOps-Integration',
      'Langfristige Wartung & Support',
    ],
  },
  {
    icon: Cog,
    id: 'optimierung',
    title: 'Systematische Verbesserung',
    headline: 'Prozessoptimierung',
    description:
      'Datengestützte Analyse und Optimierung Ihrer Workflows für messbare Ergebnisse und weniger Verschwendung — kontinuierlich und nachhaltig.',
    longDescription:
      'Wir verbinden Lean-Methoden mit moderner Technologie, um Ihre Prozesse systematisch zu verbessern. Durch kontinuierliches Monitoring und KPI-Tracking stellen wir sicher, dass Verbesserungen nachhaltig wirken.',
    features: [
      'Workflow-Automation',
      'KPI-Definition & Tracking',
      'Lean Management Methoden',
      'Kontinuierliche Verbesserungsprozesse',
      'Performance-Monitoring',
      'Ressourcenoptimierung',
    ],
  },
];

const Leistungen = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Leistungen | Efficient Flow';
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
        subtitle="Vier Säulen für maximale Effizienz — von strategischer Beratung bis zur technischen Umsetzung."
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
