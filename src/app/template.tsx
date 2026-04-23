'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

let prevPathname: string | null = null;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isEventPage = (p: string) => /^\/events\/.+/.test(p);

  let animClass = 'page-enter';
  if (isEventPage(pathname) && !isEventPage(prevPathname ?? '')) {
    animClass = 'page-enter-from-right';
  } else if (!isEventPage(pathname) && isEventPage(prevPathname ?? '')) {
    animClass = 'page-enter-from-left';
  }

  useEffect(() => {
    prevPathname = pathname;
  }, [pathname]);

  return <div className={animClass}>{children}</div>;
}
