'use client';

import { motion } from 'framer-motion';
import SignalDot from '../SignalDot';

interface PulseResultData {
  signal_strength: string;
  signal_key: string;
  business_name: string;
  url: string;
  headline: string;
  explanation: string;
  schema_summary: string;
  content_summary: string;
  schema_sub_score: string;
  content_sub_score: string;
  checked_at: string;
}

interface PulseResultCardProps {
  result: PulseResultData;
}

const SIGNAL_COLORS: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  strong: {
    border: 'border-l-status-green',
    bg: 'bg-status-green/10',
    text: 'text-status-green',
    dot: 'bg-status-green',
  },
  weak: {
    border: 'border-l-copper',
    bg: 'bg-copper/10',
    text: 'text-copper',
    dot: 'bg-copper',
  },
  low: {
    border: 'border-l-warmgray',
    bg: 'bg-warmgray/10',
    text: 'text-warmgray',
    dot: 'bg-warmgray',
  },
  none: {
    border: 'border-l-status-red',
    bg: 'bg-status-red/10',
    text: 'text-status-red',
    dot: 'bg-status-red',
  },
};

const SIGNAL_ICONS: Record<string, React.ReactNode> = {
  strong: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  weak: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  low: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  none: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  ),
};

function SubScoreBadge({ label, score }: { label: string; score: string }) {
  const colors = SIGNAL_COLORS[score] || SIGNAL_COLORS.none;
  const labels: Record<string, string> = {
    strong: 'Strong',
    weak: 'Weak',
    low: 'Low',
    none: 'None',
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      <span className="font-body text-xs text-warmgray">{label}:</span>
      <span className={`font-body text-xs font-medium ${colors.text}`}>
        {labels[score] || 'None'}
      </span>
    </div>
  );
}

export default function PulseResultCard({ result }: PulseResultCardProps) {
  const colors = SIGNAL_COLORS[result.signal_key] || SIGNAL_COLORS.none;
  const icon = SIGNAL_ICONS[result.signal_key] || SIGNAL_ICONS.none;
  const checkedDate = new Date(result.checked_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`bg-white rounded-2xl shadow-card border-l-4 ${colors.border} overflow-hidden`}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="font-display text-xl text-navy">{result.business_name}</h3>
        <p className="font-body text-sm text-warmgray mt-0.5">{result.url}</p>
      </div>

      {/* Signal Strength Badge */}
      <div className="px-6 pb-4">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg}`}>
          <span className={colors.text}>{icon}</span>
          <span className={`font-body font-semibold text-sm ${colors.text}`}>
            {result.signal_strength}
          </span>
        </div>
      </div>

      {/* Headline + Explanation */}
      <div className="px-6 pb-4">
        <h4 className="font-display text-lg text-navy mb-2">{result.headline}</h4>
        <p className="font-body text-sm text-warmgray leading-relaxed">
          {result.explanation}
        </p>
      </div>

      {/* Sub-scores */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-stone rounded-lg p-4">
            <p className="font-body text-xs font-medium text-navy uppercase tracking-wider mb-2">
              Structured Data
            </p>
            <SubScoreBadge label="Signal" score={result.schema_sub_score} />
            <p className="font-body text-xs text-warmgray mt-2 leading-relaxed">
              {result.schema_summary}
            </p>
          </div>
          <div className="bg-stone rounded-lg p-4">
            <p className="font-body text-xs font-medium text-navy uppercase tracking-wider mb-2">
              Content Readability
            </p>
            <SubScoreBadge label="Signal" score={result.content_sub_score} />
            <p className="font-body text-xs text-warmgray mt-2 leading-relaxed">
              {result.content_summary}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-stone/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SignalDot size={5} />
          <span className="font-body text-xs text-warmgray">
            Checked {checkedDate}
          </span>
        </div>
        <span className="font-body text-xs font-medium text-navy">
          Signal & Structure AI
        </span>
      </div>
    </motion.div>
  );
}

export type { PulseResultData };
