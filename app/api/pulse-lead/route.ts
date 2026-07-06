import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Body = {
  first_name?: string;
  last_name?: string;
  email?: string;
  business_name?: string;
  business_url?: string;
  signal_strength?: string;
  score?: number | string | null;
  platforms_mentioning?: number | null;
  platforms_checked?: number | null;
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

export async function POST(req: NextRequest) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return bad('Server is not configured to capture leads.', 500);
  }

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return bad('Invalid JSON.');
  }

  const first_name = body.first_name?.trim();
  const last_name = body.last_name?.trim();
  const email = body.email?.trim();
  const business_name = body.business_name?.trim();

  if (!first_name || !last_name || !email || !business_name) {
    return bad('Missing required fields.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad('Invalid email.');
  }

  const row = {
    first_name,
    last_name,
    email: email.toLowerCase(),
    business_name,
    business_url: body.business_url?.trim() || null,
    signal_strength: body.signal_strength ?? null,
    score:
      typeof body.score === 'string' ? Number(body.score) || null : body.score ?? null,
    platforms_mentioning: body.platforms_mentioning ?? null,
    platforms_checked: body.platforms_checked ?? null,
  };

  const res = await fetch(`${url}/rest/v1/pulse_leads`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('pulse-lead insert failed', res.status, detail);
    return bad('Could not save right now. Please try again.', 502);
  }

  return NextResponse.json({ ok: true });
}
