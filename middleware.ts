import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const stagePassword = process.env.STAGE_PASSWORD;
  if (!stagePassword) return NextResponse.next();

  const hashed = crypto.createHash('sha256').update(stagePassword).digest('hex');
  const cookie = req.cookies.get('stage_auth')?.value;

  const { pathname } = req.nextUrl;
  if (
    cookie === hashed ||
    pathname === '/stage' ||
    pathname.startsWith('/api/stage')
  ) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = '/stage';
  url.searchParams.set('redirect', req.nextUrl.pathname + req.nextUrl.search);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
