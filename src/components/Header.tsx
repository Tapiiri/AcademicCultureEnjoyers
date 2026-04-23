'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const hideMembership = process.env.NEXT_PUBLIC_HIDE_MEMBERSHIP === 'true';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/calendar', label: 'Calendar', external: true },
  ...(hideMembership ? [] : [{ href: '/join', label: 'Join' }]),
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-30 border-b bg-white text-gray-700 shadow-md dark:bg-gray-900 dark:text-gray-300">
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <nav className="mx-auto flex max-w-4xl gap-4 p-4">
        {navLinks.map(({ href, label, external }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`inline-flex items-center gap-1 hover:underline ${isActive ? 'font-semibold' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
              {external && (
                <svg
                  aria-label="(opens external link)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  width="11"
                  height="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-50"
                >
                  <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7" />
                  <path d="M8 1h3m0 0v3m0-3L5.5 6.5" />
                </svg>
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
