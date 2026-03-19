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
  };
}

export default function PulseEmailCapture({ result }: PulseEmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSending(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/pulse-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          ...result,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to send email');
      }

      setIsSent(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
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
              Get your result card sent to your inbox
            </p>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@yourbusiness.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
                className="flex-1 px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSending || !email.trim()}
                className="bg-copper text-white font-body font-medium px-5 py-2.5 rounded-lg hover:bg-copper/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSending ? 'Sending...' : 'Send My Results'}
              </button>
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
                Check your inbox. Your results are on the way.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
