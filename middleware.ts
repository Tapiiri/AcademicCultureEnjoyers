import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const stagePassword = process.env.STAGE_PASSWORD;
  console.log('[stage middleware]', {
    pathname: req.nextUrl.pathname,
    stagePasswordPresent: Boolean(stagePassword),
  });
  if (!stagePassword) return NextResponse.next();

  const hashed = crypto.createHash('sha256').update(stagePassword).digest('hex');
  const cookie = req.cookies.get('stage_auth')?.value;

  const { pathname } = req.nextUrl;
  const authenticated = cookie === hashed;
  const isStageRoute = pathname === '/stage' || pathname.startsWith('/api/stage');
  console.log('[stage middleware] auth check', { authenticated, pathname });
  if (authenticated || isStageRoute) {
    return NextResponse.next();
  }

  console.log('[stage middleware] redirecting to /stage');
  const url = req.nextUrl.clone();
  url.pathname = '/stage';
  url.searchParams.set('redirect', req.nextUrl.pathname + req.nextUrl.search);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
