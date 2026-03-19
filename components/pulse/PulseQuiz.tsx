'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '@/lib/constants';
import SignalDot from '../SignalDot';

interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Does your website have structured data or schema markup?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'I do not know', value: 'idk' },
    ],
  },
  {
    id: 'q2',
    question:
      'If someone asked an AI about your type of business in your area, would it mention you by name?',
    options: [
      { label: 'Definitely', value: 'definitely' },
      { label: 'Maybe', value: 'maybe' },
      { label: 'Probably not', value: 'probably_not' },
      { label: 'No idea', value: 'no_idea' },
    ],
  },
  {
    id: 'q3',
    question:
      'Is your business information consistent across Google, Yelp, and your website?',
    options: [
      { label: 'Yes, everywhere', value: 'yes' },
      { label: 'Mostly', value: 'mostly' },
      { label: 'Not sure', value: 'not_sure' },
      { label: 'We are not listed on those', value: 'not_listed' },
    ],
  },
  {
    id: 'q4',
    question:
      'Does your homepage clearly state what you do, who you serve, and where you are located?',
    options: [
      { label: 'Yes, very clearly', value: 'very_clearly' },
      { label: 'Somewhat', value: 'somewhat' },
      { label: 'Not really', value: 'not_really' },
    ],
  },
  {
    id: 'q5',
    question: 'Have you updated your website content in the last 6 months?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: 'I do not remember', value: 'idk' },
    ],
  },
];

const SIGNAL_COLORS: Record<string, { border: string; bg: string; text: string }> = {
  strong: { border: 'border-l-status-green', bg: 'bg-status-green/10', text: 'text-status-green' },
  weak: { border: 'border-l-copper', bg: 'bg-copper/10', text: 'text-copper' },
  low: { border: 'border-l-warmgray', bg: 'bg-warmgray/10', text: 'text-warmgray' },
  none: { border: 'border-l-status-red', bg: 'bg-status-red/10', text: 'text-status-red' },
};

interface QuizResult {
  signal_strength: string;
  signal_key: string;
  headline: string;
  explanation: string;
  cta_text: string;
  cta_url: string;
}

export default function PulseQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = async (value: string) => {
    const question = QUESTIONS[currentQuestion];
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Submit quiz
      setIsSubmitting(true);
      try {
        const res = await fetch(`${API_URL}/api/quiz/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: newAnswers }),
        });

        if (!res.ok) throw new Error('Failed to submit');
        const data = await res.json();
        setResult(data);
      } catch {
        // Fallback: compute locally
        setResult({
          signal_strength: 'Low Signal',
          signal_key: 'low',
          headline: 'Your signal is barely getting through.',
          explanation: 'Based on your answers, AI systems probably have a hard time finding accurate information about your business.',
          cta_text: 'Want to know for sure? Run a free Signal Pulse check with your actual URL.',
          cta_url: '/signal-pulse',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/signal-pulse/quiz`;
    navigator.clipboard.writeText(shareUrl);
  };

  // Progress bar
  const progress = result
    ? 100
    : ((currentQuestion) / QUESTIONS.length) * 100;

  if (result) {
    const colors = SIGNAL_COLORS[result.signal_key] || SIGNAL_COLORS.none;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Result Card */}
        <div className={`bg-white rounded-2xl shadow-card border-l-4 ${colors.border} p-6 sm:p-8`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} mb-4`}>
            <span className={`font-body font-semibold text-sm ${colors.text}`}>
              {result.signal_strength}
            </span>
          </div>

          <h3 className="font-display text-xl text-navy mb-3">
            {result.headline}
          </h3>
          <p className="font-body text-sm text-warmgray leading-relaxed mb-6">
            {result.explanation}
          </p>

          {/* CTA */}
          <div className="space-y-3">
            <a
              href={result.cta_url}
              className="block w-full bg-copper text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-copper/90 transition-colors text-center"
            >
              Run the Full Signal Pulse Check
            </a>
            <button
              onClick={handleShare}
              className="block w-full bg-transparent border-2 border-navy/20 text-navy font-body font-medium py-3 px-6 rounded-lg hover:bg-navy/5 transition-colors text-center"
            >
              Share This Quiz
            </button>
          </div>

          {/* Branding */}
          <div className="mt-6 pt-4 border-t border-warmgray/10 flex items-center justify-center gap-2">
            <SignalDot size={5} />
            <span className="font-body text-xs text-warmgray">
              Signal & Structure AI
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  const question = QUESTIONS[currentQuestion];

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="font-body text-xs text-warmgray">
            Question {currentQuestion + 1} of {QUESTIONS.length}
          </span>
        </div>
        <div className="h-1.5 bg-warmgray/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-copper rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-display text-xl sm:text-2xl text-navy mb-6">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                disabled={isSubmitting}
                className="w-full text-left bg-white border-2 border-warmgray/15 rounded-xl px-5 py-4 font-body text-sm text-navy hover:border-copper hover:bg-copper/5 transition-all disabled:opacity-50"
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
