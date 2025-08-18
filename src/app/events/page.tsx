import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Explore upcoming events from Academic Culture Enjoyers.',
};

export default async function EventsPage() {
  const eventsDir = path.join(process.cwd(), 'content/events');
  const files = await fs.readdir(eventsDir);
  const events = await Promise.all(
    files.filter((f) => f.endsWith('.md')).map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      const fileContent = await fs.readFile(path.join(eventsDir, file), 'utf8');
      const { data } = matter(fileContent);
      return { slug, title: data.title as string };
    }),
  );
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Events</h1>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        {events.map((event) => (
          <li key={event.slug}>
            <Link
              href={`/events/${event.slug}`}
              className="text-blue-600 hover:underline"
            >
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
