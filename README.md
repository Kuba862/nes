# Never Ending Story

Statyczna strona typu business card dla agencji marketingowej Never Ending Story.

## Uruchomienie

```bash
npm install
npm run dev
```

## Sprawdzenie produkcyjne

```bash
npm run lint
npm run build
```

Projekt używa Next.js App Router, ręcznego CSS, modułów CSS per komponent i statycznego eksportu przez `output: "export"`.

## Materiały i dane do podmiany

- `public/brand-logo.png` jest PNG wyciągniętym z zaakceptowanego prototypu. Po dostarczeniu wersji wektorowej należy go zastąpić docelowym logo.
- Adres e-mail, numer telefonu, linki społecznościowe i domena produkcyjna są oznaczone w `src/content/site.ts` jako dane oczekujące na potwierdzenie klienta.
- Adres pocztowy i dane geo nie zostały dodane do JSON-LD, bo klient jeszcze ich nie dostarczył.

## Checklist po publikacji

- Zweryfikować domenę w Google Search Console.
- Przesłać sitemapę z adresu `/sitemap.xml`.
- Potwierdzić indeksację strony głównej.
- Sprawdzić dane strukturalne w narzędziu Google Rich Results.
