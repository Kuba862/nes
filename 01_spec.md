# Never Ending Story — Website Specification

## 1. Purpose of This Document

This specification instructs a coding agent to build the production website for **Never Ending Story**, a Polish marketing agency offering brand strategy, branding, social media, advertising campaigns, and content. The deliverable is a single-page "business card" site with anchor navigation, fully static output, and all user-facing copy in **Polish** (the document root must declare the Polish language).

The approved design already exists as a working HTML prototype named **`never-ending-story_1.html`, located in the same folder as this spec**. That file is the single source of truth for every visual decision. Where this document and the prototype could ever disagree, the prototype wins.

## 2. How to Use the Design Reference

Before writing any application code, the agent must open `never-ending-story_1.html` in a browser and study it at both desktop and mobile widths, then read its source. The prototype contains the complete design token set (CSS custom properties), the full type scale with fluid sizing, every animation timing and easing, all Polish copy, and the responsive breakpoints. Exact values — hex colors, font sizes, spacings, durations — must be extracted from that source, never approximated by eye.

The prototype's footer embeds the brand logo as a base64-encoded PNG. The agent must extract it into a standalone image asset in the public assets folder. A vector version of the logo has been requested from the client and should replace the PNG when delivered.

Throughout the build, the agent must repeatedly render its own work and the prototype side by side and correct any divergence. Visual parity with the prototype is the acceptance bar for the whole project.

## 3. What the Finished Site Looks Like

### 3.1 Overall character

A modernist, editorial one-pager on a pure white ground with generous whitespace. The identity is carried almost entirely by typography and two brand colors taken from the logo: a saturated cornflower blue and a warm orange. The page pairs a high-contrast serif (Bodoni Moda) for all display headlines — echoing the word "STORY" in the logo — with a clean grotesque sans (Archivo) for body text and for small, widely letter-spaced uppercase labels that echo the "NEVER ENDING" line. Hairline dividers, pill-shaped buttons, and soft 6-pixel corner radii keep the whole composition quiet, so the color and type do the talking.

### 3.2 Brand system

| Token | Value | Role |
|---|---|---|
| Ink | #0E0E14 | Text and dark surfaces |
| Paper | #FFFFFF | Page background |
| Mist | #F3F4FC | Pale periwinkle: alternate section background, hover fills |
| Blue | #4358E2 | Brand primary: display type, CTAs, contact section background |
| Deep blue | #2C3FC4 | Hover state of blue |
| Orange | #FF914C | Decorative accents only — never used as text color |
| Line | #E5E6F0 | Hairline borders and dividers |

Three signature motifs must survive the port intact. First, the **orange ellipse** lifted from the logo's letter O: it sits behind the "O" of the hero word „Opowiadamy", inside the "O" of the navigation wordmark, as an oversized full stop ending the contact headline, and as the separator dots in the marquee. Second, the **never-ending marquee**: an infinitely looping horizontal ribbon of service names, a literal play on the agency's name. Third, the **infinity step**: the four-step process is numbered 01, 02, 03 and then ∞ in orange, because the last phase — growth — never ends.

### 3.3 Page walkthrough, top to bottom

**Navigation.** A fixed, frosted-glass white bar with a hairline bottom border. Left: a two-line text wordmark — "NEVER ENDING" in tiny tracked uppercase sans above "STORY" in blue serif capitals with the orange ellipse tucked behind its O. Right: four tracked uppercase links (Oferta, Realizacje, Proces, Kontakt) that grow an orange underline on hover, and a blue pill CTA reading „Napisz do nas". Below 880 px the links collapse into a hamburger that opens a full-screen white menu with oversized serif links; page scroll locks while it is open.

**Hero.** An eyebrow label „Agencja marketingowa" above a monumental serif headline: „Opowiadamy historie," in ink on the first line, „które *nie mają* końca." in blue on the second, with "nie mają" in italic. The orange ellipse behind the opening O pops in with a springy overshoot after load, then floats up and down forever. Beneath: a short grey lede, a blue pill button „Porozmawiajmy" next to an underlined arrow link „Zobacz realizacje", and a hairline-topped meta strip — Strategia · Kreacja · Komunikacja · W jednym zespole — separated by small orange dots. The whole hero enters as a staggered upward cascade.

**Marquee.** A full-width blue ribbon in which white serif uppercase service names (Strategia marki, Branding, Social media, Kampanie, Content, Storytelling, Performance) scroll endlessly leftward, separated by orange ellipses. Motion pauses on hover.

