'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const hideMembership = process.env.NEXT_PUBLIC_HIDE_MEMBERSHIP === 'true';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/calendar', label: 'Calendar' },
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
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`hover:underline ${isActive ? 'font-semibold' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
