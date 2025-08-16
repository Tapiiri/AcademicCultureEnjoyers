import TallyForm from '@/components/TallyForm';
import { getEventSignupForm } from '@/lib/tally';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thomastag 2025 – Southern German Traditions Weekend',
  description:
    'Join Academic Culture Enjoyers in Nürnberg, 19–21 December 2025, for a weekend of student traditions and holiday spirit.',
  keywords: [
    'Thomastag',
    'Nürnberg',
    'student traditions',
    'academic culture',
    'kommers',
    'event',
  ],
  alternates: { canonical: '/events/thomastag-2025' },
  openGraph: {
    title: 'Thomastag 2025 – Southern German Traditions Weekend',
    description:
      'Join Academic Culture Enjoyers in Nürnberg, 19–21 December 2025, for a weekend of student traditions and holiday spirit.',
    url: 'https://academiccultureenjoyers.org/events/thomastag-2025',
    siteName: 'Academic Culture Enjoyers',
  },
};

export default function Thomastag2025Page() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-2 text-3xl font-bold">
        Thomastag: Southern German Traditions Weekend
      </h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        19–21 December 2025 · Nürnberg, Germany
      </p>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">What is Thomastag?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Thomastag is a spectacular chance to experience German student culture
          at its most festive. We’ll travel together to Nürnberg — a city famous
          for its medieval charm, world-class Christmas market, and Southern
          German fraternity traditions.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          The highlight of the weekend is a Kommers (a festive, sitsit-style
          evening of song, toasts, and tradition) followed by a Bummel (visiting
          local fraternities). Around that, we’ll explore Nürnberg, enjoy its
          Christmas market, and share the season in good company.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Program Overview</h2>
        <h3 className="mb-1 font-semibold">Friday 19 Dec</h3>
        <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            Arrivals in Nürnberg (or Munich/Frankfurt with train transfer)
          </li>
          <li>Welcome evening: group dinner & beers (restaurant booking)</li>
          <li>
            Optional: museums & attractions (beer caves, bratwurst museum, train
            museum…)
          </li>
        </ul>
        <h3 className="mb-1 font-semibold">Saturday 20 Dec</h3>
        <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            Guided tour of Nürnberg with local experts (history, culture, hidden
            gems)
          </li>
          <li>Free time & preparations</li>
          <li>Kommers (formal, festive sitsit-style gathering)</li>
          <li>
            Bummel – visiting local student fraternities late into the night
          </li>
        </ul>
        <h3 className="mb-1 font-semibold">Sunday 21 Dec</h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Nürnberg Christmas Market visit</li>
          <li>Optional “ex-Bummel” with local hosts</li>
          <li>Return flights (luggage room available at hostel)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Costs & Budget</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Accommodation (hostel, shared rooms): ~€100 (final price confirmed
          soon)
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Event fee (Kommers ticket, logistics, tours, local transit, admin):
          ~€70
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Flights: €220–€400 round trip from Helsinki (depending on
          route/airline)
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Total estimate: ~€450–550 per person. Flights will be booked
          individually after sign-up; organizers will share recommended options.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Accommodation</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We’ll stay in a hostel in Nürnberg, in shared dorm-style rooms. Beds
          are reserved for our group, and the hostel provides luggage storage
          for departure day.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Who can join?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Open to all members of Academic Culture Enjoyers (students & alumni,
          18+). No German skills required; program will be run in English. 30
          seats available (first come, first served – waitlist after that).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Practical Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>
            Dress code for Kommers: festive/dark suit or equivalent (formal
            wear)
          </li>
          <li>
            Weather: December in Nürnberg is cold (0–5°C). Bring a warm coat,
            gloves, and shoes suitable for walking.
          </li>
          <li>
            Meals: group dinner on Friday, festive meal at Kommers, and
            breakfasts at the hostel are included. Other meals at own expense.
          </li>
          <li>Travel insurance required: please arrange your own coverage.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Sign-up & Payments</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Sign-up deadline: 30 September 2025 (or until full)</li>
          <li>Deposit: €100 within 7 days of confirmation</li>
          <li>Balance: due by 1 December 2025</li>
          <li>
            Cancellation policy and payment details will be shared after
            sign-up.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Cultural Etiquette</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We are guests of Southern German fraternities. Respectful behavior is
          expected at all times — especially during fraternity visits, where
          traditions are observed seriously. Non-alcoholic options will be
          available.
        </p>
      </section>

      <SignupSection />
    </main>
  );
}

async function SignupSection() {
  const formId = await getEventSignupForm('Thomastag 2025');
  return (
    <section className="text-center">
      <h2 className="mb-4 text-2xl font-semibold">Ready to join?</h2>
      {formId ? (
        <TallyForm formId={formId} height={600} />
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          Signup form unavailable. Please try again later.
        </p>
      )}
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Seats are limited to 30 — first come, first served.
      </p>
      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
        We only use your info for organizing events, share it only when
        necessary (e.g. hostel bookings), and delete it after.{' '}
        <Link href="/privacy" className="underline">
          Full privacy notice
        </Link>
        .
      </p>
    </section>
  );
}
