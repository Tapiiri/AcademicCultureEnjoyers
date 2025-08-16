import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Academic Culture Enjoyers handle your sign-up information.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Privacy Policy – Academic Culture Enjoyers Sign-ups
      </h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        We value your privacy and handle your information responsibly.
      </p>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">1. What we collect</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          When you sign up for an event, we may ask for:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Contact details (name, email, phone)</li>
          <li>Travel/accommodation preferences</li>
          <li>Dietary and accessibility needs</li>
          <li>Emergency contact details</li>
          <li>Other information relevant to the specific event</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">2. Why we collect it</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We use this information only to:
        </p>
        <ul className="mt-2 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            Organize event logistics (travel, accommodation, meals, activities)
          </li>
          <li>Communicate with you before and during the event</li>
          <li>Ensure safety and accessibility</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">3. Who has access</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Only designated event organizers have access to your information. We
          may share minimal details with trusted partners (e.g. hostels,
          restaurants, transport providers) when required for the event.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">4. How long we keep it</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Your information is deleted no later than 4 weeks after the event
          ends, unless required longer for accounting or legal reasons.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">5. Your rights</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You can request access, correction, or deletion of your data at any
          time. To do so, contact the organizers via the provided event contact
          address.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">6. Legal basis</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Your consent when signing up and our legitimate interest in safely and
          effectively organizing events.
        </p>
      </section>
    </main>
  );
}
