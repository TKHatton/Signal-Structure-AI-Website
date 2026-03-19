'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import GridTexture from '../GridTexture';
import SignalDot from '../SignalDot';

interface PulseChatPromptProps {
  businessName: string;
  url: string;
  signalKey: string;
}

export default function PulseChatPrompt({ businessName, url, signalKey }: PulseChatPromptProps) {
  const chatUrl = `/signal-pulse/chat?business=${encodeURIComponent(businessName)}&url=${encodeURIComponent(url)}&signal=${signalKey}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-8 relative bg-navy rounded-2xl overflow-hidden"
    >
      <GridTexture opacity={0.03} />
      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <SignalDot size={7} />
          <span className="font-body text-xs font-medium uppercase tracking-[0.08em] text-white/70">
            Go Deeper
          </span>
        </div>
        <h4 className="font-display text-xl text-white mb-2">
          Want to know exactly what to fix?
        </h4>
        <p className="font-body text-sm text-white/70 mb-5 leading-relaxed">
          Talk to our AI signal advisor. It takes about two minutes, and you will walk away
          knowing exactly where your gaps are and what to do about them.
        </p>
        <Link
          href={chatUrl}
          className="inline-block bg-copper text-white font-body font-medium px-6 py-3 rounded-lg hover:bg-copper-light transition-colors"
        >
          Start a Signal Conversation
        </Link>
      </div>
    </motion.div>
  );
}
