import TallyForm from '@/components/TallyForm';
import { getEventSignupForm } from '@/lib/tally';
import {
  THOMASTAG_SIGNUP_CLOSES_TEXT,
  THOMASTAG_SIGNUP_OPENS_TEXT,
  isThomastagSignupOpen,
} from '@/lib/thomastag';
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
          Thomastag is the German holiday that marks the shortest day of the
          year—but in Nürnberg, it’s especially known as a day of longstanding
          student tradition.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          The organizers of the event,{' '}
          <em>Traditional Association of Student Customs Nuremberg</em>{' '}
          (Traditionsverein Studentisches Brauchtum Nürnberg e.V., or TSBN),
          describe the history of the event as follows:
        </p>
        <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 text-gray-700 italic dark:text-gray-300">
          <p>
            The St. Thomas Stroll is an old Nuremberg tradition that dates back
            to the 17th century. Students from the University of Erlangen (now
            Friedrich-Alexander University), founded in 1742, would travel to
            the city on the last weekend before Christmas, either because they
            were living there or because they were traveling home from there by
            carriage. December 21st was not only dedicated to St. Thomas, but
            was also one of Nuremberg’s four market days. This custom gave rise
            to the Christkindlesmarkt in the 17th century.
          </p>
          <p className="mt-2">
            The students enjoyed this weekend celebrating together one last time
            and shopping before their journey home. They visited numerous Thomas
            pubs and later strolled together through Nuremberg’s city center and
            the Christmas market.
          </p>
        </blockquote>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          To this day, Thomastag is celebrated among the student fraternities of
          Nürnberg, and this year, the Academic Culture Enjoyers are proud to
          have been invited by TSBN to participate in this particularly
          traditional event of student culture!
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {`Below, you will find detailed information about the event. Sign-up starts ${THOMASTAG_SIGNUP_OPENS_TEXT} — sign up by ${THOMASTAG_SIGNUP_CLOSES_TEXT} to join us for the first big trip by Academic Culture Enjoyers!`}
        </p>
        <p className="mt-2 text-sm text-gray-600 italic dark:text-gray-400">
          NOTE: You’ll need to book your own flights — while the event
          participation, program and accommodation are being organised by ACE,
          flights and some meals are not included.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Program Overview</h2>
        <h3 className="mb-1 font-semibold">Friday 19 Dec</h3>
        <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Arrival in Nuremberg (Recommended)</li>
          <li>
            Welcome evening: group dinner & beers (restaurant booking by ACE)
          </li>
        </ul>
        <h3 className="mb-1 font-semibold">Saturday 20 Dec</h3>
        <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Arrival in Nuremberg (Latest)</li>
          <li>
            Guided tour of Nürnberg with a local expert (history, culture,
            hidden gems)
          </li>
          <li>Free time & preparations</li>
          <li>Kommers (formal, festive German-styled sitsit)</li>
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
        <h2 className="mb-2 text-2xl font-semibold">What does it cost?</h2>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Accommodation</strong> (hostel, shared rooms): €100
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Event fee</strong> (Kommers ticket, logistics, admin): €30
        </p>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          <strong>Flights</strong>: €220–€400 round trip from Helsinki
          (recommendations available from organizers)
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Total estimate: ~€350–550 per person.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Accommodation</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We’ll stay in a hostel in Nürnberg, in shared dorm-style rooms. Beds
          are reserved for our group, and breakfast is included. The hostel also
          provides luggage storage for departure day.

          The hostel is part of the historic castle of Nürnberg, highly rated and has a great view over the city and is close to many of the main attractions. More info: <a href="http://nuernberg.jugendherberge.de/">http://nuernberg.jugendherberge.de/</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Who can join?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Open to all members of the Academic Culture Enjoyers community
          (students & alumni)!
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
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Sign-up & Payments</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>{`Sign-up opens: ${THOMASTAG_SIGNUP_OPENS_TEXT}`}</li>
          <li>{`Sign-up deadline: ${THOMASTAG_SIGNUP_CLOSES_TEXT} (or until full)`}</li>
          <li>
            Sign-up will be binding after it’s closing deadline has passed.
          </li>
          <li>Hostel payment: €100 within 7 days of sign-up closing</li>
          <li>
            Cancellation policy and payment details will be shared after
            sign-up.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Cultural Etiquette</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We are guests of the Southern German fraternities and TSBN. Respectful
          behavior is expected at all times — especially during fraternity
          visits.
        </p>
      </section>

      <SignupSection />
    </main>
  );
}

async function SignupSection() {
  const formId = await getEventSignupForm('Thomastag 2025');
  const signupOpen = isThomastagSignupOpen();
  return (
    <section className="text-center">
      <h2 className="mb-4 text-2xl font-semibold">Ready to join?</h2>
      {signupOpen ? (
        formId ? (
          <TallyForm formId={formId} height={600} />
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            Signup form unavailable. Please try again later.
          </p>
        )
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          {`Sign-up opens ${THOMASTAG_SIGNUP_OPENS_TEXT}`}
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
