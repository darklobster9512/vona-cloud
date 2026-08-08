import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Boxes, LifeBuoy, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    id: 'entwicklung',
    title: 'Fachanwendungen, Portale & Schnittstellen',
    headline: 'Softwareentwicklung',
    description:
      'Wir entwickeln Software, die Ihren Ablauf abbildet — von der Fachanwendung über das Kundenportal bis zur Schnittstelle zwischen bestehenden Systemen.',
    longDescription:
      'Unsere Teams arbeiten in kurzen Iterationen: jede Woche ein sichtbarer Fortschritt, regelmäßige Demos, klare Abnahmen. Wir setzen auf bewährte Technologien statt Experimente und dokumentieren Entscheidungen so, dass Ihr Team jederzeit übernehmen kann.',
    features: [
      'Fachanwendungen und Web-Portale',
      'Schnittstellen zu ERP, CRM & Co.',
      'Rollen- und Berechtigungskonzepte',
      'Auswertungen und Dokumente',
      'Tests und automatisierte Auslieferung',
      'Weiterentwicklung nach dem Go-live',
    ],
  },
  {
    icon: Boxes,
    id: 'produkte',
    title: 'Lizenzierung, Einführung & Schulung',
    headline: 'Softwareprodukte & Vertrieb',
    description:
      'Wir vertreiben eigene und bewährte Softwareprodukte, richten sie in Ihrer Umgebung ein und schulen die Menschen, die täglich damit arbeiten.',
    longDescription:
      'Wenn eine fertige Lösung Ihre Anforderungen erfüllt, ist Eigenentwicklung der teurere Weg. Wir prüfen das offen, empfehlen das passende Produkt und übernehmen Konfiguration, Datenübernahme und Einführung.',
    features: [
      'Auswahl und Empfehlung passender Produkte',
      'Lizenz- und Betriebsmodelle',
      'Konfiguration und Anpassung',
      'Datenübernahme aus Altsystemen',
      'Schulung von Anwendern und Key-Usern',
      'Begleitung im ersten Betriebsmonat',
    ],
  },
  {
    icon: LifeBuoy,
    id: 'betrieb',
    title: 'Hosting, Wartung & Support',
    headline: 'Betrieb & Support',
    description:
      'Wir halten Ihre Software am Laufen: Hosting in der EU, Updates, Überwachung, Sicherungen und ein Ansprechpartner mit zugesagter Reaktionszeit.',
    longDescription:
      'Betrieb ist kein Nebenprodukt der Entwicklung, sondern eine eigene Disziplin. Wir überwachen die Anwendung, spielen Updates kontrolliert ein und prüfen Wiederherstellungen regelmäßig — statt sie nur zu dokumentieren.',
    features: [
      'Hosting in Rechenzentren in der EU',
      'Wartung und Sicherheits-Updates',
      'Überwachung und Benachrichtigung',
      'Sicherungen mit geprüfter Wiederherstellung',
      'Support mit festen Reaktionszeiten',
      'Regelmäßige Betriebsberichte',
    ],
  },
  {
    icon: Compass,
    id: 'beratung',
    title: 'Prozesse, Systemauswahl & Konzept',
    headline: 'Beratung',
    description:
      'Wir analysieren Abläufe, bewerten bestehende Systeme und erarbeiten ein Konzept mit Aufwand, Wirkung und Reihenfolge — inklusive Datenschutz.',
    longDescription:
      'Wir sagen offen, was gut läuft und was nicht. Das Ergebnis ist kein Foliensatz, sondern eine priorisierte Liste konkreter Maßnahmen, die Sie auch ohne uns umsetzen könnten.',
    features: [
      'Prozessaufnahme und Interviews',
      'Bewertung bestehender Anwendungen',
      'Make-or-Buy-Entscheidung',
      'Aufwands- und Kostenschätzung',
      'Datenschutz und Berechtigungen',
      'Priorisierte Umsetzungsempfehlung',
    ],
  },
];



const Leistungen = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Leistungen | VONA Cloud Solutions';
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
        subtitle="Vier Bereiche rund um Software — Entwicklung, Produkte, Betrieb und Beratung aus einer Hand."
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
