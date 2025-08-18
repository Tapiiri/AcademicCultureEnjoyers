import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const password = process.env.STAGE_PASSWORD;
  if (!password) return NextResponse.next();

  const auth = req.headers.get('authorization');
  if (auth) {
    const [, encoded] = auth.split(' ');
    const [, pass] = Buffer.from(encoded, 'base64').toString().split(':');
    if (pass === password) return NextResponse.next();
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Staging"' },
  });
}

export const config = { matcher: '/:path*' };
