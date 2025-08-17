import TallyForm from '@/components/TallyForm';
import { getMembershipForm } from '@/lib/tally';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Join',
  description: 'Apply for membership in Academic Culture Enjoyers.',
  keywords: ['membership', 'join', 'application'],
};

export default async function JoinPage() {
  if (process.env.NEXT_PUBLIC_HIDE_MEMBERSHIP === 'true') {
    notFound();
  }

  const formId = await getMembershipForm();

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-4 text-3xl font-bold">
        Join Academic Culture Enjoyers
      </h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Want to hear of more opportunities to discover student culture? Interested in organizing the events? Fill out the form below to apply for membership in the association.
      </p>
      {formId ? (
        <TallyForm formId={formId} />
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          Membership form unavailable. Please try again later.
        </p>
      )}
    </main>
  );
}
