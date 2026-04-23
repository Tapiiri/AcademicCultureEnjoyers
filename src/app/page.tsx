import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Academic Culture Enjoyers: a community exploring student traditions and academic culture across Europe.',
  keywords: [
    'academic culture',
    'student traditions',
    'events',
    'kommers',
    'sitsit',
  ],
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Academic Culture Enjoyers',
  url: 'https://academiccultureenjoyers.org',
  logo: 'https://academiccultureenjoyers.org/globe.svg',
};

export default function Home() {
  const hideMembership = process.env.NEXT_PUBLIC_HIDE_MEMBERSHIP === 'true';
  return (
    <>
      <Script
        id="org-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <UpcomingEventsHero />
      <main className="mx-auto max-w-4xl p-8">
        <Image
          src="https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/ACE-zirkel_weighted-01.svg"
          alt="Academic Culture Enjoyers zirkel"
          width={144}
          height={144}
          className="mb-4"
          priority
        />
        <h1 className="mb-6 text-4xl font-bold">Academic Culture Enjoyers</h1>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Celebrating academic traditions and student culture across Europe.
        </p>
        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold">Events & Trips</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Join visits to student fraternities, sitsit, and other academic
            festivities around the world.{' '}
            <Link href="/events" className="text-blue-600 hover:underline">
              See upcoming events
            </Link>
            .
          </p>
        </section>
        {!hideMembership && (
          <section>
            <h2 className="mb-2 text-2xl font-semibold">Community</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Connect with fellow enjoyers and share your passion for academic
              culture and tradition.
            </p>
            <Link href="/join" className="text-blue-600 hover:underline">
              Apply for membership
            </Link>
          </section>
        )}
      </main>
    </>
  );
}

function UpcomingEventsHero() {
  return (
    <section className="relative flex items-center justify-center text-center text-white overflow-hidden" style={{ minHeight: 'calc(70vh + 12px)', marginTop: '-12px' }}>
      {/* Full-bleed background image */}
      <Image
        src="https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/Sitsit.jpg?tr=w-1800,c-at_max"
        alt="Sitsit table party"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-8 py-24">
        <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-blue-200">
          Academic Culture Enjoyers · Spring 2026
        </p>
        <h2 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Sitsit is coming to Central Europe!
        </h2>
        <p className="mb-3 text-xl md:text-2xl text-gray-100">
          Two EuroSitsit events this spring — Aachen and Lausanne
        </p>
        <p className="mb-10 text-lg text-blue-100">
          Join ACE for evenings of food, drink, and song in Germany and
          Switzerland. Signups are open now.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://signup.academicculture.org/events/eurositsitaachen"
            className="rounded bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-gray-100"
          >
            Sign up — Aachen, May 9
          </Link>
          <Link
            href="https://signup.academicculture.org/events/eurositsitlausanne"
            className="rounded bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-gray-100"
          >
            Sign up — Lausanne, May 23
          </Link>
          <Link
            href="/events/eurositsit"
            className="rounded bg-white/20 backdrop-blur-sm px-6 py-3 font-semibold text-white hover:bg-white/30"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
