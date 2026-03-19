'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';

// --- Types ---
interface CardData {
  id: number;
  type: 'business' | 'response';
  pairId: number;
  content: string;
  label: string;
  isAccurate: boolean;
}

// --- Game Data ---
// Each pair: a business and what AI says about them
// Some AI responses are accurate, some are wrong
const PAIRS = [
  {
    business: { label: 'Durham Bakery', content: 'Family-owned bakery in Durham, NC. Known for sourdough bread and custom wedding cakes. Open since 2014.' },
    response: { content: 'This Durham bakery specializes in automotive repair and tire rotation services.', isAccurate: false },
  },
  {
    business: { label: 'Peak Legal Group', content: 'Business law firm serving startups and small businesses in the Triangle area. Founded 2018.' },
    response: { content: 'Peak Legal Group is a business law firm in the Triangle area that helps startups and small businesses with formation, contracts, and compliance.', isAccurate: true },
  },
  {
    business: { label: 'Bright Smile Dental', content: 'General and cosmetic dentistry in Raleigh. Accepting new patients. 15 years in practice.' },
    response: { content: 'Bright Smile Dental closed permanently in 2021 and is no longer accepting patients.', isAccurate: false },
  },
  {
    business: { label: 'Green Leaf Landscaping', content: 'Residential and commercial landscaping in Chapel Hill. Specializes in sustainable garden design.' },
    response: { content: 'Green Leaf Landscaping serves the Chapel Hill area with residential and commercial landscaping services, with a focus on sustainable and native plant designs.', isAccurate: true },
  },
  {
    business: { label: 'Forge Fitness', content: 'CrossFit and personal training gym in Durham. Open 5am to 9pm. Free first class for new members.' },
    response: { content: 'Forge Fitness is a yoga and meditation studio located in Charlotte, NC, offering virtual classes only.', isAccurate: false },
  },
  {
    business: { label: 'Atlas Accounting', content: 'CPA firm specializing in tax preparation and bookkeeping for freelancers and small business owners.' },
    response: { content: 'Atlas Accounting is a CPA firm that provides tax preparation and bookkeeping services primarily for freelancers and small business owners.', isAccurate: true },
  },
  {
    business: { label: 'Copper & Clay Studio', content: 'Pottery and ceramics workshop. Offers classes for beginners and advanced students. Located downtown Durham.' },
    response: { content: 'Copper & Clay Studio is a copper plumbing supply company serving contractors in the Raleigh-Durham metro area.', isAccurate: false },
  },
  {
    business: { label: 'Signal & Structure AI', content: 'AI discoverability consultancy helping businesses become visible and accurate across AI platforms like ChatGPT and Claude.' },
    response: { content: 'Signal & Structure AI helps businesses become discoverable and accurately represented by AI platforms including ChatGPT, Claude, Perplexity, and Gemini.', isAccurate: true },
  },
];

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// --- Component ---
export default function SignalMatchPage() {
  const cards = useMemo(() => {
    const allCards: CardData[] = [];
    PAIRS.forEach((pair, idx) => {
      allCards.push({
        id: idx * 2,
        type: 'business',
        pairId: idx,
        content: pair.business.content,
        label: pair.business.label,
        isAccurate: pair.response.isAccurate,
      });
      allCards.push({
        id: idx * 2 + 1,
        type: 'response',
        pairId: idx,
        content: pair.response.content,
        label: 'AI Response',
        isAccurate: pair.response.isAccurate,
      });
    });
    return shuffle(allCards);
  }, []);

  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set());
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [showResult, setShowResult] = useState<{ matched: boolean; isAccurate: boolean } | null>(null);
  const [lockBoard, setLockBoard] = useState(false);

  // Timer
  useEffect(() => {
    if (!gameStarted || gameComplete) return;
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [gameStarted, gameComplete]);

  // Check completion
  useEffect(() => {
    if (matchedPairs.size === PAIRS.length && gameStarted) {
      setGameComplete(true);
    }
  }, [matchedPairs, gameStarted]);

  const handleCardClick = useCallback((cardId: number) => {
    if (lockBoard) return;
    if (flippedIds.has(cardId)) return;
    if (matchedPairs.has(cards.find(c => c.id === cardId)!.pairId)) return;

    if (!gameStarted) setGameStarted(true);

    const newFlipped = new Set(flippedIds);
    newFlipped.add(cardId);
    setFlippedIds(newFlipped);

    const newSelected = [...selectedCards, cardId];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setMoves(m => m + 1);
      setLockBoard(true);

      const card1 = cards.find(c => c.id === newSelected[0])!;
      const card2 = cards.find(c => c.id === newSelected[1])!;

      if (card1.pairId === card2.pairId && card1.type !== card2.type) {
        // Match found
        setShowResult({ matched: true, isAccurate: card1.isAccurate });
        setTimeout(() => {
          setMatchedPairs(prev => new Set([...prev, card1.pairId]));
          setSelectedCards([]);
          setShowResult(null);
          setLockBoard(false);
        }, 2000);
      } else {
        // No match
        setShowResult({ matched: false, isAccurate: false });
        setTimeout(() => {
          const resetFlipped = new Set(newFlipped);
          resetFlipped.delete(newSelected[0]);
          resetFlipped.delete(newSelected[1]);
          setFlippedIds(resetFlipped);
          setSelectedCards([]);
          setShowResult(null);
          setLockBoard(false);
        }, 1500);
      }
    }
  }, [cards, flippedIds, matchedPairs, selectedCards, lockBoard, gameStarted]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isCardFlipped = (cardId: number) => {
    const card = cards.find(c => c.id === cardId)!;
    return flippedIds.has(cardId) || matchedPairs.has(card.pairId);
  };

  const isCardMatched = (cardId: number) => {
    const card = cards.find(c => c.id === cardId)!;
    return matchedPairs.has(card.pairId);
  };

  const accurateMatches = Array.from(matchedPairs).filter(pairId => PAIRS[pairId].response.isAccurate).length;
  const inaccurateMatches = matchedPairs.size - accurateMatches;

  return (
    <main className="min-h-screen bg-stone pt-24 pb-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-8 text-center">
        <p className="text-copper font-body font-semibold text-sm tracking-widest uppercase mb-3">The Signal Report</p>
        <h1 className="text-navy text-3xl sm:text-4xl md:text-5xl mb-4">Signal Match</h1>
        <p className="text-warmgray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Flip cards to match each business with what AI says about them. Some AI responses are accurate. Some are completely wrong. Find all 8 pairs.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <div className="bg-white rounded-card p-4 flex items-center justify-between shadow-card flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Pairs</p>
              <p className="text-navy font-mono font-bold text-xl">{matchedPairs.size}/{PAIRS.length}</p>
            </div>
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Moves</p>
              <p className="text-navy font-mono font-bold text-xl">{moves}</p>
            </div>
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Time</p>
              <p className="text-navy font-mono font-bold text-xl">{formatTime(timer)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-green"></div>
              <span className="text-warmgray text-sm font-body">Accurate: {accurateMatches}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-red"></div>
              <span className="text-warmgray text-sm font-body">Wrong: {inaccurateMatches}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Match Result Toast */}
      {showResult && (
        <div className="max-w-5xl mx-auto px-6 mb-4">
          <div className={`rounded-card p-4 text-center font-body font-semibold text-sm transition-all ${
            showResult.matched
              ? showResult.isAccurate
                ? 'bg-status-green/10 text-status-green border border-status-green/20'
                : 'bg-status-red/10 text-status-red border border-status-red/20'
              : 'bg-warmgray-light/10 text-warmgray border border-warmgray-light/20'
          }`}>
            {showResult.matched
              ? showResult.isAccurate
                ? 'Match found. AI got this one right.'
                : 'Match found. But AI got this one completely wrong.'
              : 'Not a match. Try again.'
            }
          </div>
        </div>
      )}

      {/* Card Grid */}
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {cards.map(card => {
            const flipped = isCardFlipped(card.id);
            const matched = isCardMatched(card.id);

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="perspective-1000 cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`relative w-full transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    minHeight: '160px',
                  }}
                >
                  {/* Card Back (face down) */}
                  <div
                    className={`absolute inset-0 rounded-card flex items-center justify-center transition-all ${
                      matched ? 'opacity-0' : 'bg-navy hover:bg-navy-light shadow-card hover:shadow-card-hover'
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-center p-4">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-copper/20 flex items-center justify-center">
                        <span className="text-copper text-lg">?</span>
                      </div>
                      <p className="text-white/40 text-xs font-body uppercase tracking-wider">Flip to reveal</p>
                    </div>
                  </div>

                  {/* Card Front (face up) */}
                  <div
                    className={`absolute inset-0 rounded-card p-4 flex flex-col justify-between transition-all ${
                      matched
                        ? card.isAccurate
                          ? 'bg-white border-2 border-status-green shadow-card'
                          : 'bg-white border-2 border-status-red shadow-card'
                        : 'bg-white shadow-card'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-body font-bold uppercase tracking-wider ${
                          card.type === 'business'
                            ? 'bg-navy/10 text-navy'
                            : card.isAccurate && matched
                            ? 'bg-status-green/10 text-status-green'
                            : !card.isAccurate && matched
                            ? 'bg-status-red/10 text-status-red'
                            : 'bg-copper/10 text-copper'
                        }`}>
                          {card.type === 'business' ? card.label : 'AI Says'}
                        </span>
                        {matched && card.type === 'response' && (
                          <span className={`text-[10px] font-body font-bold uppercase ${
                            card.isAccurate ? 'text-status-green' : 'text-status-red'
                          }`}>
                            {card.isAccurate ? 'Accurate' : 'Wrong'}
                          </span>
                        )}
                      </div>
                      <p className="text-navy text-xs sm:text-sm leading-relaxed font-body">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion Screen */}
      {gameComplete && (
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <div className="bg-navy rounded-card p-8 text-center shadow-card">
            <h2 className="text-white text-2xl sm:text-3xl mb-3">All pairs matched.</h2>
            <p className="text-white/60 text-base mb-2">
              {formatTime(timer)} &middot; {moves} moves
            </p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <p className="text-status-green font-mono font-bold text-2xl">{accurateMatches}</p>
                <p className="text-white/50 text-sm font-body">AI got right</p>
              </div>
              <div className="text-center">
                <p className="text-status-red font-mono font-bold text-2xl">{inaccurateMatches}</p>
                <p className="text-white/50 text-sm font-body">AI got wrong</p>
              </div>
            </div>
            <p className="text-white/70 text-base mb-8 max-w-md mx-auto leading-relaxed">
              {inaccurateMatches > accurateMatches
                ? 'More than half of these AI responses were wrong. That is the reality for most businesses right now. The question is what AI is saying about yours.'
                : 'Some AI responses were accurate. Others were completely wrong. The difference comes down to whether the right information exists for AI to find.'
              }
            </p>
            <Link
              href="/signal-pulse"
              className="inline-block bg-copper text-white px-8 py-3.5 rounded-button font-body font-semibold text-base hover:bg-copper-light transition-colors shadow-button"
            >
              Check What AI Says About You
            </Link>
          </div>
        </div>
      )}

      {/* Footer context */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-warmgray-light text-sm leading-relaxed">
          Signal Match is part of The Signal Report, a bi-weekly newsletter from Signal &amp; Structure AI.
          <br />
          <Link href="/resources" className="text-copper hover:text-copper-dark transition-colors">
            Subscribe to The Signal Report
          </Link>
        </p>
      </div>
    </main>
  );
}
