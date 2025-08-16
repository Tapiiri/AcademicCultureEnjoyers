const API_BASE = 'https://api.tally.so/v1';

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

  return (res.json() as Promise<T>);
}

interface TallyFormSummary {
  id: string;
  title: string;
}

interface TallyFormsResponse {
  data?: TallyFormSummary[];
}

interface TallyCreateResponse {
  id?: string;
  data?: { id: string };
}

export async function createMembershipForm() {
  const list = await request<TallyFormsResponse>('/forms');
  const existing = list?.data?.find((f) => f.title === 'Membership Application');
  if (existing) return existing.id;

  const created = await request<TallyCreateResponse>('/forms', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Membership Application',
      fields: [
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
      ],
    }),
  });

  return created?.data?.id || created?.id || '';
}

export async function createEventSignupForm(event: string) {
  const title = `${event} Signup`;
  const list = await request<TallyFormsResponse>('/forms');
  const existing = list?.data?.find((f) => f.title === title);
  if (existing) return existing.id;

  const created = await request<TallyCreateResponse>('/forms', {
    method: 'POST',
    body: JSON.stringify({
      title,
      fields: [
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
      ],
    }),
  });

  return created?.data?.id || created?.id || '';
}
