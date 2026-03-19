'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SignalDot from '../SignalDot';

interface PulseFormProps {
  onSubmit: (businessName: string, url: string) => void;
  isLoading: boolean;
}

export default function PulseForm({ onSubmit, isLoading }: PulseFormProps) {
  const [businessName, setBusinessName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (businessName.trim() && url.trim()) {
      onSubmit(businessName.trim(), url.trim());
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="pulse-business"
          className="block font-body text-sm font-medium text-navy mb-1"
        >
          Business name
        </label>
        <input
          type="text"
          id="pulse-business"
          name="businessName"
          required
          placeholder="Acme Dental"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="pulse-url"
          className="block font-body text-sm font-medium text-navy mb-1"
        >
          Website URL
        </label>
        <input
          type="text"
          id="pulse-url"
          name="url"
          required
          placeholder="acmedental.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
        />
        <p className="text-xs text-warmgray mt-1">
          We will check your homepage for structured data and content signals.
        </p>
      </div>
      <button
        type="submit"
        disabled={isLoading || !businessName.trim() || !url.trim()}
        className="w-full bg-copper text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-copper/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Checking your signal
            </motion.span>
            <span className="flex gap-1">
              <SignalDot size={5} />
              <SignalDot size={5} />
              <SignalDot size={5} />
            </span>
          </span>
        ) : (
          'Check My Signal'
        )}
      </button>
      <p className="text-xs text-warmgray text-center">
        Free. No account required. Results in seconds.
      </p>
    </form>
  );
}
