import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const password = process.env.STAGE_PASSWORD;
  if (!password) return NextResponse.next();

  const auth = req.headers.get('authorization');
  if (auth?.startsWith('Basic ')) {
    const encoded = auth.split(' ')[1];
    try {
      const decoded = atob(encoded);
      const idx = decoded.indexOf(':');
      const pass = idx >= 0 ? decoded.slice(idx + 1) : '';
      if (pass === password) return NextResponse.next();
    } catch {
      // invalid base64 or unexpected format -> fall through to 401
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Staging"' },
  });
}

export const config = { matcher: '/:path*' };
