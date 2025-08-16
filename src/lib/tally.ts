const API_BASE = 'https://api.tally.so';

async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T | null> {
  const token = process.env.TALLY_API;
  if (!token) return null;
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Tally API error', res.status);
    return null;
  }

  return res.json() as Promise<T>;
}

interface TallyFormSummary {
  id: string;
  name: string;
}

interface TallyFormsResponse {
  items?: TallyFormSummary[];
}

async function findFormIdByName(name: string) {
  const list = await request<TallyFormsResponse>('/forms');
  const existing = list?.items?.find((f) => f.name === name);
  return existing?.id || '';
}

export async function getMembershipForm() {
  return findFormIdByName('Membership Application');
}

export async function getEventSignupForm(event: string) {
  return findFormIdByName(`${event} Signup`);
}
