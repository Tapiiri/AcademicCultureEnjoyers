import 'dotenv/config';

import crypto from 'node:crypto';

const API_BASE = 'https://api.tally.so';
const TALLY_VERSION = process.env.TALLY_VERSION || ''; // optional version pin

// ---- Field definition you want to author with
type FieldType = 'SHORT_TEXT' | 'EMAIL';

interface Field {
  type: FieldType;
  title: string;
  properties?: { required?: boolean; placeholder?: string };
}

// ---- Tally block model (typed, minimal subset we need)
type UUID = string;

type GroupType = 'FORM_TITLE' | 'QUESTION';

interface BaseBlock<T extends string, P, G extends GroupType> {
  uuid: UUID;
  type: T;
  groupUuid: UUID;
  groupType: G;
  payload: P;
}

type FormTitleBlock = BaseBlock<
  'FORM_TITLE',
  { html: string; button?: { label?: string } },
  'FORM_TITLE'
>;

type TitleBlock = BaseBlock<'TITLE', { html: string }, 'QUESTION'>;

type InputTextPayload = { isRequired?: boolean; placeholder?: string };
type InputEmailPayload = { isRequired?: boolean; placeholder?: string };

type InputTextBlock = BaseBlock<'INPUT_TEXT', InputTextPayload, 'QUESTION'>;
type InputEmailBlock = BaseBlock<'INPUT_EMAIL', InputEmailPayload, 'QUESTION'>;

type Block = FormTitleBlock | TitleBlock | InputTextBlock | InputEmailBlock;

// ---- API response shapes we use
interface FormsListResponse {
  items: Array<{ id: string; name: string }>;
}

interface CreateFormRequest {
  status: 'PUBLISHED' | 'BLANK' | 'DRAFT';
  blocks: Block[];
  // workspaceId?: string; // uncomment if you want to target a specific workspace
}

interface CreateFormResponse {
  id: string;
}

// ---- fetch helper
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = process.env.TALLY_API;
  if (!token) throw new Error('TALLY_API not set');

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(TALLY_VERSION ? { 'tally-version': TALLY_VERSION } : {}),
      ...(options.headers || {}),
    },
  });

  const text = await res.text();
  let body: unknown = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      // leave as null; error below will include raw text if !ok
    }
  }

  if (!res.ok) {
    const detail = text || res.statusText;
    throw new Error(`Tally API error ${res.status}: ${detail}`);
  }
  return body as T;
}

/**
 * Build blocks for a simple form:
 * - One FORM_TITLE block (the form name)
 * - For each field, a TITLE block + INPUT_* block sharing groupUuid and groupType="QUESTION"
 */
function makeFormBlocks(formName: string, fields: Field[]): Block[] {
  const blocks: Block[] = [];

  // 1) Form title
  const formTitleUuid = crypto.randomUUID();
  const formTitle: FormTitleBlock = {
    uuid: formTitleUuid,
    type: 'FORM_TITLE',
    groupUuid: formTitleUuid,
    groupType: 'FORM_TITLE',
    payload: { html: formName },
  };
  blocks.push(formTitle);

  // 2) Questions
  for (const f of fields) {
    const groupUuid = crypto.randomUUID();

    const titleBlock: TitleBlock = {
      uuid: crypto.randomUUID(),
      type: 'TITLE',
      groupUuid,
      groupType: 'QUESTION',
      payload: { html: f.title },
    };
    blocks.push(titleBlock);

    const baseInputPayload = {
      isRequired: Boolean(f.properties?.required),
      ...(f.properties?.placeholder
        ? { placeholder: f.properties.placeholder }
        : {}),
    };

    if (f.type === 'SHORT_TEXT') {
      const input: InputTextBlock = {
        uuid: crypto.randomUUID(),
        type: 'INPUT_TEXT',
        groupUuid,
        groupType: 'QUESTION',
        payload: baseInputPayload,
      };
      blocks.push(input);
    } else if (f.type === 'EMAIL') {
      const input: InputEmailBlock = {
        uuid: crypto.randomUUID(),
        type: 'INPUT_EMAIL',
        groupUuid,
        groupType: 'QUESTION',
        payload: baseInputPayload,
      };
      blocks.push(input);
    } else {
      // TypeScript exhaustiveness check
      const _never: never = f.type;
      throw new Error(`Unsupported field type: ${_never}`);
    }
  }

  return blocks;
}

async function findFormIdByName(name: string): Promise<string | null> {
  const list = await request<FormsListResponse>('/forms');
  const match = list.items.find((f) => f.name === name);
  return match?.id ?? null;
}

async function createForm(name: string, fields: Field[]): Promise<string> {
  const blocks = makeFormBlocks(name, fields);

  const body: CreateFormRequest = {
    status: 'PUBLISHED', // or 'BLANK' / 'DRAFT'
    blocks,
    // workspaceId: process.env.TALLY_WORKSPACE_ID, // if you want to target a workspace
  };

  const created = await request<CreateFormResponse>('/forms', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  return created.id;
}

async function ensureForm(name: string, fields: Field[]): Promise<string> {
  const existing = await findFormIdByName(name);
  if (existing) return existing;
  return createForm(name, fields);
}

async function main() {
  try {
    const membershipId = await ensureForm('Membership Application', [
      {
        type: 'SHORT_TEXT',
        title: 'Full name',
        properties: { required: true, placeholder: 'Your name' },
      },
      {
        type: 'EMAIL',
        title: 'Email',
        properties: { required: true, placeholder: 'name@example.com' },
      },
    ]);
    console.log('Membership form ID:', membershipId);

    const eventId = await ensureForm('Thomastag 2025 Signup', [
      {
        type: 'SHORT_TEXT',
        title: 'Full name',
        properties: { required: true },
      },
      { type: 'EMAIL', title: 'Email', properties: { required: true } },
    ]);
    console.log('Thomastag 2025 signup form ID:', eventId);
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}

main();
