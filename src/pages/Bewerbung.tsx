import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Upload, Send, Loader2 } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { stellen } from '@/data/karriereStellen';
import { toast } from '@/hooks/use-toast';

const BRANDING_ID = 'e4f832ef-4f72-4fa3-983e-07b678a698a1';
const API_URL = 'https://luorlnagxpsibarcygjm.supabase.co/functions/v1/submit-application';

const FieldLabel = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="mono-label-muted text-[10px] block">
    {children}
  </label>
);

const inputClass =
  'rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary transition-colors';

const Bewerbung = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('stelle') || '';
  const { ref, isVisible } = useScrollAnimation();

  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    strasse: '',
    plz: '',
    stadt: '',
    stelle: preselected,
    anstellungsart: '',
    lebenslauf: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);

  const selected = stellen.find((s) => s.titel === form.stelle);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, lebenslauf: e.target.files?.[0] || null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.vorname.trim() || !form.nachname.trim() || !form.email.trim() || !form.telefon.trim() || !form.strasse.trim() || !form.plz.trim() || !form.stadt.trim() || !form.anstellungsart) {
      toast({ title: 'Bitte alle Pflichtfelder ausfüllen.', variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('first_name', form.vorname.trim());
      formData.append('last_name', form.nachname.trim());
      formData.append('email', form.email.trim());
      formData.append('phone', form.telefon.trim());
      formData.append('employment_type', form.anstellungsart);
      formData.append('branding_id', BRANDING_ID);
      if (form.lebenslauf) {
        formData.append('resume', form.lebenslauf);
      }

      const res = await fetch(API_URL, { method: 'POST', body: formData });
      const data = await res.json();

      if (data.success) {
        toast({ title: 'Bewerbung erfolgreich gesendet!', description: 'Wir melden uns bei dir.' });
        setForm({ vorname: '', nachname: '', email: '', telefon: '', strasse: '', plz: '', stadt: '', stelle: '', anstellungsart: '', lebenslauf: null });
      } else {
        throw new Error(data.error || 'Unbekannter Fehler');
      }
    } catch (err: any) {
      toast({ title: 'Fehler beim Senden', description: err.message || 'Bitte versuche es erneut.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  const steps = [
    { title: 'Formular senden', text: 'Basisdaten und optional dein Lebenslauf.' },
    { title: 'Rückmeldung', text: 'Wir sichten deine Bewerbung und melden uns per E-Mail.' },
    { title: 'Kennenlernen', text: 'Kurzes Gespräch per Video — unkompliziert und ehrlich.' },
  ];

  return (
    <>
      <PageHero
        title="Deine"
        highlight="Bewerbung"
        subtitle="Fülle das Formular aus und bewirb dich auf eine unserer offenen Stellen. Wir freuen uns darauf, dich kennenzulernen."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere', href: '/karriere' },
          { label: 'Bewerbung' },
        ]}
      />

      <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-fine opacity-[0.5] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Form */}
            <div className={`flex-1 min-w-0 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
              <div className="flex items-baseline gap-4 pb-4 border-b border-border">
                <span className="mono-label-muted text-[10px]">01</span>
                <h2 className="text-xl font-extrabold tracking-tight text-foreground">Bewerbungsformular</h2>
                <span className="ml-auto text-xs text-muted-foreground">* Pflichtfeld</span>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                {/* Stelle (UI only) */}
                <div className="grid md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <FieldLabel htmlFor="stelle">Stelle</FieldLabel>
                    <Select value={form.stelle} onValueChange={(v) => setForm({ ...form, stelle: v })}>
                      <SelectTrigger id="stelle" className={inputClass}>
                        <SelectValue placeholder="Stelle auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {stellen.map((s) => (
                          <SelectItem key={s.slug} value={s.titel}>
                            {s.titel}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <FieldLabel htmlFor="anstellungsart">Anstellungsart *</FieldLabel>
                    <Select value={form.anstellungsart} onValueChange={(v) => setForm({ ...form, anstellungsart: v })}>
                      <SelectTrigger id="anstellungsart" className={inputClass}>
                        <SelectValue placeholder="Anstellungsart wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minijob">Minijob</SelectItem>
                        <SelectItem value="teilzeit">Teilzeit</SelectItem>
                        <SelectItem value="vollzeit">Vollzeit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Name */}
                <div className="grid md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <FieldLabel htmlFor="vorname">Vorname *</FieldLabel>
                    <Input id="vorname" name="vorname" placeholder="Max" value={form.vorname} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel htmlFor="nachname">Nachname *</FieldLabel>
                    <Input id="nachname" name="nachname" placeholder="Mustermann" value={form.nachname} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <FieldLabel htmlFor="email">E-Mail *</FieldLabel>
                    <Input id="email" name="email" type="email" placeholder="max@beispiel.de" value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel htmlFor="telefon">Telefon *</FieldLabel>
                    <Input id="telefon" name="telefon" type="tel" placeholder="+49 123 456 789" value={form.telefon} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Adresse */}
                <div className="space-y-2">
                  <FieldLabel htmlFor="strasse">Straße + Hausnummer *</FieldLabel>
                  <Input id="strasse" name="strasse" placeholder="Musterstraße 1" value={form.strasse} onChange={handleChange} className={inputClass} />
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-7">
                  <div className="space-y-2">
                    <FieldLabel htmlFor="plz">PLZ *</FieldLabel>
                    <Input id="plz" name="plz" placeholder="12345" value={form.plz} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel htmlFor="stadt">Stadt *</FieldLabel>
                    <Input id="stadt" name="stadt" placeholder="Musterstadt" value={form.stadt} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* File upload */}
                <div className="space-y-2">
                  <FieldLabel htmlFor="lebenslauf">Lebenslauf</FieldLabel>
                  <label
                    htmlFor="lebenslauf"
                    className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-border bg-card/40 cursor-pointer hover:border-primary/40 hover:bg-card transition-colors"
                  >
                    <Upload size={18} className="text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {form.lebenslauf ? form.lebenslauf.name : 'PDF oder DOCX hochladen'}
                    </span>
                    <input
                      id="lebenslauf"
                      type="file"
                      accept=".pdf,.docx,.doc"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {submitting ? (
                    <>
                      Wird gesendet…
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Bewerbung absenden
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-[300px] shrink-0">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} relative rounded-2xl bg-ink overflow-hidden`}>
                  <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />
                  <div className="relative p-7">
                    <span className="mono-label text-primary">Ausgewählt</span>
                    <h3 className="mt-2 text-lg font-extrabold tracking-tight text-white leading-snug">
                      {selected ? selected.titel : 'Keine Stelle gewählt'}
                    </h3>
                    {selected ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {[selected.standort, selected.modell, selected.stundenlohn && `${selected.stundenlohn} / Std.`]
                          .filter(Boolean)
                          .map((m) => (
                            <span
                              key={m as string}
                              className="font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-md border border-white/15 text-white/70"
                            >
                              {m}
                            </span>
                          ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-sm text-white/60">
                        Wähle links eine Stelle aus oder bewirb dich initiativ.
                      </p>
                    )}
                  </div>
                </div>

                <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border bg-card/60 p-6`}>
                  <span className="mono-label-muted text-[10px]">Ablauf</span>
                  <ol className="mt-4 space-y-5">
                    {steps.map((s, i) => (
                      <li key={s.title} className="flex gap-3">
                        <span className="font-mono text-[10px] text-primary pt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{s.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{s.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <p className="text-xs text-muted-foreground">
                  Fragen?{' '}
                  <a href="mailto:kontakt@vona-cloud.com" className="text-primary font-medium hover:underline underline-offset-4">
                    kontakt@vona-cloud.com
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Bewerbung;
