import { useState, useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'info@efficient-flow.com',
    href: 'mailto:info@efficient-flow.com',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '0211-87971940',
    href: 'tel:+4921187971940',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Marc-Chagall-Str. 142, 40477 Düsseldorf',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    value: 'Mo–Fr: 09:00 – 18:00 Uhr',
    href: undefined,
  },
];

const Kontakt = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>

      <PageHero
        title="Kontaktieren"
        highlight="Sie uns"
        subtitle="Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen voranbringen können. Wir freuen uns auf Ihre Nachricht."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Kontakt' },
        ]}
      />

      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <div className={`flex-1 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
              <h2 className="text-2xl font-extrabold tracking-tight mb-2">Nachricht senden</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Max Mustermann"
                      value={form.name}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="max@beispiel.de"
                      value={form.email}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+49 123 456 789"
                      value={form.phone}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Projektanfrage"
                      value={form.subject}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="rounded-xl"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-200"
                >
                  Nachricht senden
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Contact info sidebar */}
            <div className={`w-full lg:w-80 shrink-0 scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
              <div className="lg:sticky lg:top-28 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-blue flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kontakt;
