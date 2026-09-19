'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EMAIL } from '@/lib/constants';

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-warmgray/30 bg-white font-body text-navy placeholder:text-warmgray/60 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50';
const labelClass = 'block font-body text-sm font-semibold text-navy mb-2';

export default function McpSetupForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    business_name: '',
    website: '',
    customers_ask: '',
    idea: '',
    promo_code: '',
    company_fax: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const set = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/mcp-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('failed');
      setIsSent(true);
    } catch {
      setError(`Something went wrong. Please try again, or email ${EMAIL}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-card shadow-card p-8 md:p-10 text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-status-green/10">
            <svg className="h-6 w-6 text-status-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-navy mb-3">Got it. Thank you.</h3>
          <p className="font-body text-warmgray leading-relaxed">
            I&apos;ll read what you sent and come back to you by email with ideas for what your MCP could do.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-card shadow-card p-8 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="mcp-name" className={labelClass}>Your name</label>
              <input id="mcp-name" type="text" required autoComplete="name" value={values.name} onChange={set('name')} disabled={isSubmitting} className={inputClass} />
            </div>
            <div>
              <label htmlFor="mcp-email" className={labelClass}>Email</label>
              <input id="mcp-email" type="email" required autoComplete="email" placeholder="you@yourbusiness.com" value={values.email} onChange={set('email')} disabled={isSubmitting} className={inputClass} />
            </div>
            <div>
              <label htmlFor="mcp-business" className={labelClass}>Business name</label>
              <input id="mcp-business" type="text" required autoComplete="organization" value={values.business_name} onChange={set('business_name')} disabled={isSubmitting} className={inputClass} />
            </div>
            <div>
              <label htmlFor="mcp-website" className={labelClass}>Website <span className="font-normal text-warmgray">(optional)</span></label>
              <input id="mcp-website" type="text" autoComplete="url" placeholder="yourbusiness.com" value={values.website} onChange={set('website')} disabled={isSubmitting} className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="mcp-ask" className={labelClass}>What do your customers ask you most?</label>
            <textarea id="mcp-ask" required rows={4} value={values.customers_ask} onChange={set('customers_ask')} disabled={isSubmitting} className={inputClass} />
          </div>

          <div>
            <label htmlFor="mcp-idea" className={labelClass}>Anything you already have in mind? <span className="font-normal text-warmgray">(optional)</span></label>
            <textarea id="mcp-idea" rows={3} value={values.idea} onChange={set('idea')} disabled={isSubmitting} className={inputClass} />
          </div>

          <div className="sm:max-w-xs">
            <label htmlFor="mcp-promo" className={labelClass}>Promo code <span className="font-normal text-warmgray">(optional)</span></label>
            <input id="mcp-promo" type="text" value={values.promo_code} onChange={set('promo_code')} disabled={isSubmitting} className={inputClass} />
          </div>

          {/* Honeypot: hidden from people, bots fill it in. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="mcp-fax">Leave this empty</label>
            <input id="mcp-fax" type="text" tabIndex={-1} autoComplete="off" value={values.company_fax} onChange={set('company_fax')} />
          </div>

          {error && <p className="text-sm text-status-red">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-copper text-white font-body font-semibold py-3 px-8 rounded-button shadow-button hover:shadow-button-hover hover:bg-copper-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send it to me'}
            </button>
            <p className="font-body text-xs text-warmgray mt-3">
              I read every one and reply by email with ideas for what your MCP could do.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
