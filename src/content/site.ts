export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  tags: readonly string[];
  href: string;
  ariaLabel: string;
};

export type Work = {
  year: string;
  category: string;
  title: string;
  result: string;
  href: string;
  coverVariant: "a1" | "a2" | "a3" | "a4";
  coverGlyph: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  isLoop?: boolean;
};

export type ContactLink = {
  label: string;
  detail: string;
  href: string;
  pendingClientInput: boolean;
};

export const siteContent = {
  brand: {
    name: "Never Ending Story",
    shortName: "Never Ending Story",
    siteUrl: "https://neverendingstory.pl",
    themeColor: "#4358E2",
    wordmark: {
      top: "Never Ending",
      beforeO: "St",
      o: "o",
      afterO: "ry",
      homeLabel: "Never Ending Story — strona główna",
      backToTopLabel: "Never Ending Story — do góry",
    },
    logo: {
      src: "/brand-logo.png",
      alt: "Logo Never Ending Story",
      width: 230,
      height: 79,
    },
  },
  seo: {
    title: "Never Ending Story — agencja marketingowa dla marek",
    description:
      "Never Ending Story to agencja marketingowa: strategia marki, branding, social media, kampanie reklamowe i content marketing dla marek z historią bez końca.",
    ogImage: {
      src: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Never Ending Story — agencja marketingowa",
    },
    locale: "pl_PL",
    type: "website",
  },
  skipLink: "Przejdź do treści",
  navigation: {
    ariaLabel: "Nawigacja główna",
    mobileAriaLabel: "Menu mobilne",
    mobileMenuId: "menu-mobilne",
    openMenuLabel: "Otwórz menu",
    closeMenuLabel: "Zamknij menu",
    cta: {
      label: "Napisz do nas",
      href: "#kontakt",
    },
    links: [
      { label: "Oferta", href: "#oferta" },
      { label: "Realizacje", href: "#realizacje" },
      { label: "Proces", href: "#proces" },
      { label: "Kontakt", href: "#kontakt" },
    ] satisfies readonly NavLink[],
  },
  hero: {
    eyebrow: "Agencja marketingowa",
    title: {
      firstLine: {
        firstLetter: "O",
        rest: "powiadamy historie,",
      },
      secondLine: {
        start: "które",
        emphasis: "nie mają",
        end: "końca.",
      },
    },
    lede:
      "Never Ending Story to agencja, która łączy strategię, kreację i komunikację. Budujemy marki, przy których odbiorcy zostają na dłużej — od pierwszego rozdziału po każdy kolejny.",
    primaryAction: {
      label: "Porozmawiajmy",
      href: "#kontakt",
    },
    secondaryAction: {
      label: "Zobacz realizacje",
      href: "#realizacje",
    },
    meta: ["Strategia", "Kreacja", "Komunikacja", "W jednym zespole"],
  },
  marquee: {
    items: [
      "Strategia marki",
      "Branding",
      "Social media",
      "Kampanie",
      "Content",
      "Storytelling",
      "Performance",
    ],
  },
  offer: {
    id: "oferta",
    eyebrow: "Oferta",
    headingLines: ["Wszystko, czego potrzebuje", "Twoja historia"],
    intro:
      "Nie sprzedajemy pojedynczych usług. Składamy je w spójną opowieść o marce — od fundamentu po codzienną komunikację.",
    services: [
      {
        title: "Strategia marki",
        description: "Pozycjonowanie, ton komunikacji i plan, który naprawdę da się zrealizować.",
        tags: ["badania", "pozycjonowanie", "strategia komunikacji"],
        href: "#kontakt",
        ariaLabel: "Strategia marki — zapytaj o ofertę",
      },
      {
        title: "Branding i identyfikacja",
        description: "Logo, key visual i system, który spina markę w rozpoznawalną całość.",
        tags: ["logo", "key visual", "brand book"],
        href: "#kontakt",
        ariaLabel: "Branding i identyfikacja — zapytaj o ofertę",
      },
      {
        title: "Social media",
        description:
          "Prowadzenie kanałów od strategii po codzienny content i rozmowę ze społecznością.",
        tags: ["content plan", "publikacje", "community"],
        href: "#kontakt",
        ariaLabel: "Social media — zapytaj o ofertę",
      },
      {
        title: "Kampanie i performance",
        description: "Reklama, która wynika z historii marki — i z danych, które ją potwierdzają.",
        tags: ["Meta & Google Ads", "analityka", "optymalizacja"],
        href: "#kontakt",
        ariaLabel: "Kampanie i performance — zapytaj o ofertę",
      },
      {
        title: "Content i storytelling",
        description: "Teksty, zdjęcia i wideo, które ludzie chcą oglądać do samego końca.",
        tags: ["copywriting", "foto / wideo", "scenariusze"],
        href: "#kontakt",
        ariaLabel: "Content i storytelling — zapytaj o ofertę",
      },
    ] satisfies readonly Service[],
  },
  works: {
    id: "realizacje",
    eyebrow: "Realizacje",
    heading: "Wybrane historie",
    intro:
      "Każdy projekt to osobny rozdział. Poniżej kilka z tych, które opowiadamy z największą przyjemnością.",
    viewLabel: "Zobacz case study",
    portfolioAction: {
      label: "Zobacz pełne portfolio",
      href: "#kontakt",
    },
    cases: [
      {
        year: "2025",
        category: "Rebranding · Marka kosmetyczna",
        title: "Beauty od nowa",
        result:
          "Nowa identyfikacja i ton komunikacji, które przeniosły markę z półki „jedna z wielu” na „ta jedna”.",
        href: "#kontakt",
        coverVariant: "a1",
        coverGlyph: "Aa",
      },
      {
        year: "2026",
        category: "Kampania launchowa · E-commerce",
        title: "Premiera, która niesie",
        result:
          "Strategia wejścia na rynek i kampania 360°, która z premiery produktu zrobiła wydarzenie.",
        href: "#kontakt",
        coverVariant: "a2",
        coverGlyph: "№2",
      },
      {
        year: "2025",
        category: "Social media · Gastronomia",
        title: "Stolik pełen historii",
        result:
          "Codzienna komunikacja, która zamienia obserwujących w gości — a gości w stałych bywalców.",
        href: "#kontakt",
        coverVariant: "a3",
        coverGlyph: "”",
      },
      {
        year: "2024",
        category: "Content & wideo · Kultura",
        title: "Kultura w kadrze",
        result:
          "Seria materiałów wideo i kampania contentowa, która przyciągnęła nową, młodszą publiczność.",
        href: "#kontakt",
        coverVariant: "a4",
        coverGlyph: "Kadr",
      },
    ] satisfies readonly Work[],
  },
  process: {
    id: "proces",
    eyebrow: "Proces",
    headingLines: ["Jak piszemy", "Waszą historię"],
    intro: "Cztery etapy — z tym, że ostatni nigdy się nie kończy. Stąd nazwa.",
    steps: [
      {
        number: "01",
        title: "Słuchamy",
        description:
          "Brief, badania i audyt. Zanim cokolwiek powiemy, chcemy dobrze poznać markę, rynek i odbiorców.",
      },
      {
        number: "02",
        title: "Planujemy",
        description:
          "Strategia, pozycjonowanie i plan działań z konkretnymi celami — żeby kreacja miała kierunek.",
      },
      {
        number: "03",
        title: "Tworzymy",
        description:
          "Kreacja, produkcja i wdrożenie: od identyfikacji, przez content, po kampanie reklamowe.",
      },
      {
        number: "∞",
        title: "Rozwijamy",
        description:
          "Analizujemy wyniki, optymalizujemy działania i piszemy kolejne rozdziały. Ta część nie ma końca.",
        isLoop: true,
      },
    ] satisfies readonly ProcessStep[],
  },
  manifesto: {
    eyebrow: "Manifest",
    quoteStart:
      "„Każda marka ma historię wartą opowiedzenia. Naszą pracą jest sprawić, by świat chciał jej",
    quoteBlue: "słuchać — i wracać po więcej",
    quoteEnd: ".”",
    signature: "— zespół Never Ending Story",
  },
  contact: {
    id: "kontakt",
    eyebrow: "Kontakt",
    heading: "Zacznijmy Twoją historię",
    lede:
      "Opowiedz nam o swojej marce — o tym, gdzie jest i dokąd chce dojść. Wrócimy z pomysłem na pierwszy rozdział.",
    email: {
      label: "hello@neverendingstory.pl",
      href: "mailto:hello@neverendingstory.pl",
      pendingClientInput: true,
    },
    phone: {
      label: "+48 000 000 000",
      href: "tel:+48000000000",
      pendingClientInput: true,
    },
    socials: [
      {
        label: "Instagram",
        detail: "@neverendingstory",
        href: "#",
        pendingClientInput: true,
      },
      {
        label: "Facebook",
        detail: "/neverendingstory",
        href: "#",
        pendingClientInput: true,
      },
      {
        label: "LinkedIn",
        detail: "/never-ending-story",
        href: "#",
        pendingClientInput: true,
      },
      {
        label: "Behance",
        detail: "/neverendingstory",
        href: "#",
        pendingClientInput: true,
      },
    ] satisfies readonly ContactLink[],
  },
  footer: {
    copyright: "© 2026 Never Ending Story. Wszelkie prawa zastrzeżone.",
    tagline: "Historie, które nie mają końca.",
  },
  notFound: {
    title: "Nie znaleziono strony",
    intro: "Ta historia nie ma jeszcze własnego adresu.",
    action: {
      label: "Wróć na stronę główną",
      href: "/",
    },
  },
  postLaunchChecklist: [
    "Zweryfikować domenę w Google Search Console.",
    "Przesłać sitemapę z adresu /sitemap.xml.",
    "Potwierdzić indeksację strony głównej.",
    "Sprawdzić dane strukturalne w narzędziu Google Rich Results.",
  ],
} as const;

export type SiteContent = typeof siteContent;
