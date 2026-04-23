export type EventCard = {
  slug?: string;
  title: string;
  subtitle: string;
  dateLabel: string;
  location: string;
  description: string;
  highlights: string[];
  ctaLabel?: string;
  ctaHref?: string;
  status?: string;
};

export const upcomingEvents: EventCard[] = [
  {
    title: 'ACE Wappusitsit',
    subtitle: 'Celebrate Wappu together at Aalto University',
    dateLabel: 'Tuesday, April 28, 2026 · 18:00',
    location: 'Espoo, Finland',
    description:
      'Celebrate European student culture and friendship at ACE Wappusitsit on the Aalto University campus. International guests from across Europe will join for an evening of good food, drinks, songs, and excellent company, followed by an afterparty that continues late into the night.',
    highlights: [
      'Sitsit at Otakaari 20 upstairs, afterparty at Otakaari 20 downstairs',
      'Dress code: formal with academic accessories',
      'Price: €30, or €25 alcohol-free',
      'You can also join the organizing crew through the same signup form',
    ],
    status: 'Signup and event details coming soon.',
  },
  {
    slug: '/events/eurositsit',
    title: 'ACE EuroSitsit Aachen',
    subtitle: 'Sitsit comes to Central Europe — food, drink, and song in Aachen',
    dateLabel: 'Saturday, May 9, 2026 · 18:00–23:00',
    location: 'Aachen, Germany',
    description:
      'The first ACE sitsit outside Finland! Join us at the house of Burschenschaft Westmark for an evening of great food, drinks, group singing, and international company. No experience needed — just show up and have fun.',
    highlights: [
      'Venue: Melatener Weg 22, Aachen (Burschenschaft Westmark im SB zu Aachen)',
      'Ticket: €30 — includes three-course meal, wine, schnapps, and beer',
      'Dresscode: Cocktail / Elegant (not strict — no t-shirts)',
      'Signup open until April 30, 2026',
    ],
    ctaLabel: 'View event & sign up',
    ctaHref: '/events/eurositsit#aachen',
  },
  {
    slug: '/events/eurositsit',
    title: 'ACE EuroSitsit Lausanne',
    subtitle: 'An international evening of songs, traditions, and friendship',
    dateLabel: 'Saturday, May 23, 2026 · 18:00–23:30',
    location: 'Lausanne, Switzerland',
    description:
      'A collaboration between the Palud 23 crew and Academic Culture Enjoyers — an evening of shared sitsit traditions, good food, international company, and student songs. Whether you know sitsit well or are discovering it for the first time, you are welcome.',
    highlights: [
      'Venue: Place de la Palud 23, 1003 Lausanne',
      'Ticket: 30 CHF',
      'Dresscode: Cocktail / Elegant (not strict — no t-shirts)',
      'Signup open until May 14, 2026',
      'Bring a drink from your country or region to share — optional!',
    ],
    ctaLabel: 'View event & sign up',
    ctaHref: '/events/eurositsit#lausanne',
  },
];

export const pastEvents: EventCard[] = [
  {
    slug: '/events/thomastag-2025',
    title: 'Thomastag 2025',
    subtitle: 'Southern German Traditions Weekend',
    dateLabel: 'December 19–21, 2025',
    location: 'Nürnberg, Germany',
    description:
      'A weekend in Nürnberg focused on Southern German student traditions, including a Kommers, fraternity visits, and the Thomastag celebrations with local hosts and partners.',
    highlights: [
      'Hosted with Onoldia and the Schwarzburgbund',
      'Included a city tour, Kommers, and Thomasbummel traditions',
      'Event page remains available with the full program and background information',
    ],
    ctaLabel: 'View event page',
    ctaHref: '/events/thomastag-2025',
  },
];
