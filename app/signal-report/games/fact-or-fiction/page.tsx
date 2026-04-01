'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// --- Sound Effects ---
function createAudioContext() {
  if (typeof window === 'undefined') return null;
  try {
    return new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  } catch {
    return null;
  }
}

function playSound(ctx: AudioContext | null, type: 'reveal' | 'correct' | 'wrong' | 'complete') {
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  const now = ctx.currentTime;

  switch (type) {
    case 'reveal':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.1);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
      break;
    case 'correct':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
      break;
    case 'wrong':
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(140, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
      break;
    case 'complete':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.2);
      osc.frequency.setValueAtTime(784, now + 0.4);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.setValueAtTime(0.2, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
      osc.start(now);
      osc.stop(now + 0.8);
      break;
  }
}

// --- Game Data ---
interface Statement {
  text: string;
  isFact: boolean;
  businessName: string;
  explanation: string;
}

const STATEMENTS: Statement[] = [
  {
    text: 'When asked about a popular Durham coffee shop, ChatGPT said it closed in 2022 and suggested visiting a competitor instead.',
    isFact: true,
    businessName: 'A Durham coffee shop',
    explanation: 'This actually happened. The coffee shop is still open and thriving, but AI had outdated information and was actively directing customers to a competitor. The business had no idea until a customer mentioned it.',
  },
  {
    text: 'A Raleigh law firm asked Claude about their services and received a perfectly accurate description of their practice areas, founding year, and partners.',
    isFact: false,
    businessName: 'A Raleigh law firm',
    explanation: 'AI made up a founding year that was off by 4 years and listed a partner who left the firm in 2020. The response sounded confident and detailed, which made it more dangerous because a potential client would have believed it.',
  },
  {
    text: 'Gemini correctly identified a Chapel Hill dentist as accepting new patients and listed their actual office hours.',
    isFact: true,
    businessName: 'A Chapel Hill dentist',
    explanation: 'This practice had invested in structured data on their website. Their hours, services, and patient availability were formatted in a way AI could read directly. This is the exception, not the rule.',
  },
  {
    text: 'A local gym was described by Gemini as offering virtual-only classes when they have never offered virtual classes in their history.',
    isFact: true,
    businessName: 'A local gym',
    explanation: 'During 2020, many gyms temporarily offered virtual classes. AI combined that era of information with the current business and created a description that was never true for this specific gym. They lost walk-in interest from people who assumed they were online-only.',
  },
  {
    text: 'ChatGPT accurately described a small accounting firm\'s specialization in nonprofit tax preparation, which is their primary service.',
    isFact: false,
    businessName: 'A small accounting firm',
    explanation: 'The firm actually specializes in small business tax preparation, not nonprofits. AI likely pulled from a guest blog post the owner wrote about nonprofit accounting and assumed that was their specialty. One piece of content reshaped how AI describes the entire business.',
  },
  {
    text: 'A wedding photographer\'s portfolio website was completely invisible to all the major AI platforms. None of them could describe the business at all.',
    isFact: true,
    businessName: 'A wedding photographer',
    explanation: 'The photographer had a beautiful portfolio website with stunning images but almost no text, no structured data, and no business information that AI could parse. A visually impressive site can be completely invisible to AI if it lacks the right structure.',
  },
  {
    text: 'Claude recommended a specific restaurant in Durham for "authentic Italian cuisine" when the restaurant actually serves Mexican food.',
    isFact: true,
    businessName: 'A Durham restaurant',
    explanation: 'AI confused two businesses at similar addresses. Without clear structured data to differentiate them, AI combined information from multiple sources and created a description that was confidently wrong about the most basic detail: what kind of food they serve.',
  },
  {
    text: 'A marketing agency\'s AI presence was so strong that all the major platforms gave nearly identical, accurate descriptions of their services.',
    isFact: false,
    businessName: 'A marketing agency',
    explanation: 'Some platforms had significant inaccuracies. One said they were based in Atlanta when they are in Charlotte. Another listed services they stopped offering two years ago. Even businesses that invest in their online presence are often surprised by how much AI gets wrong.',
  },
];

