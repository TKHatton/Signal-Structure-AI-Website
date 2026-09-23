'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import SectionLabel from './SectionLabel';
import {
  EMAIL,
  API_URL,
} from '@/lib/constants';
import { SERVICES, REEL, recommend } from '@/lib/services';
import type { Answers } from '@/lib/services';

interface Question {
  key: keyof Answers;
  title: string;
  help?: string;
  options: { value: string; label: string }[];
}

const Q_KNOWN: Question = {
  key: 'known',
  title: 'Do you have a Signal Score yet?',
  help: 'It is a 0 to 100 score for how well AI knows your business.',
  options: [
    { value: 'no', label: 'Not yet' },
    { value: 'yes', label: 'Yes, I do' },
  ],
};

const Q_GOAL: Question = {
  key: 'goal',
  title: 'What do you want most?',
  options: [
    { value: 'know', label: 'Know what AI says about me' },
    { value: 'fix', label: 'Fix what AI gets wrong' },
    { value: 'content', label: 'Keep showing up with fresh content' },
    { value: 'chat', label: 'Get customers using my tools inside ChatGPT' },
    { value: 'track', label: 'Track my progress over time' },
  ],
};

const Q_WHO: Question = {
  key: 'who',
  title: 'Who should do the work?',
  options: [
    { value: 'me', label: 'I will do it myself' },
    { value: 'you', label: 'Do it for me' },
  ],
};

function questionsFor(a: Answers): Question[] {
  const list = [Q_KNOWN, Q_GOAL];
  if (a.goal === 'fix' || a.goal === 'content') list.push(Q_WHO);
  return list;
}

export default function ServiceFinder() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<'quiz' | 'working' | 'result'>('quiz');
  const [reelIndex, setReelIndex] = useState(0);
  const timers = useRef<{ tick?: ReturnType<typeof setInterval>; done?: ReturnType<typeof setTimeout> }>({});

  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  useEffect(() => {
    const t = timers.current;
    return () => {
      if (t.tick) clearInterval(t.tick);
      if (t.done) clearTimeout(t.done);
    };
  }, []);

  const questions = questionsFor(answers);
  const current = questions[step];
  const { best, next } = recommend(answers);

  const finish = () => {
    const reduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setPhase('result');
      return;
    }
    setPhase('working');
    timers.current.tick = setInterval(() => setReelIndex((i) => (i + 1) % REEL.length), 90);
    timers.current.done = setTimeout(() => {
      if (timers.current.tick) clearInterval(timers.current.tick);
      setPhase('result');
    }, 1500);
  };

  const choose = (value: string) => {
    const updated = { ...answers, [current.key]: value } as Answers;
    const qs = questionsFor(updated);
    setAnswers(updated);
    if (step + 1 >= qs.length) {
      finish();
    } else {
      setStep(step + 1);
    }
  };

  const back = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setPhase('quiz');
    setEmail('');
    setEmailState('idle');
  };

  const submitEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailState('sending');
    try {
      const res = await fetch(`${API_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: `service-finder:${best}` }),
      });
      if (!res.ok) throw new Error('failed');
      setEmailState('done');
    } catch {
      setEmailState('error');
    }
  };

  const bestService = SERVICES[best];
  const nextService = next ? SERVICES[next] : null;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <SectionLabel>NOT SURE WHICH ONE FITS?</SectionLabel>
        <h2 className="font-display text-section-heading text-navy mt-2 mb-3">
          Answer a few questions. Get your answer right here.
        </h2>
        <p className="font-body text-warmgray">Takes about 30 seconds. No email needed.</p>
      </div>

      <div className="bg-white rounded-card shadow-card p-6 sm:p-10 min-h-[320px] flex flex-col justify-center" aria-live="polite">
        <AnimatePresence mode="wait">
          {phase === 'quiz' && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-5" aria-hidden="true">
                {questions.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${i <= step ? 'bg-copper w-8' : 'bg-stone-dark w-4'}`}
                  />
                ))}
              </div>
              <h3 className="font-display text-2xl text-navy mb-2">{current.title}</h3>
              {current.help && <p className="font-body text-sm text-warmgray mb-5">{current.help}</p>}
              <div className={`grid gap-3 ${current.help ? '' : 'mt-5'}`}>
                {current.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => choose(opt.value)}
                    className="w-full text-left font-body text-navy px-5 py-4 rounded-lg border border-warmgray/30 hover:border-copper hover:bg-copper/5 focus:outline-none focus:ring-2 focus:ring-copper transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="mt-5 font-body text-sm text-warmgray hover:text-copper transition-colors"
                >
                  Back
                </button>
              )}
            </motion.div>
          )}

          {phase === 'working' && (
            <motion.div
              key="working"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-6"
            >
              <p className="font-body text-xs uppercase tracking-[0.08em] text-warmgray mb-4">Working it out</p>
              <div className="font-display text-3xl text-navy h-12 overflow-hidden">{SERVICES[REEL[reelIndex]].name}</div>
            </motion.div>
          )}

          {phase === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-copper mb-2">
                Your best next step
              </p>
              <h3 className="font-display text-3xl text-navy mb-1">{bestService.name}</h3>
              <p className="font-mono text-lg text-navy mb-4">
                <span className="font-bold">{bestService.price}</span>{' '}
                <span className="text-warmgray text-sm">{bestService.term}</span>
              </p>
              <p className="font-body text-warmgray leading-relaxed mb-6">{bestService.why}</p>
              <Button href={bestService.href} variant="primary" className="w-full sm:w-auto text-center">
                {bestService.cta}
              </Button>

              {nextService && (
                <p className="font-body text-sm text-warmgray mt-6">
                  After that, take a look at{' '}
                  <a href={nextService.href} className="text-copper hover:text-copper-dark underline underline-offset-2">
                    {nextService.name}
                  </a>{' '}
                  ({nextService.price}).
                </p>
              )}

              <div className="mt-8 pt-6 border-t border-stone-dark">
                {emailState === 'done' ? (
                  <p className="font-body text-sm text-navy">You are in. Check your inbox.</p>
                ) : (
                  <form onSubmit={submitEmail}>
                    <label htmlFor="finder-email" className="block font-body text-sm font-semibold text-navy mb-2">
                      Want more like this? Get The Signal Report by email.
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        id="finder-email"
                        type="email"
                        required
                        placeholder="you@yourbusiness.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={emailState === 'sending'}
                        className="flex-1 px-4 py-3 rounded-lg border border-warmgray/30 font-body text-navy focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={emailState === 'sending' || !email.trim()}
                        className="bg-navy text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {emailState === 'sending' ? 'Sending...' : 'Send it'}
                      </button>
                    </div>
                    {emailState === 'error' && (
                      <p className="text-xs text-status-red mt-2">Something went wrong. Please try again.</p>
                    )}
                    <p className="font-body text-xs text-warmgray mt-2">Optional. Unsubscribe anytime.</p>
                  </form>
                )}
              </div>

              <button
                type="button"
                onClick={restart}
                className="mt-6 font-body text-sm text-warmgray hover:text-copper transition-colors"
              >
                Start over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-center font-body text-sm text-warmgray mt-6">
        Prefer to just ask?{' '}
        <a
          href={`mailto:${EMAIL}?subject=Which%20Signal%20service%20is%20right%20for%20me`}
          className="text-copper hover:text-copper-dark underline underline-offset-2"
        >
          Email me
        </a>
        .
      </p>
    </div>
  );
}
