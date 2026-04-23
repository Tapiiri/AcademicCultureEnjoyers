import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EuroSitsit Spring 2026 – Academic Culture Enjoyers',
  description:
    'ACE brings the Finnish academic table party tradition to Central Europe — two spring sitsit events in Aachen (May 9) and Lausanne (May 23), 2026.',
  keywords: [
    'sitsit',
    'EuroSitsit',
    'Aachen',
    'Lausanne',
    'academic culture',
    'student traditions',
    'table party',
    'ACE',
  ],
  alternates: { canonical: '/events/eurositsit' },
  openGraph: {
    title: 'EuroSitsit Spring 2026 – Academic Culture Enjoyers',
    description:
      'ACE brings the Finnish academic table party tradition to Central Europe — two spring sitsit events in Aachen (May 9) and Lausanne (May 23), 2026.',
    url: 'https://academiccultureenjoyers.org/events/eurositsit',
    siteName: 'Academic Culture Enjoyers',
  },
};

const SITSIT_BG =
  'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/Sitsit.jpg';

const AACHEN_SIGNUP_HREF = 'https://signup.academicculture.org/events/eurositsitaachen';
const LAUSANNE_SIGNUP_HREF = 'https://signup.academicculture.org/events/eurositsitlausanne';

export default function EuroSitsitPage() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 z-0 h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          left: '-70px',
          right: '-70px',
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.0) 100%), url(${SITSIT_BG}?tr=w-1800,h-1100,c-at_max)`,
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 70%, transparent 100%)',
        }}
      />
      <main className="relative z-10 mx-auto max-w-3xl p-0 bg-white/90 dark:bg-[#181c24] rounded-lg shadow-md">

        {/* Hero */}
        <section className="px-4 pt-10 pb-8 md:px-8 md:pt-16 text-center">
          <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            Academic Culture Enjoyers · Spring 2026
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            EuroSitsit
          </h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
            Sitsit are coming to Central Europe — two evenings of food, drink,
            and song in Aachen and Lausanne.
          </p>
        </section>

        {/* Top CTAs */}
        <section className="mb-10 px-4 md:px-8">
          <p className="mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400">
            Sign up for an event
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <EventCta
              city="Aachen"
              date="Saturday, May 9"
              price="€30"
              signupDeadline="April 30, 2026"
              href={AACHEN_SIGNUP_HREF}
              open
            />
            <EventCta
              city="Lausanne"
              date="Saturday, May 23"
              price="30 CHF"
              signupDeadline="May 14, 2026"
              href={LAUSANNE_SIGNUP_HREF}
              open
            />
          </div>
        </section>

        {/* What is a sitsit */}
        <section className="mb-8 px-4 md:px-8">
          <h2 className="mb-2 text-2xl font-semibold">What is a sitsit?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Sitsit is a table party with drinks, food and singing practiced by Finnish
            university students and alumni. It&apos;s definitely similar to other events
            like it across Europe, but it especially shines in its adaptability — in
            such a way that we think anyone can enjoy it!
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Despite the sitsit including songs and group singing, you don&apos;t need to
            know how to sing — it&apos;s just for having fun. You also don&apos;t need
            to know or prepare anything in advance. Just show up.
          </p>
        </section>

        {/* Who is ACE */}
        <section className="mb-8 px-4 md:px-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Who is Academic Culture Enjoyers?
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Academic Culture Enjoyers is a loose organization of people within Europe
            who like to share and learn about student cultures of Europe, and in general
            to have a great time together. The group grew out of teekkari circles in
            Finland and now gathers people from many European countries who visit each
            other&apos;s events to share and discover traditions.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            The EuroSitsit spring series is the first time ACE is organizing sitsit
            outside of Finland — but it surely won&apos;t be the last.
          </p>
        </section>

        <hr className="mx-4 md:mx-8 border-gray-200 dark:border-gray-700 my-8" />

        {/* Aachen */}
        <section id="aachen" className="relative overflow-hidden mb-8 px-4 md:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
            style={{
              backgroundImage: `url(https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/Sunset_in_Aachen.jpg?tr=w-600,h-400,c-at_max)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.18,
              maskImage: 'linear-gradient(to right, transparent 0%, black 60%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 60%)',
            }}
          />
          <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            Saturday, May 9, 2026 · 18:00–23:00
          </p>
          <h2 className="mt-1 mb-4 text-3xl font-bold">EuroSitsit Aachen</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The first ever ACE sitsit outside Finland takes place at the house of a
            German fraternity in Aachen. Expect warm fraternity hospitality, an
            international crowd, and a festive three-course dinner.
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Venue:</strong>{' '}
              <a
                href="https://maps.google.com/?q=Melatener+Weg+22,+Aachen,+Germany"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Melatener Weg 22, Aachen
              </a>{' '}
              — Burschenschaft Westmark im SB zu Aachen
            </li>
            <li>
              <strong>Ticket:</strong> €30 — three-course meal, wine, schnapps, and beer
            </li>
            <li>
              <strong>Dresscode:</strong> Cocktail / Elegant — not strict, but no t-shirts
            </li>
            <li>
              <strong>Signup closes:</strong> April 30, 2026
            </li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Sitsit starts at 18:00 sharp — please be on time! The evening runs until
            around 23:00.
          </p>
          <div className="mt-6">
            <Link
              href={AACHEN_SIGNUP_HREF}
              className="inline-block rounded bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Sign up for Aachen
            </Link>
          </div>
        </section>

        <hr className="mx-4 md:mx-8 border-gray-200 dark:border-gray-700 my-8" />

        {/* Lausanne */}
        <section id="lausanne" className="relative overflow-hidden mb-8 px-4 md:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
            style={{
              backgroundImage: `url(https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/Sitsit.jpg?tr=w-600,h-400,c-at_max)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.18,
              maskImage: 'linear-gradient(to right, transparent 0%, black 60%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 60%)',
            }}
          />
          <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            Saturday, May 23, 2026 · 18:00–23:30
          </p>
          <h2 className="mt-1 mb-4 text-3xl font-bold">EuroSitsit Lausanne</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Lausanne edition is a collaboration between the Palud 23 crew and
            Academic Culture Enjoyers — a meeting of local sitsit culture and the wider
            ACE tradition. The event will mainly be in English and animated by people
            from both sides.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            In the spirit of cultural exchange, you are invited — if you wish — to bring
            a drink from your country or region to share during the event. It can be
            alcohol, wine, a soft drink, or anything else you have in mind. This is
            entirely optional.
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Venue:</strong>{' '}
              <a
                href="https://maps.google.com/?q=Place+de+la+Palud+23,+1003+Lausanne"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Place de la Palud 23, 1003 Lausanne
              </a>
            </li>
            <li>
              <strong>Ticket:</strong> 30 CHF
            </li>
            <li>
              <strong>Dresscode:</strong> Cocktail / Elegant — not strict, but no t-shirts
            </li>
            <li>
              <strong>Signup closes:</strong> May 14, 2026
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href={LAUSANNE_SIGNUP_HREF}
              className="inline-block rounded bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Sign up for Lausanne
            </Link>
          </div>
        </section>

        <hr className="mx-4 md:mx-8 border-gray-200 dark:border-gray-700 my-8" />

        {/* Contact & Community */}
        <section className="mb-8 px-4 md:px-8">
          <h2 className="mb-2 text-2xl font-semibold">Questions & community</h2>
          <p className="text-gray-700 dark:text-gray-300">
            For any questions about the events, contact the organizers at{' '}
            <a href="mailto:ilmari.tarpla@outlook.com" className="underline">
              ilmari.tarpla@outlook.com
            </a>{' '}
            or <span className="font-medium">@tapiiri</span> on Telegram.
          </p>
          <h2 className="mt-6 mb-2 text-2xl font-semibold">Stay in the loop</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Want to learn more about Academic Culture Enjoyers or stay up to date on
            coming events? Join the{' '}
            <a
              href="https://t.me/+Rc4xHXDsFkswOWY8"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACE Telegram group
            </a>
            .
          </p>
        </section>

        {/* Bottom CTAs */}
        <section className="mb-10 px-4 md:px-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">See you at the sitsit!</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <EventCta
              city="Aachen"
              date="Saturday, May 9"
              price="€30"
              signupDeadline="April 30, 2026"
              href={AACHEN_SIGNUP_HREF}
              open
            />
            <EventCta
              city="Lausanne"
              date="Saturday, May 23"
              price="30 CHF"
              signupDeadline="May 14, 2026"
              href={LAUSANNE_SIGNUP_HREF}
              open
            />
          </div>
          <p className="mt-6 text-xs text-gray-600 dark:text-gray-400">
            We only use your info for organizing events, share it only when necessary,
            and delete it after.{' '}
            <Link href="/privacy" className="underline">
              Full privacy notice
            </Link>
            .
          </p>
        </section>

      </main>
    </div>
  );
}

function EventCta({
  city,
  date,
  price,
  signupDeadline,
  href,
  open,
}: {
  city: string;
  date: string;
  price: string;
  signupDeadline?: string;
  href: string;
  open: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-left flex flex-col gap-3">
      <div>
        <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
          {date}
        </p>
        <p className="text-lg font-bold mt-0.5">{city}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{price}</p>
        {signupDeadline && (
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
            Signup closes {signupDeadline}
          </p>
        )}
      </div>
      {open ? (
        <Link
          href={href}
          className="rounded bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700 text-sm"
        >
          Sign up — {city}
        </Link>
      ) : (
        <span className="rounded bg-gray-200 px-4 py-2 text-center font-semibold text-gray-700 text-sm">
          Signup closed
        </span>
      )}
    </div>
  );
}
