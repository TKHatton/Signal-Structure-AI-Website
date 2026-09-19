import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TO_EMAIL = 'hello@signalstructure.ai';
const FROM = 'Signal & Structure AI <hello@signalstructure.ai>';

type Body = {
  name?: string;
  email?: string;
  business_name?: string;
  website?: string;
  customers_ask?: string;
  idea?: string;
  promo_code?: string;
  company_fax?: string; // honeypot, real visitors never fill this
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return bad('Invalid JSON.');
  }

  // Bots fill the honeypot. Pretend success so they learn nothing.
  if (body.company_fax?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim().slice(0, 200);
  const email = body.email?.trim().slice(0, 200);
  const business_name = body.business_name?.trim().slice(0, 200);
  const website = body.website?.trim().slice(0, 300) || '';
  const customers_ask = body.customers_ask?.trim().slice(0, 3000);
  const idea = body.idea?.trim().slice(0, 3000) || '';
  const promo_code = body.promo_code?.trim().slice(0, 100) || '';

  if (!name || !email || !business_name || !customers_ask) {
    return bad('Missing required fields.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad('Invalid email.');
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('mcp-inquiry: RESEND_API_KEY is not set');
    return bad('Email is not configured yet.', 500);
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Business', business_name],
    ['Website', website || 'not given'],
    ['Customers ask most', customers_ask],
    ['Idea already in mind', idea || 'none'],
    ['Promo code', promo_code || 'none'],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<div style="font-family:Arial,sans-serif;color:#1B2B4B">
<h2 style="margin:0 0 12px">New MCP Setup inquiry</h2>
${rows
  .map(
    ([k, v]) =>
      `<p style="margin:0 0 10px"><strong>${esc(k)}</strong><br>${esc(v).replace(/\n/g, '<br>')}</p>`
  )
  .join('')}
<p style="color:#888;font-size:12px">Sent from signalstructure.ai/mcp-setup. Reply to this email to answer ${esc(name)} directly.</p>
</div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `MCP Setup inquiry: ${business_name}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('mcp-inquiry send failed', res.status, detail);
    return bad('Could not send right now. Please try again.', 502);
  }

  return NextResponse.json({ ok: true });
}
