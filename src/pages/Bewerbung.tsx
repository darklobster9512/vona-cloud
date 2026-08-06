import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Upload, Send, Loader2 } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

      <section ref={ref} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border/60 bg-card p-8 md:p-10`}>
            <h2 className="text-2xl font-extrabold tracking-tight mb-2">Bewerbungsformular</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Felder mit * sind Pflichtfelder.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Stelle (UI only) */}
              <div className="space-y-2">
                <Label htmlFor="stelle">Stelle</Label>
                <Select value={form.stelle} onValueChange={(v) => setForm({ ...form, stelle: v })}>
                  <SelectTrigger className="rounded-xl">
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

              {/* Anstellungsart */}
              <div className="space-y-2">
                <Label htmlFor="anstellungsart">Anstellungsart *</Label>
                <Select value={form.anstellungsart} onValueChange={(v) => setForm({ ...form, anstellungsart: v })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Anstellungsart wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minijob">Minijob</SelectItem>
                    <SelectItem value="teilzeit">Teilzeit</SelectItem>
                    <SelectItem value="vollzeit">Vollzeit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="vorname">Vorname *</Label>
                  <Input id="vorname" name="vorname" placeholder="Max" value={form.vorname} onChange={handleChange} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nachname">Nachname *</Label>
                  <Input id="nachname" name="nachname" placeholder="Mustermann" value={form.nachname} onChange={handleChange} className="rounded-xl" />
                </div>
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" name="email" type="email" placeholder="max@beispiel.de" value={form.email} onChange={handleChange} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefon *</Label>
                  <Input id="telefon" name="telefon" type="tel" placeholder="+49 123 456 789" value={form.telefon} onChange={handleChange} className="rounded-xl" />
                </div>
              </div>

              {/* Adresse */}
              <div className="space-y-2">
                <Label htmlFor="strasse">Straße + Hausnummer *</Label>
                <Input id="strasse" name="strasse" placeholder="Musterstraße 1" value={form.strasse} onChange={handleChange} className="rounded-xl" />
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-5">
                <div className="space-y-2">
                  <Label htmlFor="plz">PLZ *</Label>
                  <Input id="plz" name="plz" placeholder="12345" value={form.plz} onChange={handleChange} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stadt">Stadt *</Label>
                  <Input id="stadt" name="stadt" placeholder="Musterstadt" value={form.stadt} onChange={handleChange} className="rounded-xl" />
                </div>
              </div>

              {/* File upload */}
              <div className="space-y-2">
                <Label htmlFor="lebenslauf">Lebenslauf</Label>
                <label
                  htmlFor="lebenslauf"
                  className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-border bg-muted/30 cursor-pointer hover:border-primary/40 hover:bg-muted/50 transition-colors"
                >
                  <Upload size={20} className="text-muted-foreground" />
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
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Bewerbung;
