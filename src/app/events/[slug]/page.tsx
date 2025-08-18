import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import TallyForm from '@/components/TallyForm';
import { getEventSignupForm } from '@/lib/tally';
import { isSignupOpen } from '@/lib/events';

export async function generateStaticParams() {
  const eventsDir = path.join(process.cwd(), 'content/events');
  const files = await fs.readdir(eventsDir);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((file) => ({ slug: file.replace(/\.md$/, '') }));
}

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), 'content/events', `${params.slug}.md`);
  const source = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(source);
  interface EventData {
    title: string;
    date: string;
    location: string;
    hero?: {
      headline?: string;
      image?: string;
      ctaText?: string;
      ctaLink?: string;
    };
    signupOpens?: string;
  }
  const event = data as EventData;
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-2 text-3xl font-bold">
        {event.hero?.headline || event.title}
      </h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        {new Date(event.date).toLocaleDateString()} · {event.location}
      </p>
      <ReactMarkdown className="prose dark:prose-invert" >{content}</ReactMarkdown>
      <SignupSection title={event.title} signupOpens={event.signupOpens} />
    </main>
  );
}

async function SignupSection({
  title,
  signupOpens,
}: {
  title: string;
  signupOpens?: string;
}) {
  if (!signupOpens) return null;
  const formId = await getEventSignupForm(title);
  const open = isSignupOpen(signupOpens);
  return (
    <section id="signup" className="mt-8 text-center">
      <h2 className="mb-4 text-2xl font-semibold">Ready to join?</h2>
      {open ? (
        formId ? (
          <TallyForm formId={formId} height={600} />
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            Signup form unavailable. Please try again later.
          </p>
        )
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          {`Sign-up opens ${new Date(signupOpens).toLocaleString()}`}
        </p>
      )}
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Seats are limited to 30 — first come, first served.
      </p>
      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
        We only use your info for organizing events, share it only when necessary (e.g. hostel bookings), and delete it after.
      </p>
    </section>
  );
}
