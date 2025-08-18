import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const stagePassword = process.env.STAGE_PASSWORD;
  if (!stagePassword) {
    return NextResponse.json({ error: 'Stage password not configured' }, { status: 404 });
  }

  if (password === stagePassword) {
    const hash = crypto.createHash('sha256').update(stagePassword).digest('hex');
    const res = NextResponse.json({ ok: true });
    res.cookies.set('stage_auth', hash, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
