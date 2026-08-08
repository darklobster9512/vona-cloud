# Hochgeladenes Logo & Favicon einbinden

## Ziel
Das von dir gelieferte VONA-Logo (blaue Wortmarke) wird in Header und Footer verwendet, das gelieferte Favicon als Seiten-Icon.

## Umsetzung

**Logo (Header + Footer)**
- Das hochgeladene `vonalogo.png` wird als Projekt-Asset eingebunden (CDN-Pointer in `src/assets/`).
- `src/components/Logo.tsx` wird von der aktuellen SVG-Wortmarke auf ein `<img>` mit dem hochgeladenen Logo umgestellt — inklusive `alt="VONA Cloud"`, Seitenverhältnis-Sperre (367x131) und `loading="eager"` für den Header, damit nichts verzerrt oder springt.
- Größenstufen bleiben bestehen und werden aufs neue Format abgestimmt: `sm` h-6, `md` h-8 (Footer), `lg` h-10 (Desktop-Header).
- Navbar-Höhen werden geprüft und, falls nötig, leicht angepasst, damit das breitere Logo in der Glas-Insel sauber sitzt (Desktop, Scroll-Zustand, Mobile, Mobile-Sidebar).

**Favicon**
- `vonafavicon.png` (64x64) ersetzt `public/favicon.png` als echte Datei; die bestehenden `<link rel="icon">`-Tags in `index.html` bleiben unverändert und zeigen weiter darauf.

## Hinweis
Das Logo ist blau auf transparentem/weißem Grund und funktioniert damit auf hellen Flächen (Header-Glas, Footer). Sollte es irgendwo auf dunklem Untergrund stehen, sage kurz Bescheid — dann setze ich dort eine helle Variante ein.

## Prüfung
Screenshots von Desktop-Header, Mobile-Header und Footer, um Skalierung, Schärfe und Ausrichtung zu bestätigen.
