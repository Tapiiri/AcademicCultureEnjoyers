'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events/thomastag-2025', label: 'Events' },
  { href: '/join', label: 'Join' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white/60 text-gray-700 backdrop-blur dark:bg-gray-900/60 dark:text-gray-300">
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
