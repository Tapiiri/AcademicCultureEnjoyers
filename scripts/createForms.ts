import crypto from 'node:crypto';

const API_BASE = 'https://api.tally.so';

type FieldType = 'SHORT_TEXT' | 'EMAIL';

interface Field {
  type: FieldType;
  title: string;
  properties?: {
    required?: boolean;
  };
}

interface Block {
  uuid: string;
  type: string;
  groupUuid: string;
  groupType: string;
  payload: {
    title: string;
    required?: boolean;
  };
}

async function request(path: string, options: RequestInit = {}): Promise<any> {
  const token = process.env.TALLY_API;
  if (!token) {
    throw new Error('TALLY_API not set');
  }

  const res = await fetch(`${API_BASE}${path}`, {
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

function fieldToBlock(field: Field): Block {
  const uuid = crypto.randomUUID();
  const type = field.type;
  return {
    uuid,
    type,
    groupUuid: uuid,
    groupType: type,
    payload: {
      title: field.title,
      required: field.properties?.required ?? false,
    },
  };
}

async function ensureForm(name: string, fields: Field[]): Promise<string> {
  const list = await request('/forms');
  const existing = list?.data?.find((f: any) => f.name === name);
  if (existing) return existing.id;

  const blocks = fields.map(fieldToBlock);
  const created = await request('/forms', {
    method: 'POST',
    body: JSON.stringify({ name, status: 'PUBLISHED', blocks }),
  });

  return created?.data?.id || created?.id || '';
}

async function main() {
  try {
    const membershipId = await ensureForm('Membership Application', [
      {
        type: 'SHORT_TEXT',
        title: 'Full Name',
        properties: { required: true },
      },
      {
        type: 'EMAIL',
        title: 'Email',
        properties: { required: true },
      },
    ]);
    console.log('Membership form ID:', membershipId);

    const eventId = await ensureForm('Thomastag 2025 Signup', [
      {
        type: 'SHORT_TEXT',
        title: 'Full Name',
        properties: { required: true },
      },
      {
        type: 'EMAIL',
        title: 'Email',
        properties: { required: true },
      },
    ]);
    console.log('Thomastag 2025 signup form ID:', eventId);
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
}

main();
