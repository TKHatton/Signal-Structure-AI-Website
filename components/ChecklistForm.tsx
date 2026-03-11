'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChecklistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Beehiiv/email platform API
    // For now, show the thank-you popup
    setIsSubmitted(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-display text-2xl text-navy mb-2">
              Get the Free Checklist
            </h3>
            <p className="font-body text-sm text-warmgray mb-6">
              We will email you the checklist as a downloadable PDF. Takes about
              30 minutes to arrive. Check your spam folder if you do not see it.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input type="hidden" name="source" value="lead-magnet" />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block font-body text-sm font-medium text-navy mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    required
                    placeholder="Lenise"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block font-body text-sm font-medium text-navy mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    required
                    placeholder="Kenney"
                    className="w-full px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email-lead"
                  className="block font-body text-sm font-medium text-navy mb-1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email-lead"
                  name="email"
                  required
                  placeholder="you@yourbusiness.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="business-lead"
                  className="block font-body text-sm font-medium text-navy mb-1"
                >
                  Business name{' '}
                  <span className="text-warmgray font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="business-lead"
                  name="business"
                  placeholder="Your Business Name"
                  className="w-full px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-copper text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-copper/90 transition-colors mt-2"
              >
                Send Me the Checklist
              </button>
              <p className="text-xs text-warmgray text-center">
                No spam. Your information stays with us.
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-copper"
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
            </div>
            <h3 className="font-display text-2xl text-navy mb-3">
              Thank you{firstName ? `, ${firstName}` : ''}!
            </h3>
            <p className="font-body text-warmgray mb-2">
              Your AI Visibility Checklist is on its way.
            </p>
            <p className="font-body text-sm text-warmgray mb-4">
              Check your inbox in the next 30 minutes. If you do not see it,
              check your spam or promotions folder.
            </p>
            <p className="font-body text-sm text-warmgray">
              You are also now subscribed to our newsletter,{' '}
              <strong className="text-navy">The Signal Report</strong>, with
              AI visibility tips and featured
              businesses.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
