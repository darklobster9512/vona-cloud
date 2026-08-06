import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';

const Impressum = () => {
  return (
    <>
      <PageHero
        title="Impressum"
        highlight=""
        subtitle=""
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Impressum' },
        ]}
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-neutral dark:prose-invert">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6">Angaben gemäß § 5 TMG</h2>

          <p>
            Efficient Flow Solutions GmbH<br />
            Marc-Chagall-Str. 142<br />
            40477 Düsseldorf
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Vertreten durch</h3>
          <p>Geschäftsführer: Tobias Papst</p>

          <h3 className="text-lg font-bold mt-8 mb-3">Registereintrag</h3>
          <p>
            Registergericht: Amtsgericht Düsseldorf<br />
            Registernummer: HRB 101174
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            DE321399565
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Kontakt</h3>
          <p>
            E-Mail:{' '}
            <a href="mailto:info@efficient-flow.com" className="text-primary hover:underline">
              info@efficient-flow.com
            </a>
            <br />
            Telefon:{' '}
            <a href="tel:+4921187971940" className="text-primary hover:underline">
              0211-87971940
            </a>
            <br />
            Website:{' '}
            <a href="https://efficient-flow.solutions" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              efficient-flow.solutions
            </a>
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Haftung für Inhalte</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Haftung für Links</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Urheberrecht</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Impressum;
