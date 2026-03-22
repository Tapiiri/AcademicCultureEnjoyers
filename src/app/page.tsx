import HomeHeroImageClient from '@/components/HomeHeroImageClient';
import { upcomingEvents } from '@/lib/events';
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
          src="/globe.svg"
          alt="Academic Culture Enjoyers globe logo"
          width={96}
          height={96}
          className="mb-4 dark:invert"
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
  const nextEventTitles = upcomingEvents
    .map((event) => event.title)
    .join(' · ');

  return (
    <section className="front-hero-gradient py-20 text-center text-white">
      <div className="mx-auto max-w-4xl px-8">
        <HomeHeroImageClient
          src="https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/nuremberg.jpg?tr=w-1800,h-500,c-at_max"
          alt="Academic Culture Enjoyers events across Europe"
          width={1800}
          height={500}
          crop={true}
          caption=""
        />
        <h2 className="mb-4 text-5xl font-extrabold">
          Spring 2026 events are here
        </h2>
        <p className="mb-3 text-xl">
          ACE Wappusitsit · EuroSitsit Aachen · EuroSitsit Lausanne
        </p>
        <p className="mb-6 text-lg text-blue-50">
          Save the dates for April and May 2026 and check the events page for
          the latest details.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/events"
            className="rounded bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-gray-100"
          >
            Explore events
          </Link>
          <span className="rounded bg-blue-900/40 px-6 py-3 font-semibold text-blue-50">
            {nextEventTitles}
          </span>
        </div>
      </div>
    </section>
  );
}
