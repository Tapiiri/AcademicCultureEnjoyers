'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Stage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState('/');
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setRedirect(params.get('redirect') || '/');
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/stage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push(redirect);
    } else {
      setError('Invalid password');
    }
  }

  return (
    <main className="mx-auto mt-40 max-w-sm p-4">
      <h1 className="mb-4 text-xl font-semibold">Staging access</h1>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <input
          type="password"
          className="rounded border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="rounded bg-gray-800 px-3 py-2 text-white"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
