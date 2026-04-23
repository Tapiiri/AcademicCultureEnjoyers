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
    title: 'ACE EuroSitsit Aachen',
    subtitle: 'A spring EuroSitsit in Westpark house spirit',
    dateLabel: 'Saturday, May 9, 2026',
    location: 'Aachen, Germany',
    description:
      'ACE EuroSitsit Aachen brings together academic culture enjoyers for an intimate spring sitsit in Aachen. Expect warm hospitality, a festive international atmosphere, good food, student songs, and a close-knit table setting designed for around 30 to 40 participants.',
    highlights: [
      'Planned venue: Westpark house',
      'Target capacity: 30–40 participants',
      'Preliminary ticket price target: around €20',
      'If interest exceeds capacity, the organizers will look into a bigger venue',
    ],
    status: 'Venue, signup, and final pricing details will be confirmed soon.',
  },
  {
    title: 'ACE EuroSitsit Lausanne',
    subtitle: 'An international evening of songs, traditions, and friendship',
    dateLabel: 'Saturday, May 23, 2026',
    location: 'Lausanne, Switzerland',
    description:
      'ACE EuroSitsit Lausanne continues the spring series with a celebration of European student culture in Lausanne. Join fellow guests from across Europe for a festive evening built around shared traditions, a welcoming international crowd, and the unmistakable atmosphere of a great sitsit.',
    highlights: [
      'International guests from across Europe',
      'Student songs, shared traditions, and a festive dinner setting',
      'A great chance to meet the ACE community in Switzerland',
      'More practical details and signup information will follow',
    ],
    status: 'Full program and signup information are on the way.',
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