// --- Component ---
export default function FactOrFictionPage() {
  const audioCtx = useRef<AudioContext | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, 'fact' | 'fiction'>>(new Map());
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    audioCtx.current = createAudioContext();
    return () => { audioCtx.current?.close(); };
  }, []);

  useEffect(() => {
    if (!gameStarted || gameComplete) return;
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [gameStarted, gameComplete]);

  const correctCount = Array.from(answers.entries()).filter(([idx, answer]) => {
    const stmt = STATEMENTS[idx];
    return (answer === 'fact' && stmt.isFact) || (answer === 'fiction' && !stmt.isFact);
  }).length;

  const handleAnswer = useCallback((answer: 'fact' | 'fiction') => {
    if (revealed.has(currentIndex)) return;
    if (!gameStarted) setGameStarted(true);

    playSound(audioCtx.current, 'reveal');

    const stmt = STATEMENTS[currentIndex];
    const isCorrect = (answer === 'fact' && stmt.isFact) || (answer === 'fiction' && !stmt.isFact);

    setAnswers(prev => new Map(prev).set(currentIndex, answer));
    setRevealed(prev => new Set(prev).add(currentIndex));

    setTimeout(() => {
      playSound(audioCtx.current, isCorrect ? 'correct' : 'wrong');
    }, 300);

    // Check if this was the last one
    if (revealed.size + 1 === STATEMENTS.length) {
      setTimeout(() => {
        setGameComplete(true);
        playSound(audioCtx.current, 'complete');
      }, 2500);
    }
  }, [currentIndex, revealed, gameStarted]);

  const goToNext = () => {
    if (currentIndex < STATEMENTS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const current = STATEMENTS[currentIndex];
  const isRevealed = revealed.has(currentIndex);
  const playerAnswer = answers.get(currentIndex);
  const isCorrect = playerAnswer && ((playerAnswer === 'fact' && current.isFact) || (playerAnswer === 'fiction' && !current.isFact));

  return (
    <main className="min-h-screen bg-stone pt-24 pb-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-6 text-center">
        <p className="text-copper font-body font-semibold text-sm tracking-widest uppercase mb-3">The Signal Report</p>
        <h1 className="text-navy text-3xl sm:text-4xl md:text-5xl mb-4">Fact or Fiction</h1>
      </div>

      {/* Educational Context */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-card p-6 sm:p-8 shadow-card">
          <h2 className="font-body font-semibold text-navy text-lg mb-3">Why this game exists</h2>
          <p className="font-body text-warmgray leading-relaxed mb-4">
            AI platforms sound confident when they describe a business. They use complete sentences, specific details, and an authoritative tone. The problem is that confidence has nothing to do with accuracy. AI will describe a restaurant as serving Italian food when it actually serves Mexican food, and it will say it with the same certainty it uses when it gets something right.
          </p>
          <p className="font-body text-warmgray leading-relaxed mb-4">
            Every statement in this game is based on real situations that happen to real businesses every day. Some of these statements are true. Some are fabricated. Your job is to figure out which is which. If you find it difficult to tell the difference, that is the entire point. Your customers face the same challenge when they ask AI about your business.
          </p>
          <p className="font-body text-warmgray leading-relaxed">
            The businesses that get accurate AI responses are not lucky. They have the right information structured in the right way for AI to find and trust. The ones getting wrong responses do not have bad businesses. They just have not given AI anything reliable to work with yet.
          </p>
        </div>
      </div>

      {/* How to Play */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="bg-navy/5 rounded-card p-5 border border-navy/10">
          <p className="font-body text-navy text-sm font-semibold mb-2">How to play</p>
          <p className="font-body text-warmgray text-sm leading-relaxed">
            Read each statement about a real business and decide: is this something that actually happened, or is it made up? Tap "Fact" or "Fiction" to lock in your answer. The card will flip to reveal the truth. Navigate between statements with the arrows.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-3xl mx-auto px-6 mb-6">
        <div className="bg-white rounded-card p-4 flex items-center justify-between shadow-card">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Answered</p>
              <p className="text-navy font-mono font-bold text-xl">{revealed.size}/{STATEMENTS.length}</p>
            </div>
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Correct</p>
              <p className="text-navy font-mono font-bold text-xl">{correctCount}</p>
            </div>
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Time</p>
              <p className="text-navy font-mono font-bold text-xl">{formatTime(timer)}</p>
            </div>
          </div>
          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {STATEMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex
                    ? 'bg-copper scale-125'
                    : revealed.has(i)
                    ? answers.get(i) && ((answers.get(i) === 'fact' && STATEMENTS[i].isFact) || (answers.get(i) === 'fiction' && !STATEMENTS[i].isFact))
                      ? 'bg-status-green'
                      : 'bg-status-red'
                    : 'bg-stone-dark'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Statement Card */}
      <div className="max-w-3xl mx-auto px-6 mb-6">
        <div className={`rounded-card p-8 shadow-card transition-all duration-500 ${
          isRevealed
            ? isCorrect
              ? 'bg-white border-2 border-status-green'
              : 'bg-white border-2 border-status-red'
            : 'bg-white'
        }`}>
          {/* Statement number */}
          <p className="font-mono text-warmgray-light text-xs mb-4">
            Statement {currentIndex + 1} of {STATEMENTS.length}
          </p>

          {/* The statement */}
          <p className="font-body text-navy text-lg sm:text-xl leading-relaxed mb-6">
            {current.text}
          </p>

          {/* Answer buttons (only show if not revealed) */}
          {!isRevealed && (
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer('fact')}
                className="flex-1 bg-navy text-white py-4 rounded-button font-body font-semibold text-base hover:bg-navy-light transition-colors"
              >
                Fact
              </button>
              <button
                onClick={() => handleAnswer('fiction')}
                className="flex-1 bg-copper text-white py-4 rounded-button font-body font-semibold text-base hover:bg-copper-light transition-colors"
              >
                Fiction
              </button>
            </div>
          )}

          {/* Reveal section */}
          {isRevealed && (
            <div className="mt-2">
              <div className={`flex items-center gap-3 mb-4 ${isCorrect ? 'text-status-green' : 'text-status-red'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-status-green/10' : 'bg-status-red/10'}`}>
                  {isCorrect ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-body font-bold text-sm">
                    {isCorrect ? 'You got it right.' : 'Not quite.'}
                  </p>
                  <p className="font-body text-xs">
                    This is {current.isFact ? 'a fact' : 'fiction'}. You said {playerAnswer}.
                  </p>
                </div>
              </div>

              <div className="bg-stone rounded-card p-5">
                <p className="font-body text-warmgray text-sm leading-relaxed">
                  {current.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-3xl mx-auto px-6 mb-12 flex items-center justify-between">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="font-body text-sm text-navy font-semibold hover:text-copper transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          &larr; Previous
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === STATEMENTS.length - 1}
          className="font-body text-sm text-navy font-semibold hover:text-copper transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next &rarr;
        </button>
      </div>

      {/* Completion Screen */}
      {gameComplete && (
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <div className="bg-navy rounded-card p-8 text-center shadow-card">
            <h2 className="text-white text-2xl sm:text-3xl mb-3">All statements answered.</h2>
            <p className="text-white/60 text-base mb-2">
              {formatTime(timer)} &middot; {correctCount} of {STATEMENTS.length} correct
            </p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <p className="text-status-green font-mono font-bold text-3xl">{correctCount}</p>
                <p className="text-white/50 text-sm font-body">Correct</p>
              </div>
              <div className="text-center">
                <p className="text-status-red font-mono font-bold text-3xl">{STATEMENTS.length - correctCount}</p>
                <p className="text-white/50 text-sm font-body">Wrong</p>
              </div>
            </div>
            <p className="text-white/70 text-base mb-8 max-w-lg mx-auto leading-relaxed">
              {correctCount >= 6
                ? 'You have a sharp eye for AI accuracy. Most people struggle to tell the difference between what AI gets right and what it makes up. That instinct matters, because your customers do not have it. They take AI at its word.'
                : correctCount >= 4
                ? 'It was harder than you expected to tell fact from fiction. That is the reality for every person who asks AI about a business. AI sounds equally confident whether it is right or completely wrong. The only way to control what AI says is to give it the right information to work with.'
                : 'Most of these tripped you up, and that is not a reflection of you. AI is designed to sound authoritative whether it is accurate or not. If you had trouble spotting the errors here, imagine how your customers feel when they ask AI about your business and get a confident wrong answer.'
              }
            </p>
            <Link
              href="/signal-pulse"
              className="inline-block bg-copper text-white px-8 py-3.5 rounded-button font-body font-semibold text-base hover:bg-copper-light transition-colors shadow-button"
            >
              Find Out What AI Says About You
            </Link>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-warmgray-light text-sm leading-relaxed">
          Fact or Fiction is part of The Signal Report, a bi-weekly newsletter from Signal &amp; Structure AI.
          <br />
          <Link href="/resources" className="text-copper hover:text-copper-dark transition-colors">
            Subscribe to The Signal Report
          </Link>
        </p>
      </div>
    </main>
  );
}
