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
  tired_of?: string;
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
  const tired_of = body.tired_of?.trim().slice(0, 3000);
  const idea = body.idea?.trim().slice(0, 3000) || '';
  const promo_code = body.promo_code?.trim().slice(0, 100) || '';

  if (!name || !email || !business_name || !customers_ask || !tired_of) {
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
    ['Tired of explaining', tired_of],
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

  // Confirmation to the person who filled out the form. Best effort: the
  // inquiry above already reached hello@, so a failure here must not turn a
  // successful submission into an error on the page.
  const firstName = esc(name.split(/\s+/)[0]);
  const business = esc(business_name);
  const confirmText = `Hi ${name.split(/\s+/)[0]},

Thanks for telling me about ${business_name}. Your answers are in my inbox, and I read every one.

Next I look at your business and at what you are tired of explaining, then I write back with ideas for what your tool inside ChatGPT could do.

If you think of anything to add, reply to this email. It comes straight to me.

Lenise Kenney
Signal & Structure AI
https://signalstructure.ai`;
  const confirmHtml = `<div style="font-family:Arial,sans-serif;color:#1B2B4B;max-width:520px;line-height:1.6">
<p>Hi ${firstName},</p>
<p>Thanks for telling me about ${business}. Your answers are in my inbox, and I read every one.</p>
<p>Next I look at your business and at what you are tired of explaining, then I write back with ideas for what your tool inside ChatGPT could do.</p>
<p>If you think of anything to add, reply to this email. It comes straight to me.</p>
<p style="margin-top:24px"><strong>Lenise Kenney</strong><br><span style="color:#C17A3A">Signal &amp; Structure AI</span><br><a href="https://signalstructure.ai" style="color:#1B2B4B">signalstructure.ai</a></p>
</div>`;

  try {
    const confirm = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [email],
        reply_to: TO_EMAIL,
        subject: 'Your MCP Setup inquiry is in',
        text: confirmText,
        html: confirmHtml,
      }),
    });
    if (!confirm.ok) {
      console.error('mcp-inquiry confirmation failed', confirm.status, await confirm.text().catch(() => ''));
    }
  } catch (err) {
    console.error('mcp-inquiry confirmation error', err);
  }

  return NextResponse.json({ ok: true });
}
