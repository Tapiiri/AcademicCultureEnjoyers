import { getEventSignupForm } from '@/lib/tally';
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
  return (
    <>
      <Script
        id="org-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
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
          Discover events, stories and resources for enjoyers of scholarly life.
        </p>
        <ThomastagHero />
        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold">Events & Trips</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Join visits to student fraternities, sitsits, and other academic
            festivities around the world.{' '}
            <Link href="/events" className="text-blue-600 hover:underline">
              See upcoming events
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Community</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Connect with fellow enjoyers and share your passion for knowledge
            and tradition.
          </p>
          <Link href="/join" className="text-blue-600 hover:underline">
            Apply for membership
          </Link>
        </section>
      </main>
    </>
  );
}

async function ThomastagHero() {
  const formId = await getEventSignupForm('Thomastag 2025');
  return (
    <section className="mb-10 rounded bg-gray-100 p-8 text-center dark:bg-gray-800">
      <h2 className="mb-2 text-3xl font-bold">Thomastag 2025</h2>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
        19–21 December 2025 · Nürnberg, Germany
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/events/thomastag-2025"
          className="inline-block rounded bg-gray-200 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Event details
        </Link>
        {formId ? (
          <Link
            href={`https://tally.so/r/${formId}`}
            className="inline-block rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Sign up now
          </Link>
        ) : (
          <button
            disabled
            className="inline-block cursor-not-allowed rounded bg-gray-400 px-4 py-2 font-semibold text-white"
          >
            Sign-up opens 22 August 2025
          </button>
        )}
      </div>
    </section>
  );
}
