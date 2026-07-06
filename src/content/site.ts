export type NavLink = {
  label: string;
  href: string;
  portfolioHref: string;
  page?: "portfolio";
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

export type PortfolioWork = {
  index: string;
  name: string;
  category: string;
  description: string;
  tags: readonly string[];
  coverVariant: "v1" | "v2" | "v3" | "v4" | "v5";
  initials: string;
  href: string;
  photos: {
    primary: {
      src: string;
      alt: string;
    };
    hover?: {
      src: string;
      alt: "";
    };
  } | null;
  pendingClientInput: boolean;
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

function portfolioPhotos(
  name: string,
  primary: string,
  hover?: string,
): NonNullable<PortfolioWork["photos"]> {
  return {
    primary: {
      src: primary,
      alt: `Fotografia z realizacji dla marki ${name}`,
    },
    ...(hover
      ? {
          hover: {
            src: hover,
            alt: "",
          },
        }
      : {}),
  };
}

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
      { label: "Oferta", href: "#oferta", portfolioHref: "/#oferta" },
      { label: "Realizacje", href: "/realizacje", portfolioHref: "/realizacje", page: "portfolio" },
      { label: "Proces", href: "#proces", portfolioHref: "/#proces" },
      { label: "Kontakt", href: "#kontakt", portfolioHref: "/#kontakt" },
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
    lede: "Never Ending Story to agencja, która łączy strategię, kreację i komunikację. Budujemy marki, przy których odbiorcy zostają na dłużej — od pierwszego rozdziału po każdy kolejny.",
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
      href: "/realizacje",
    },
    cases: [
      {
        year: "2025",
        category: "Rebranding · Marka kosmetyczna",
        title: "Beauty od nowa",
        result:
          "Nowa identyfikacja i ton komunikacji, które przeniosły markę z półki „jedna z wielu” na „ta jedna”.",
        href: "/realizacje",
        coverVariant: "a1",
        coverGlyph: "Aa",
      },
      {
        year: "2026",
        category: "Kampania launchowa · E-commerce",
        title: "Premiera, która niesie",
        result:
          "Strategia wejścia na rynek i kampania 360°, która z premiery produktu zrobiła wydarzenie.",
        href: "/realizacje",
        coverVariant: "a2",
        coverGlyph: "№2",
      },
      {
        year: "2025",
        category: "Social media · Gastronomia",
        title: "Stolik pełen historii",
        result:
          "Codzienna komunikacja, która zamienia obserwujących w gości — a gości w stałych bywalców.",
        href: "/realizacje",
        coverVariant: "a3",
        coverGlyph: "”",
      },
      {
        year: "2024",
        category: "Content & wideo · Kultura",
        title: "Kultura w kadrze",
        result:
          "Seria materiałów wideo i kampania contentowa, która przyciągnęła nową, młodszą publiczność.",
        href: "/realizacje",
        coverVariant: "a4",
        coverGlyph: "Kadr",
      },
    ] satisfies readonly Work[],
  },
  portfolio: {
    path: "/realizacje",
    seo: {
      title: "Realizacje — Never Ending Story | Portfolio agencji marketingowej",
      description:
        "Szesnaście marek z gastronomii, beauty & wellness i lifestyle'u, którym pomagamy opowiadać się światu. Zobacz realizacje agencji Never Ending Story.",
    },
    hero: {
      eyebrow: "Realizacje",
      title: {
        firstLine: {
          firstLetter: "O",
          rest: "sobne historie,",
        },
        secondLine: {
          start: "wspólny",
          emphasis: "charakter",
          end: ".",
        },
      },
      lede: "Gastronomia, beauty i wellness — szesnaście marek, którym pomagamy opowiadać się światu. Pierwsze sześć rozdziałów znajdziesz od razu, kolejne doczytają się same, gdy będziesz scrollować.",
      meta: [
        { value: "16", label: "realizacji" },
        { value: "09", label: "gastronomia" },
        { value: "06", label: "beauty & wellness" },
        { value: "01", label: "lifestyle" },
      ],
    },
    gridAriaLabel: "Lista realizacji",
    viewLabel: "Zobacz historię →",
    initialVisibleCount: 6,
    batchSize: 5,
    loadingDelayMs: 700,
    revealStaggerMs: 110,
    loadingStatus: "Wczytujemy kolejne historie…",
    statusSuffix: "— scrolluj dalej",
    endcap: {
      symbol: "∞",
      heading: "To jeszcze nie koniec.",
      text: "Kolejny rozdział może należeć do Twojej marki. Opowiedz nam, gdzie jest dziś — my zaplanujemy, dokąd pójdzie.",
      action: {
        label: "Porozmawiajmy",
        href: "/#kontakt",
      },
    },
    works: [
      {
        index: "01",
        name: "Przestrzeń Holistyka",
        category: "Beauty & wellness",
        description:
          "Miejsce, w którym ciało i głowa łapią wspólny rytm — komunikacja spokojna jak oddech.",
        tags: ["Social media", "Content foto"],
        coverVariant: "v1",
        initials: "Ph",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Przestrzeń Holistyka",
          "/portfolio/przestrzen-holistyka-d9763580.jpg",
          "/portfolio/przestrzen-holistyka-8b280202.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "02",
        name: "AM Studio",
        category: "Beauty & wellness",
        description:
          "Studio urody z charakterem. Estetyka feedu dopięta jak stylizacje po wyjściu z fotela.",
        tags: ["Social media", "Identyfikacja"],
        coverVariant: "v2",
        initials: "Am",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "AM Studio",
          "/portfolio/am-studio-a86694ae.jpg",
          "/portfolio/am-studio-1b53b23a.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "03",
        name: "Przestrzeń Pilates",
        category: "Beauty & wellness",
        description: "Precyzja ruchu przełożona na precyzję komunikacji — kadr po kadrze.",
        tags: ["Social media", "Content wideo"],
        coverVariant: "v3",
        initials: "Pp",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Przestrzeń Pilates",
          "/portfolio/przestrzen-pilates-e3589a78.jpg",
          "/portfolio/przestrzen-pilates-ee3afcc9.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "04",
        name: "Calma",
        category: "Beauty & wellness",
        description: "Marka, która uczy zwalniać. Opowiadamy ją bez pośpiechu, ale konsekwentnie.",
        tags: ["Branding", "Social media"],
        coverVariant: "v4",
        initials: "Ca",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Calma",
          "/portfolio/calma-8de337a0.jpg",
          "/portfolio/calma-84bd67c0.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "05",
        name: "Health & Beauty",
        category: "Beauty & wellness",
        description: "Zdrowie i uroda w jednym kadrze — content, który buduje zaufanie.",
        tags: ["Content foto", "Social media"],
        coverVariant: "v5",
        initials: "Hb",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Health & Beauty",
          "/portfolio/health-and-beauty-03081890.jpg",
          "/portfolio/health-and-beauty-01871958.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "06",
        name: "Piękna Sprawa",
        category: "Beauty & wellness",
        description: "Piękna sprawa broni się sama — my dbamy, żeby usłyszało o niej całe miasto.",
        tags: ["Social media", "Kampanie"],
        coverVariant: "v1",
        initials: "Ps",
        href: "/#kontakt",
        photos: portfolioPhotos("Piękna Sprawa", "/portfolio/piekna-sprawa-348802ff.jpg"),
        pendingClientInput: true,
      },
      {
        index: "07",
        name: "Spiżarnia Gąski",
        category: "Gastronomia",
        description: "Lokalne smaki i spiżarniane klimaty — na półce i w sieci.",
        tags: ["Social media", "Content foto"],
        coverVariant: "v2",
        initials: "Sg",
        href: "/#kontakt",
        photos: portfolioPhotos("Spiżarnia Gąski", "/portfolio/spizarnia-gaski-2225ea7a.png"),
        pendingClientInput: true,
      },
      {
        index: "08",
        name: "Urban",
        category: "Lifestyle",
        description:
          "Miejski charakter i wyrazisty ton — komunikacja prosto z ulicy, nie z korporacji.",
        tags: ["Identyfikacja", "Social media"],
        coverVariant: "v3",
        initials: "Ur",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Urban",
          "/portfolio/urban-739c77ed.jpg",
          "/portfolio/urban-6e979fc7.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "09",
        name: "Sababa",
        category: "Gastronomia",
        description: "Izraelska kuchnia, która nie potrzebuje tłumaczenia — tylko dobrego kadru.",
        tags: ["Social media", "Content foto"],
        coverVariant: "v4",
        initials: "Sb",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Sababa",
          "/portfolio/sababa-cf4d4738.jpg",
          "/portfolio/sababa-dd39c46b.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "10",
        name: "Hamsa",
        category: "Gastronomia",
        description: "Bliskowschodnie smaki opowiadane z energią, którą czuć od progu.",
        tags: ["Social media", "Kampanie"],
        coverVariant: "v5",
        initials: "Hm",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Hamsa",
          "/portfolio/hamsa-fa14068b.jpg",
          "/portfolio/hamsa-2cc44fa8.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "11",
        name: "Boccanera",
        category: "Gastronomia",
        description:
          "Włoska dusza w mocnym, wyrazistym wydaniu — od identyfikacji po codzienny content.",
        tags: ["Identyfikacja", "Social media"],
        coverVariant: "v1",
        initials: "Bc",
        href: "/#kontakt",
        photos: portfolioPhotos("Boccanera", "/portfolio/boccanera-c5399d6a.jpg"),
        pendingClientInput: true,
      },
      {
        index: "12",
        name: "Szara Gęś Le Prive",
        category: "Gastronomia",
        description:
          "Fine dining za zamkniętymi drzwiami. Komunikacja szyta na miarę — jak wszystko tutaj.",
        tags: ["Strategia", "Content foto"],
        coverVariant: "v2",
        initials: "Lp",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Szara Gęś Le Prive",
          "/portfolio/szara-ges-le-prive-d882e72f.jpg",
          "/portfolio/szara-ges-le-prive-6b1e897f.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "13",
        name: "N’Pizza",
        category: "Gastronomia",
        description: "Pizza, która dobrze się dzieli — na kawałki i na posty.",
        tags: ["Social media", "Content foto"],
        coverVariant: "v3",
        initials: "N’",
        href: "/#kontakt",
        photos: portfolioPhotos("N’Pizza", "/portfolio/npizza-6529ed81.jpg"),
        pendingClientInput: true,
      },
      {
        index: "14",
        name: "Nolio Pop",
        category: "Gastronomia",
        description: "Neapol w wersji pop: szybkie tempo, głośne kolory, wyraziste kadry.",
        tags: ["Social media", "Kampanie"],
        coverVariant: "v4",
        initials: "No",
        href: "/#kontakt",
        photos: portfolioPhotos("Nolio Pop", "/portfolio/nolio-pop-3718daef.jpg"),
        pendingClientInput: true,
      },
      {
        index: "15",
        name: "Salute Bar",
        category: "Gastronomia",
        description: "Aperitivo po polsku — toast wznoszony codziennie, także online.",
        tags: ["Social media", "Content foto"],
        coverVariant: "v5",
        initials: "Sa",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Salute Bar",
          "/portfolio/salute-bar-2bb3b63d.jpg",
          "/portfolio/salute-bar-49fe0431.jpg",
        ),
        pendingClientInput: true,
      },
      {
        index: "16",
        name: "Franca",
        category: "Gastronomia",
        description: "Bistro z winem w tle. Historię opowiadamy kieliszek po kieliszku.",
        tags: ["Social media", "Content foto"],
        coverVariant: "v1",
        initials: "Fr",
        href: "/#kontakt",
        photos: portfolioPhotos(
          "Franca",
          "/portfolio/franca-3d0c296b.jpg",
          "/portfolio/franca-c009bcb9.jpg",
        ),
        pendingClientInput: true,
      },
    ] satisfies readonly PortfolioWork[],
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
    lede: "Opowiedz nam o swojej marce — o tym, gdzie jest i dokąd chce dojść. Wrócimy z pomysłem na pierwszy rozdział.",
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
