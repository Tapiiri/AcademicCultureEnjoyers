import { pastEvents, upcomingEvents } from '@/lib/events';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Explore upcoming and past Academic Culture Enjoyers events across Europe.',
};

function EventCard({
  title,
  subtitle,
  dateLabel,
  location,
  description,
  highlights,
  ctaLabel,
  ctaHref,
  status,
}: {
  title: string;
  subtitle: string;
  dateLabel: string;
  location: string;
  description: string;
  highlights: string[];
  ctaLabel?: string;
  ctaHref?: string;
  status?: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
            {dateLabel}
          </p>
          <h2 className="mt-1 text-2xl font-bold">{title}</h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          {location}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      {(ctaHref || status) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
              {ctaLabel}
            </Link>
          ) : null}
          {status ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">{status}</p>
          ) : null}
        </div>
      )}
    </article>
  );
}

const SITSIT_BG =
  'https://ik.imagekit.io/tapiiri/ace/AcademicCultureEnjoyers/Saha3.jpg';

export default function EventsPage() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 w-full h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.0) 100%), url(${SITSIT_BG}?tr=w-1800,h-900,c-at_max)`,
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
      />
    <main className="relative z-10 mx-auto max-w-3xl p-0 bg-white/90 dark:bg-[#181c24] rounded-lg shadow-md">
      <section className="px-4 pt-10 pb-8 md:px-8 md:pt-16 text-center">
        <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-400">
          Academic Culture Enjoyers
        </p>
        <h1 className="mt-2 mb-4 text-4xl font-bold">Events</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Join ACE events across Europe, from spring sitsit gatherings to major
          tradition weekends. Here you can find our current upcoming events as
          well as selected past events.
        </p>
      </section>

      <section aria-labelledby="upcoming-events" className="mb-10 px-4 md:px-8">
        <h2 id="upcoming-events" className="mb-2 text-3xl font-semibold">
          Upcoming events
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Save the dates for spring 2026 and keep an eye out for signup
          details.
        </p>
        <div className="grid gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={`${event.title}-${event.dateLabel}`} {...event} />
          ))}
        </div>
      </section>

      <section aria-labelledby="past-events" className="mb-10 px-4 md:px-8">
        <h2 id="past-events" className="mb-2 text-3xl font-semibold">
          Past events
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Looking for previous ACE gatherings? Browse our archive here.
        </p>
        <div className="grid gap-6">
          {pastEvents.map((event) => (
            <EventCard key={`${event.title}-${event.dateLabel}`} {...event} />
          ))}
        </div>
      </section>
    </main>
    </div>
  );
}
