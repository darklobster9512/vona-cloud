import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';

const Datenschutz = () => {
  return (
    <>
      <PageHero
        title="Datenschutzerklärung"
        subtitle=""
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Datenschutz' },
        ]}
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-neutral dark:prose-invert">

          <h2 className="text-2xl font-extrabold tracking-tight mb-6">1. Verantwortlicher</h2>
          <p>
            Efficient Flow Solutions GmbH<br />
            Marc-Chagall-Str. 142<br />
            40477 Düsseldorf<br />
            E-Mail:{' '}
            <a href="mailto:info@efficient-flow.com" className="text-primary hover:underline">
              info@efficient-flow.com
            </a>
            <br />
            Telefon:{' '}
            <a href="tel:+4921187971940" className="text-primary hover:underline">
              0211-87971940
            </a>
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Beim Besuch unserer Website werden automatisch Informationen durch den Browser übermittelt und in Server-Logfiles gespeichert. Dies umfasst: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">3. Kontaktformular</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">4. Cookies</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher und effektiver zu gestalten. Einige Cookies sind „Session-Cookies" und werden nach Ende Ihrer Browser-Sitzung automatisch gelöscht. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">5. Hosting</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Diese Website wird bei einem externen Dienstleister gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten und sonstige Daten handeln, die über eine Website generiert werden.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">6. Ihre Rechte</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
          <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 mt-2 space-y-1">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">7. Beschwerderecht bei einer Aufsichtsbehörde</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Datenschutz;
