'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SignalDot from '../SignalDot';

// The pulse check is a single request that returns once the Signal Engine
// finishes. It does not stream progress, so these steps run on an estimated
// timeline: each is real work happening server-side, and the last step holds
// until the response actually arrives. This keeps the wait feeling alive
// instead of looking like a frozen spinner.
const STEPS = [
  'Scanning your website for structure',
  'Asking the AI platforms about your business',
  'Reading how they describe you',
  'Putting your results together',
];

const STEP_DELAY_MS = 4000;

export default function PulseLoading() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timers = STEPS.map((_, i) =>
      i === 0
        ? null
        : setTimeout(() => setActiveStep(i), i * STEP_DELAY_MS)
    );
    return () => timers.forEach((t) => t && clearTimeout(t));
  }, []);

  return (
    <div className="mt-6 bg-white rounded-2xl shadow-card p-6 sm:p-8">
      <p className="font-body text-sm font-medium text-navy mb-5">
        Checking your signal
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          …
        </motion.span>
      </p>

      <ul className="space-y-3">
        {STEPS.map((step, i) => {
          const isDone = i < activeStep;
          const isActive = i === activeStep;
          return (
            <li
              key={step}
              className={`flex items-center gap-3 font-body text-sm transition-colors duration-300 ${
                isActive ? 'text-navy' : isDone ? 'text-warmgray' : 'text-warmgray/40'
              }`}
            >
              {isDone ? (
                <svg
                  className="w-4 h-4 text-status-green flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : isActive ? (
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <SignalDot size={5} />
                </motion.span>
              ) : (
                <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-warmgray/30" />
                </span>
              )}
              <span>{step}</span>
            </li>
          );
        })}
      </ul>

      <p className="font-body text-xs text-warmgray mt-5">
        This usually takes up to a minute. We are checking several AI platforms live.
      </p>
    </div>
  );
}
