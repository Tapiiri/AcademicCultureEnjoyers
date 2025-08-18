import { getEventSignupForm } from '@/lib/tally';
import { isSignupOpen } from '@/lib/events';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
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
      <ThomastagHero />
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

async function ThomastagHero() {
  const filePath = path.join(process.cwd(), 'content/events/thomastag-2025.md');
  const source = await fs.readFile(filePath, 'utf8');
  const { data } = matter(source);
  interface EventData {
    title: string;
    date: string;
    location: string;
    hero?: { headline?: string };
    signupOpens?: string;
  }
  const event = data as EventData;
  const formId = await getEventSignupForm(event.title);
  const signupOpen = isSignupOpen(event.signupOpens ?? '');
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 py-20 text-center text-white">
      <div className="mx-auto max-w-4xl px-8">
        <h2 className="mb-4 text-5xl font-extrabold">{event.hero?.headline || event.title}</h2>
        <p className="mb-6 text-xl">
          {new Date(event.date).toLocaleDateString()} · {event.location}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/events/thomastag-2025"
            className="rounded bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-gray-100"
          >
            Event details
          </Link>
          {signupOpen ? (
            formId ? (
              <Link
                href={`https://tally.so/r/${formId}`}
                className="rounded bg-yellow-300 px-6 py-3 font-semibold text-gray-900 hover:bg-yellow-400"
              >
                Sign up now
              </Link>
            ) : (
              <button
                disabled
                className="cursor-not-allowed rounded bg-white/30 px-6 py-3 font-semibold text-white opacity-80"
              >
                Signup form unavailable. Please try again later.
              </button>
            )
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded bg-white/30 px-6 py-3 font-semibold text-white opacity-80"
            >
              {`Sign-up opens ${new Date(event.signupOpens ?? '').toLocaleString()}`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