**Offer.** A section header („Wszystko, czego potrzebuje Twoja historia") with a short intro, followed by an editorial index: five full-width rows divided by hairlines. Each row holds a large serif service name on the left, a one-sentence description with small outlined tag chips in the middle, and a circular outlined arrow button on the right. On hover the row fills with mist, an orange dot slides in before the title, the title turns blue, and the arrow circle fills blue and rotates outward. Rows link to the contact section.

**Works.** On a mist background, „Wybrane historie": a two-by-two grid of case cards. Because real photography is pending, each cover is an abstract 4:3 composition built purely from brand shapes — one blue field with a huge orange ellipse, a thin white ring and an italic glyph; one white field with concentric blue rings around a small orange dot; one orange field dominated by a giant blue serif quotation mark and a layered disc; one ink field with a blue ellipse, an orange ring and an italic word. A white year chip sits in each cover's corner; on hover the artwork zooms slightly and a dark pill „Zobacz case study" fades up. Under each cover: a blue uppercase category line, a serif title, and a one-line result. A ghost button „Zobacz pełne portfolio" closes the section.

**Process.** „Jak piszemy Waszą historię" over a four-cell grid drawn with hairline borders. Each cell carries a large blue serif numeral, a tracked uppercase step name (Słuchamy, Planujemy, Tworzymy, Rozwijamy) and a short paragraph; the fourth numeral is an orange ∞. Cells tint to mist on hover.

**Manifesto.** A centered, oversized serif pull-quote about brands having stories worth telling, with its closing phrase set in blue, signed „— zespół Never Ending Story".

**Contact.** A full-bleed brand-blue block. White serif headline „Zacznijmy Twoją historię" terminated by the orange ellipse acting as the full stop. Left column: a short invitation, a white pill e-mail button and an outlined phone pill. Right column: a hairline-separated list of social profiles (Instagram, Facebook, LinkedIn, Behance) whose rows indent and turn orange on hover.

**Footer.** Back on white: the genuine logo image, an uppercase mini-navigation, and a hairline-topped base row with the copyright line and the italic serif tagline „Historie, które nie mają końca."

### 3.4 Motion

Animation is deliberate and sparse: the hero load cascade and floating ellipse, the marquee loop, gentle scroll-triggered reveals (fade plus a small upward shift) on every section, and the hover behaviors described above. When the visitor's system requests reduced motion, every animation and transition is disabled and all content is immediately visible — exactly as implemented in the prototype.

### 3.5 Responsive behavior

The layout is fluid inside a 1200-pixel container with breakpoints at 1400, 1020, 880 and 620 pixels: the process grid steps from four columns to two to one; the works grid stacks; offer rows rearrange into a two-area layout; navigation switches to the hamburger; paddings compress. Headline sizes scale fluidly between fixed minima and maxima. The prototype demonstrates all of this and must be matched at 1440, 1024, 768 and 375 pixels wide.

## 4. Site Structure

One route only — the homepage. Sticky navigation scrolls smoothly to anchored sections: Oferta, Realizacje, Proces, Kontakt. Sections reserve scroll offset so the fixed bar never covers their headings.

## 5. Content Rules

All copy is ported **verbatim, in Polish,** from the prototype. No text may be hardcoded inside components: services, case studies, process steps, social links and contact details live in one central, typed content module shaped like flat serializable data, so a future CMS can replace it without touching any component. The e-mail address, phone number and social URLs in the prototype are placeholders and must remain clearly marked as pending client input.

## 6. Technology and Tools the Agent Must Use

**Framework and language.** Scaffold with the official Next.js project generator, latest stable version, using the App Router, the source-directory layout and ESLint. Decline Tailwind during setup. Target Node 20 or newer and use npm as the package manager.

**Styling.** Hand-written CSS only: one global stylesheet holding the design tokens, reset, base typography and shared utilities, plus a scoped CSS Module per component. Forbidden: Tailwind, Bootstrap, component/UI kits, CSS-in-JS runtimes, and any animation library — all motion is plain CSS plus a single intersection observer.

**Fonts.** Load Bodoni Moda (regular and italic, with its optical-size axis) and Archivo through the framework's built-in Google Fonts mechanism so they are self-hosted with zero layout shift. Both must include the Latin Extended subset — Polish diacritics are non-negotiable — and be exposed as CSS variables consumed by the token system.

**Media and icons.** Serve raster images (the extracted logo, the social-share image) through the framework's image component with explicit dimensions. The decorative case covers remain pure CSS. Arrows and small glyphs are tiny inline SVGs written by hand; no icon packages.

**Interactivity budget.** Exactly two client-side components: the mobile menu toggle and the scroll-reveal observer. Everything else renders on the server. No state-management or utility libraries; runtime dependencies are the framework and React, nothing more.

**Quality tooling.** Prettier for formatting. A headless browser (Playwright or the agent's own browser tooling) to capture screenshots of both the app and the prototype at the four reference widths and compare them after every milestone. Lighthouse for performance, SEO and best-practice audits. An axe-core scan for accessibility. Git from the first commit, with one descriptive commit per milestone.

**Deployment.** Target Vercel with fully static prerendering; the site must also survive a plain static export, since it needs no server runtime.

## 7. Project Organization

Keep the shape conventional and boring. The root layout owns fonts, global metadata, structured data and the skip link; the single page route assembles the section components in visual order. Components live in a dedicated directory, one file plus one style module each: navigation with its mobile menu, the wordmark lockup, hero, marquee, the services index and its row, the works grid with its card and the four cover-art variants, process steps, manifesto, contact block, footer, and the reveal wrapper. The content module sits in its own directory. SEO artifacts — sitemap, robots rules, icons, the social-share image — follow the framework's file conventions. Commit the prototype into the repository under a design folder so future contributors keep the reference.

## 8. Build Workflow and Milestones

1. **Scaffold.** Generate the project, port the design tokens and global styles from the prototype, wire the fonts, set up layout and base metadata. Done when an empty page renders with the correct background, text color and both typefaces.
2. **Sections.** Build every section top to bottom, feeding all text from the content module. Done when side-by-side screenshots match the prototype at desktop and 375 pixels.
3. **Behavior.** Add the hero entrance, floating ellipse, marquee, scroll reveals, hover states, mobile menu with scroll lock, and the reduced-motion path. Done at interaction parity with the prototype.
4. **Hardening.** Complete the full SEO package from section 9, run the accessibility scan and a keyboard-only pass, then iterate until Lighthouse scores meet the budget.
5. **Launch readiness.** Production build with zero errors and warnings, deployment configuration, and a final visual regression pass at all four widths.

## 9. SEO Requirements — Priority: High

Strong organic visibility is an explicit business goal for this site. The agent must treat the following as requirements, not suggestions.

**Rendering and crawlability.** Every word of content ships in the initial static HTML; nothing meaningful may depend on client-side JavaScript to appear. Headings, navigation and links must be real text — the hero headline is live type, never an image. Anchor targets carry meaningful Polish identifiers and link labels are descriptive (never "click here").

**Metadata.** A unique title of roughly sixty characters leading with the brand and the primary phrase „agencja marketingowa"; a compelling Polish meta description of 150–160 characters naturally containing the service keywords; an absolute canonical URL and configured metadata base; correct locale declaration for Polish.

**Social sharing.** Full Open Graph coverage (type, locale, title, description, URL) plus a Twitter large-image card, both pointing to a dedicated 1200 × 630 share image that presents the logo on brand colors and is produced as part of this project.

**Structured data.** JSON-LD embedded in the document: an Organization entity (name, URL, logo, social profiles) combined with a ProfessionalService description of the agency and a WebSite entity. Postal address and geo data join the markup as soon as the client supplies them.

**Semantics and content.** One h1 on the page — the hero headline; each section introduced by an h2 in a logical outline; proper landmark regions for header, navigation, main and footer; alt text on the logo and share image; purely decorative artwork hidden from assistive technology and crawlers alike. Section copy already carries the target vocabulary — strategia marki, branding, social media, kampanie reklamowe, content marketing, storytelling — and must keep reading naturally, with no keyword stuffing.

**Technical files.** A generated sitemap and robots policy using framework conventions, a custom 404 page, a favicon set derived from the orange-ellipse mark including a touch icon, and a theme color matching the brand blue. URL behavior (trailing slashes, canonical host) must be consistent everywhere.

**Performance as a ranking signal.** Core Web Vitals are part of SEO: Largest Contentful Paint under two seconds on mobile (guaranteed by the text-based hero and self-hosted fonts), cumulative layout shift under 0.05 (fonts loaded with metric-compatible fallbacks, every image dimensioned), interaction latency well under 200 milliseconds given the near-zero JavaScript payload.

**Post-launch checklist for the owner.** Verify the property in Google Search Console, submit the sitemap, confirm indexation of the homepage, and validate the structured data with Google's rich-results tooling. The agent documents these steps in the project readme.

## 10. Accessibility

WCAG 2.1 AA. A skip link is the first focusable element; every interactive control shows a visible focus outline; the hamburger reports its expanded state to assistive technology; heading order is logical; color contrast passes throughout, which is why orange is decorative only; the site is fully operable by keyboard; the marquee, cover art, dots and step numerals are hidden from screen readers; reduced-motion preferences are honored globally.

## 11. Performance Budget

Lighthouse at 95 or above in all four categories on mobile. JavaScript shipped to the browser stays at the framework baseline — the only custom client code is the menu toggle and one observer. No render-blocking third-party resources of any kind.

## 12. Acceptance Criteria

- Screenshot comparison against `never-ending-story_1.html` shows no visible divergence at 1440, 1024, 768 and 375 pixels.
- All copy comes from the content module; components contain no literal Polish strings.
- Polish diacritics render correctly in both typefaces, verified on the contact headline.
- Keyboard-only walkthrough reaches every control with visible focus, including the mobile menu.
- Reduced-motion mode verified in the browser.
- Full SEO package from section 9 present and validated; Lighthouse budget met; production build clean with an empty console.

## 13. Out of Scope — Phase 2 Backlog

Individual case-study subpages, a headless CMS, a contact form with e-mail delivery and GDPR consent, analytics behind a cookie consent banner, an English locale, a blog, and real photography replacing the CSS cover art.

## 14. Required Inputs from the Client

Vector logo, final e-mail address and phone number, real social profile URLs, the production domain, the registered business address for structured data, and — for Phase 2 — case-study content and imagery.