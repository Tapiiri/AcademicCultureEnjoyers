import TallyForm from '@/components/TallyForm';
import { getMembershipForm } from '@/lib/tally';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join',
  description: 'Apply for membership in Academic Culture Enjoyers.',
  keywords: ['membership', 'join', 'application'],
};

export default async function JoinPage() {
  const formId = await getMembershipForm();

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-4 text-3xl font-bold">
        Join Academic Culture Enjoyers
      </h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Fill out the form below to apply for membership.
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
