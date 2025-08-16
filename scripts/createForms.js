const API_BASE = 'https://api.tally.so/';

async function request(path, options = {}) {
  const token = process.env.TALLY_API;
  if (!token) {
    throw new Error('TALLY_API not set');
  }

  const res = await fetch(`${API_BASE}v1${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Tally API error ${res.status}: ${text}`);
  }

  return res.json();
}

async function ensureForm(title, fields) {
  const list = await request('/forms');
  const existing = list?.data?.find((f) => f.title === title);
  if (existing) return existing.id;

  const created = await request('/forms', {
    method: 'POST',
    body: JSON.stringify({ title, fields, status: 'published' }),
  });

  return created?.data?.id || created?.id || '';
}

async function main() {
  try {
    const membershipId = await ensureForm('Membership Application', [
      {
        type: 'short_text',
        title: 'Full Name',
        properties: { required: true },
      },
      {
        type: 'email',
        title: 'Email',
        properties: { required: true },
      },
    ]);
    console.log('Membership form ID:', membershipId);

    const eventId = await ensureForm('Thomastag 2025 Signup', [
      {
        type: 'short_text',
        title: 'Full Name',
        properties: { required: true },
      },
      {
        type: 'email',
        title: 'Email',
        properties: { required: true },
      },
    ]);
    console.log('Thomastag 2025 signup form ID:', eventId);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

main();
