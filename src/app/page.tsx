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

export const metadata: Metadata = {
  title: 'Academic Culture Enjoyers | Home',
  description:
    'Discover study tips, research resources and stories that celebrate scholarly life.',
  keywords: [
    'academic culture',
    'scholarly community',
    'research tips',
    'study resources',
  ],
  openGraph: {
    title: 'Academic Culture Enjoyers',
    description:
      'Discover study tips, research resources and stories that celebrate scholarly life.',
    url: '/',
    siteName: 'Academic Culture Enjoyers',
    images: [
      {
        url: '/globe.svg',
        width: 1200,
        height: 630,
        alt: 'Academic Culture Enjoyers globe logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic Culture Enjoyers',
    description:
      'Discover study tips, research resources and stories that celebrate scholarly life.',
    images: ['/globe.svg'],
  },
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
        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold">Events & Trips</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Join visits to student fraternities, sitsits, and other academic
            festivities around the world.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Community</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Connect with fellow enjoyers and share your passion for knowledge
            and tradition.
          </p>
        </section>
        <section className="mt-10">
          <h2 className="mb-2 text-2xl font-semibold">Upcoming Event</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Join us in Nürnberg for Thomastag, 19–21 December 2025.
          </p>
          <Link
            href="/events/thomastag-2025"
            className="text-blue-600 hover:underline"
          >
            Learn more and sign up
          </Link>
        </section>
      </main>
    </>
  );
}
