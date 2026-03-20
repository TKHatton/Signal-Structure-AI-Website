'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '@/lib/constants';

interface NewsletterFormProps {
  source?: string;
  buttonText?: string;
  placeholder?: string;
}

export default function NewsletterForm({ source = 'newsletter', buttonText = 'Subscribe', placeholder = 'you@yourbusiness.com' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || 'Something went wrong');
      }

      setIsSubscribed(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.div
          key="subscribed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-status-green/5 border border-status-green/20 rounded-lg p-4 max-w-md mx-auto"
        >
          <div className="flex items-center gap-2 justify-center">
            <svg
              className="w-5 h-5 text-status-green flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-body text-sm text-navy">
              You are in. Check your inbox for a welcome email.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <form className="max-w-md mx-auto flex gap-3" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 rounded-lg border border-warmgray/30 font-body text-navy focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="bg-copper text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-copper/90 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Joining...' : buttonText}
            </button>
          </form>
          {error && (
            <p className="text-xs text-status-red mt-2 text-center">{error}</p>
          )}
          <p className="text-xs text-warmgray mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
