import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Explore upcoming events from Academic Culture Enjoyers.',
};

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Events</h1>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>
          <Link
            href="/events/thomastag-2025"
            className="text-blue-600 hover:underline"
          >
            Thomastag 2025 – Southern German Traditions Weekend
          </Link>
        </li>
      </ul>
    </main>
  );
}
