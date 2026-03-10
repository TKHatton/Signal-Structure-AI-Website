'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SignalDot from './SignalDot';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`bg-white rounded-card shadow-card overflow-hidden transition-shadow duration-300 ${
              isOpen ? 'shadow-card-hover' : ''
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left p-6 md:p-8 flex items-start gap-4 group"
              aria-expanded={isOpen}
            >
              <SignalDot
                size={8}
                className={`mt-1.5 flex-shrink-0 transition-colors duration-300 ${
                  isOpen ? 'bg-copper' : 'bg-navy'
                }`}
              />
              <span
                className={`font-body text-lg md:text-xl font-semibold transition-colors duration-300 flex-1 ${
                  isOpen ? 'text-copper' : 'text-navy group-hover:text-copper'
                }`}
              >
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 mt-1.5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-copper' : 'text-warmgray'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[52px] md:pl-[68px]">
                    <p className="font-body text-lg text-warmgray leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
