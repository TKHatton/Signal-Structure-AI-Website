'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '@/lib/constants';

interface PulseEmailCaptureProps {
  result: {
    business_name: string;
    signal_strength: string;
    signal_key: string;
    headline: string;
    explanation: string;
    schema_summary: string;
    content_summary: string;
    url: string;
    checked_at: string;
    score?: number | string;
    platforms_mentioning?: number;
    platforms_checked?: number;
  };
}

export default function PulseEmailCapture({ result }: PulseEmailCaptureProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const canSubmit =
    firstName.trim() && lastName.trim() && email.trim() && !isSending;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSending(true);
    setError('');

    const first = firstName.trim();
    const last = lastName.trim();
    const em = email.trim();

    // Fire both in parallel. Supabase capture is what we care about here;
    // the Railway email-send is a bonus. Treat overall success as: at least
    // the Supabase capture landed.
    const [supaRes, emailRes] = await Promise.allSettled([
      fetch('/api/pulse-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: first,
          last_name: last,
          email: em,
          business_name: result.business_name,
          business_url: result.url,
          signal_strength: result.signal_strength,
          score: result.score ?? null,
          platforms_mentioning: result.platforms_mentioning ?? null,
          platforms_checked: result.platforms_checked ?? null,
        }),
      }),
      fetch(`${API_URL}/api/pulse-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: em,
          first_name: first,
          last_name: last,
          ...result,
        }),
      }).catch(() => null),
    ]);

    const supaOk =
      supaRes.status === 'fulfilled' && supaRes.value.ok;

    setIsSending(false);

    if (!supaOk) {
      setError('Something went wrong. Please try again.');
      return;
    }

    // Silently ignore an emailRes failure — we still captured the lead.
    void emailRes;
    setIsSent(true);
  };

  return (
    <div className="mt-6">
      <AnimatePresence mode="wait">
        {!isSent ? (
          <motion.div
            key="capture"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <p className="font-body text-sm text-navy font-medium mb-3">
              Want your result card sent to your inbox?
            </p>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={isSending}
                  className="px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
                />
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={isSending}
                  className="px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="you@yourbusiness.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSending}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="bg-copper text-white font-body font-medium px-5 py-2.5 rounded-lg hover:bg-copper/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSending ? 'Sending...' : 'Send My Results'}
                </button>
              </div>
            </form>
            {error && (
              <p className="text-xs text-status-red mt-2">{error}</p>
            )}
            <p className="text-xs text-warmgray mt-2">
              No spam. Just your results.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-status-green/5 border border-status-green/20 rounded-lg p-4"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-status-green flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="font-body text-sm text-navy">
                Got it. Check your inbox — your results are on the way.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
