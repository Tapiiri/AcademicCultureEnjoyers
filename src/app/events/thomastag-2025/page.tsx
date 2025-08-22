import ClientImageWithCarousel from '@/components/ClientImageWithCarousel';
import HeroVideoWithModal from '@/components/HeroVideoWithModal';
import {
  THOMASTAG_SIGNUP_CLOSES_TEXT,
  THOMASTAG_SIGNUP_OPENS_TEXT,
} from '@/lib/thomastag';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thomastag 2025 – Southern German Traditions Weekend',
  description:  
    'Join Academic Culture Enjoyers in Nürnberg, 19–21 December 2025, for a weekend of student traditions and holiday spirit.',
  keywords: [
    'Thomastag',
    'Nürnberg',
    'student traditions',
    'academic culture',
    'kommers',
    'event',
  ],
  alternates: { canonical: '/events/thomastag-2025' },
  openGraph: {
    title: 'Thomastag 2025 – Southern German Traditions Weekend',
    description:
      'Join Academic Culture Enjoyers in Nürnberg, 19–21 December 2025, for a weekend of student traditions and holiday spirit.',
    url: 'https://academiccultureenjoyers.org/events/thomastag-2025',
    siteName: 'Academic Culture Enjoyers',
    images: [
      {
        url: 'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg?tr=w-1200,h-630,c-at_max',
        width: 1200,
        height: 630,
        alt: 'City of Nürnberg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomastag 2025 – Southern German Traditions Weekend',
    description:
      'Join Academic Culture Enjoyers in Nürnberg, 19–21 December 2025, for a weekend of student traditions and holiday spirit.',
    images: [
      'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg?tr=w-1200,h-630,c-at_max',
    ],
  },
};

export default function Thomastag2025Page() {
  // Define all event images for the carousel
  const eventImages = [
    {
      src: "https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/train_slowed_loop.mp4",
      alt: "Wonders of Onoldia",
      caption: "Wonders of Onoldia — Video: Aleksandra",
      width: 482,
      height: 592,
      type: "video" as const,
      poster: "https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/train-poster.jpg",
    },
    {
      src: "https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg?tr=w-1800,h-500,c-at_max",
      alt: "Nuremberg",
      caption: "Nuremberg — Photo: Thomas F.A.N",
      width: 1800,
      height: 500,
      crop: true,
      fullSrc:
        'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg',
      fullWidth: 4000,
      fullHeight: 867,
    },
    {
      src: 'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/castle.jpg?tr=w-500,h-315,c-at_max',
      alt: 'City walls of Nuremberg',
      caption: 'City walls of Nuremberg — Photo: Thomas F.A.N',
      width: 500,
      height: 315,
      crop: false,
      fullSrc:
      'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/castle.jpg',
      fullWidth: 2048,
      fullHeight: 1287,
    },
    {
      src: 'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/tower.jpg?tr=w-700,h-440,c-at_max',
      alt: 'A tower of the city wall',
      caption: 'A tower of the city walls — Photo: Thomas F.A.N',
      width: 700,
      height: 440,
      crop: false,
      fullSrc:
      'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/tower.jpg',
      fullWidth: 2048,
      fullHeight: 1365,
    },
    {
      src: 'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/river.jpg?tr=w-768,h-400,c-at_max',
      alt: 'The Regnitz River',
      caption: 'The Regnitz River — Photo: Thomas F.A.N',
      width: 768, // max-w-3xl = 768px
      height: 400,
      crop: true,
      fullSrc:
        'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/river.jpg',
      fullWidth: 2048,
      fullHeight: 1287,
    },
  ];
  return (
    <div className="relative">
      {/* Backdrop image for the whole page */}
      <div
        aria-hidden="true"
        className="event-bg-cityscape pointer-events-none absolute top-0 left-0 z-0 w-full h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.0) 100%), url(https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg?tr=w-1800,h-1100,c-at_max)',
          maskImage:
            'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 70%, transparent 100%)',
        }}
      />
      <main className="event-dark-section relative z-10 mx-auto max-w-3xl p-0 bg-white/90 dark:bg-[#181c24] rounded-lg shadow-md">

      {/* Hero section with clickable video background and modal, width matches content */}
      <section className="max-w-3xl mx-auto">
        <HeroVideoWithModal images={eventImages} index={0}>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 mt-10 md:mt-20">
            Thomastag: Southern German Traditions Weekend
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 drop-shadow mb-2">
            19–21 December 2025 · Nürnberg, Germany
          </p>
        </HeroVideoWithModal>
      </section>

      {/* Top call-to-action */}
      <section className="mb-8 px-4 md:px-8 flex justify-center">
        <Link
          href="https://signup.academicculture.org/events/thomastag-2025"
          className="rounded bg-yellow-300 px-6 py-3 font-semibold text-gray-900 hover:bg-yellow-400"
        >
          {`Sign up here, opens ${THOMASTAG_SIGNUP_OPENS_TEXT}`}
        </Link>
      </section>

      <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">What is Thomastag?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Thomastag is the German holiday that marks the shortest day of the
          year—but in Nürnberg, it’s especially known as a day of longstanding
          student tradition.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          The <em>Traditional Association of Student Customs Nuremberg</em>{' '}
          (Traditionsverein Studentisches Brauchtum Nürnberg e.V., or TSBN)
          describes the history of the event as follows:
        </p>
        <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 text-gray-700 italic dark:text-gray-300">
          <p>
            The St. Thomas Stroll is an old Nuremberg tradition that dates back
            to the 17th century. Students from the University of Erlangen (now
            Friedrich-Alexander University), founded in 1742, would travel to
            the city on the last weekend before Christmas, either because they
            were living there or because they were traveling home from there by
            carriage. December 21st was not only dedicated to St. Thomas, but
            was also one of Nuremberg’s four market days. This custom gave rise
            to the Christkindlesmarkt in the 17th century.
          </p>
          <p className="mt-2">
            The students enjoyed this weekend celebrating together one last time
            and shopping before their journey home. They visited numerous Thomas
            pubs and later strolled together through Nuremberg’s city center and
            the Christmas market.
          </p>
        </blockquote>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          To this day, Thomastag is celebrated among the student fraternities of
          Nürnberg, and this year, the Academic Culture Enjoyers are proud to
          have been invited by the hosting fraternity Onoldia and the
          Schwarzburgbund to participate in this particularly traditional event
          of student culture!
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {`Below, you will find detailed information about the event. Sign-up starts ${THOMASTAG_SIGNUP_OPENS_TEXT} — sign up by ${THOMASTAG_SIGNUP_CLOSES_TEXT} to join us for the first big trip by Academic Culture Enjoyers!`}
        </p>
        <p className="mt-2 text-sm text-gray-600 italic dark:text-gray-400">
          NOTE: You’ll need to book your own flights — while the event
          participation, program and accommodation are being organised by ACE,
          flights and some meals are not included.
        </p>
      </section>

  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">
          Who is organizing this event?
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          The event is organized by members of ACE in cooperation with a local
          fraternity, Akademische Verbindung Landsmannschaft Onoldia Altdorf zu
          Nürnberg (Onoldia for short). Onoldia and their parent organization,
          Schwarzburgbund, will be holding a formal traditional event, the
          Kommers, and have invited us as guests. Additionally, after the
          Kommers many fraternity houses, including Onoldia, will open their
          doors to visitors. Many other friendly fraternities will be attending
          as well, giving you great opportunities to make connections with more
          organizations and people. The Thomasbummel on Sunday will be organized
          by the Schwarzburgbund.
        </p>
      </section>

      <div className="float-right mb-6 ml-6">
        <ClientImageWithCarousel
          images={eventImages}
          index={2}
          width={500}
          height={315}
          className="w-full"
          crop={false}
        />
      </div>
  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">Program Overview</h2>
        <h3 className="mb-1 font-semibold">Friday 19 Dec</h3>
        <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Arrival in Nuremberg (Recommended)</li>
          <li>Group check-in to the hostel (time TBA)</li>
          <li>
            Welcome evening: group dinner & beers (restaurant booking by ACE)
          </li>
        </ul>
        <h3 className="mb-1 font-semibold">Saturday 20 Dec</h3>
        <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Arrival in Nuremberg (Latest)</li>
          <li>
            Guided tour of Nürnberg with a local expert (history, culture,
            hidden gems)
          </li>
          <li>
            Time to explore the city’s many cultural and historical treasures on
            your own. A list of notable destinations will be provided.
          </li>
          <li>Kommers (formal, festive German-styled sitsit)</li>
          <li>
            Bummel – visiting local student fraternities late into the night
          </li>
        </ul>
        <h3 className="mb-1 font-semibold">Sunday 21 Dec</h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Nürnberg Christmas Market visit</li>
          <li>Thomasbummel with Schwarzburgbund</li>
          <li>Return flights (luggage room available at hostel)</li>
        </ul>
      </section>

  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">What does it cost?</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Accommodation</strong> (hostel, shared rooms): €100
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Flights</strong>: €220–€400 round trip from Helsinki
          (recommendations available from organizers)
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Total estimate: ~€320–500 per person.
        </p>
      </section>

      <div className="float-right mb-6 ml-6">
        <ClientImageWithCarousel
          images={eventImages}
          index={3}
          width={700}
          height={440}
          className="w-full"
          crop={false}
        />
      </div>
  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">Accommodation</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We’ll stay in a hostel in Nürnberg, in shared dorm-style rooms with
          four beds each. We will try to match participants according to their
          preferences informed in the signup. Beds are reserved for our group,
          and breakfast is included. The hostel also provides luggage storage
          for departure day. The hostel is part of the historic castle of
          Nürnberg, highly rated and has a great view over the city and is close
          to many of the main attractions. More info:{' '}
          <a href="http://nuernberg.jugendherberge.de/">
            http://nuernberg.jugendherberge.de/
          </a>
        </p>
      </section>

  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">Who can join?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Open to all members of the Academic Culture Enjoyers community
          (students & alumni)!
        </p>
      </section>

  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">Practical Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            Dress code for Kommers: festive/dark suit or equivalent (formal
            wear)
          </li>
          <li>
            Weather: December in Nürnberg is cold (0–5°C). Bring a warm coat,
            gloves, and shoes suitable for walking.
          </li>
          <li>
            Cash is king in Germany; make sure you carry enough. A meal costs
            about €20, a beer or Glühwein about €5.
          </li>
          <li>
            The old town is small enough to walk everywhere, but we will share
            information about local transport ticket options closer to the date.
          </li>
        </ul>
      </section>

  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">Sign-up & Payments</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>{`Sign-up opens: ${THOMASTAG_SIGNUP_OPENS_TEXT}`}</li>
          <li>{`Sign-up deadline: ${THOMASTAG_SIGNUP_CLOSES_TEXT} (or until full)`}</li>
          <li>
            Sign-up will be binding after its closing deadline has passed.
          </li>
          <li>Hostel payment: €100 within 7 days of sign-up closing</li>
          <li>
            Cancellation policy and payment details will be shared after
            sign-up.
          </li>
        </ul>
      </section>

  <section className="mb-8 px-4 md:px-8">
        <h2 className="mb-2 text-2xl font-semibold">Cultural Etiquette</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We are guests of Onoldia and the Schwarzburgbund. Respectful behavior
          is expected at all times — especially during fraternity visits.
        </p>
      </section>


      <div className="flex justify-center">
        <ClientImageWithCarousel
          images={eventImages}
          index={4}
          className="w-full max-w-3xl max-h-[60vh] object-cover mx-auto"
          crop={true}
        />
      </div>

      <SignupSection />
    </main>
  </div>
  );
}

function SignupSection() {
  return (
    <section className="text-center">
      <h2 className="mb-4 text-2xl font-semibold">Ready to join?</h2>
      <Link
        href="https://signup.academicculture.org/events/thomastag-2025"
        className="rounded bg-yellow-300 px-6 py-3 font-semibold text-gray-900 hover:bg-yellow-400"
      >
        {`Sign up here, opens ${THOMASTAG_SIGNUP_OPENS_TEXT}`}
      </Link>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Seats are limited to 30 — first come, first served.
      </p>
      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
        We only use your info for organizing events, share it only when
        necessary (e.g. hostel bookings), and delete it after.{' '}
        <Link href="/privacy" className="underline">
          Full privacy notice
        </Link>
        .
      </p>
    </section>
  );
}
