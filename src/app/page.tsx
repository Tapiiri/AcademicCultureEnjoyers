import type { Metadata } from 'next';
import Image from 'next/image';

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
    <main className="mx-auto max-w-4xl p-8">
      <Image
        src="/globe.svg"
        alt="Academic globe icon"
        width={96}
        height={96}
        className="mb-4 dark:invert"
        priority
      />
      <h1 className="mb-6 text-4xl font-bold">
        Welcome to Academic Culture Enjoyers
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Explore essays, book recommendations and insights that celebrate
        scholarly life. Join a growing community of learners who value research,
        writing and lifelong curiosity.
      </p>
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Learn and Grow</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Find study strategies, research tools and stories from academia to
          inspire your own intellectual journey.
        </p>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-semibold">Join the Community</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Connect with fellow academic culture enjoyers and share your passion
          for knowledge and discovery.
        </p>
      </section>
    </main>
  );
}
