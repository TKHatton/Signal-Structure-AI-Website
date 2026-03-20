'use client';

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';

// --- Types ---
type Direction = 'horizontal' | 'vertical' | 'diagonal-down' | 'diagonal-up';
type CellState = 'default' | 'pulsing' | 'found';

interface PlacedWord {
  word: string;
  startRow: number;
  startCol: number;
  direction: Direction;
  cells: [number, number][];
}

// --- Sound Effects ---
function createAudioContext() {
  if (typeof window === 'undefined') return null;
  try {
    return new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  } catch {
    return null;
  }
}

function playSound(ctx: AudioContext | null, type: 'found' | 'hint' | 'complete') {
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  const now = ctx.currentTime;

  switch (type) {
    case 'found':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
      break;
    case 'hint':
      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.2);
      gain.gain.setValueAtTime(0.1, now);
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

// --- Grid Generation ---
const GRID_SIZE = 15;
const WORDS = ['SIGNAL', 'STRUCTURE', 'PULSE', 'VISIBLE', 'ACCURATE', 'FOUND', 'DISCOVER', 'PRESENCE'];
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getDirectionDelta(dir: Direction): [number, number] {
  switch (dir) {
    case 'horizontal': return [0, 1];
    case 'vertical': return [1, 0];
    case 'diagonal-down': return [1, 1];
    case 'diagonal-up': return [-1, 1];
  }
}

function canPlaceWord(grid: string[][], word: string, row: number, col: number, dir: Direction): boolean {
  const [dr, dc] = getDirectionDelta(dir);
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) return false;
    if (grid[r][c] !== '' && grid[r][c] !== word[i]) return false;
  }
  return true;
}

function placeWord(grid: string[][], word: string, row: number, col: number, dir: Direction): [number, number][] {
  const [dr, dc] = getDirectionDelta(dir);
  const cells: [number, number][] = [];
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    grid[r][c] = word[i];
    cells.push([r, c]);
  }
  return cells;
}

function generateGrid(): { grid: string[][]; placed: PlacedWord[] } {
  const grid: string[][] = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
  const placed: PlacedWord[] = [];
  const directions: Direction[] = ['horizontal', 'vertical', 'diagonal-down', 'diagonal-up'];
  const sortedWords = [...WORDS].sort((a, b) => b.length - a.length);

  for (const word of sortedWords) {
    let success = false;
    for (let attempt = 0; attempt < 200; attempt++) {
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);
      if (canPlaceWord(grid, word, row, col, dir)) {
        const cells = placeWord(grid, word, row, col, dir);
        placed.push({ word, startRow: row, startCol: col, direction: dir, cells });
        success = true;
        break;
      }
    }
    if (!success) {
      return generateGrid();
    }
  }

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
      }
    }
  }

  return { grid, placed };
}

// --- Component ---
export default function SignalSearchPage() {
  const audioCtx = useRef<AudioContext | null>(null);

  useEffect(() => {
    audioCtx.current = createAudioContext();
    return () => { audioCtx.current?.close(); };
  }, []);

  const { grid, placed } = useMemo(() => generateGrid(), []);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [cellStates, setCellStates] = useState<Map<string, CellState>>(new Map());
  const [pulsingWord, setPulsingWord] = useState<string | null>(null);
  const [selecting, setSelecting] = useState(false);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());
  const [startCell, setStartCell] = useState<[number, number] | null>(null);
  const [timer, setTimer] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted || gameComplete) return;
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [gameStarted, gameComplete]);

  useEffect(() => {
    if (foundWords.size === WORDS.length && gameStarted) {
      setGameComplete(true);
      playSound(audioCtx.current, 'complete');
    }
  }, [foundWords, gameStarted]);

  const cellKey = (r: number, c: number) => `${r}-${c}`;

  const getCellState = useCallback((r: number, c: number): CellState => {
    return cellStates.get(cellKey(r, c)) || 'default';
  }, [cellStates]);

  const getCellsInLine = useCallback((start: [number, number], end: [number, number]): [number, number][] => {
    const [sr, sc] = start;
    const [er, ec] = end;
    const dr = Math.sign(er - sr);
    const dc = Math.sign(ec - sc);
    const rowDiff = Math.abs(er - sr);
    const colDiff = Math.abs(ec - sc);
    if (rowDiff !== colDiff && rowDiff !== 0 && colDiff !== 0) return [];
    const steps = Math.max(rowDiff, colDiff);
    const cells: [number, number][] = [];
    for (let i = 0; i <= steps; i++) {
      cells.push([sr + dr * i, sc + dc * i]);
    }
    return cells;
  }, []);

  const checkSelection = useCallback((cells: [number, number][]) => {
    for (const pw of placed) {
      if (foundWords.has(pw.word)) continue;
      if (pw.cells.length !== cells.length) continue;
      const forward = pw.cells.every((c, i) => c[0] === cells[i][0] && c[1] === cells[i][1]);
      const backward = pw.cells.every((c, i) => c[0] === cells[cells.length - 1 - i][0] && c[1] === cells[cells.length - 1 - i][1]);
      if (forward || backward) {
        playSound(audioCtx.current, 'found');
        setFoundWords(prev => new Set([...prev, pw.word]));
        setCellStates(prev => {
          const next = new Map(prev);
          pw.cells.forEach(([r, c]) => next.set(cellKey(r, c), 'found'));
          return next;
        });
        return true;
      }
    }
    return false;
  }, [placed, foundWords]);

  const handleCellDown = (r: number, c: number) => {
    if (gameComplete) return;
    if (!gameStarted) setGameStarted(true);
    setSelecting(true);
    setStartCell([r, c]);
    setSelectedCells(new Set([cellKey(r, c)]));
  };

  const handleCellEnter = (r: number, c: number) => {
    if (!selecting || !startCell) return;
    const lineCells = getCellsInLine(startCell, [r, c]);
    if (lineCells.length > 0) {
      setSelectedCells(new Set(lineCells.map(([lr, lc]) => cellKey(lr, lc))));
    }
  };

  const handleCellUp = () => {
    if (!selecting || !startCell) return;
    setSelecting(false);
    const cells = Array.from(selectedCells).map(key => {
      const [r, c] = key.split('-').map(Number);
      return [r, c] as [number, number];
    }).sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    });
    checkSelection(cells);
    setSelectedCells(new Set());
    setStartCell(null);
  };

  const handleHint = () => {
    if (!gameStarted) setGameStarted(true);
    const unfound = placed.filter(pw => !foundWords.has(pw.word));
    if (unfound.length === 0) return;

    playSound(audioCtx.current, 'hint');

    const target = unfound[0];
    setPulsingWord(target.word);

    setCellStates(prev => {
      const next = new Map(prev);
      target.cells.forEach(([r, c]) => {
        if (next.get(cellKey(r, c)) !== 'found') {
          next.set(cellKey(r, c), 'pulsing');
        }
      });
      return next;
    });

    setTimeout(() => {
      setCellStates(prev => {
        const next = new Map(prev);
        target.cells.forEach(([r, c]) => {
          if (next.get(cellKey(r, c)) === 'pulsing') {
            next.set(cellKey(r, c), 'default');
          }
        });
        return next;
      });
      setPulsingWord(null);
    }, 3000);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCellClassName = (r: number, c: number) => {
    const state = getCellState(r, c);
    const isSelected = selectedCells.has(cellKey(r, c));

    const base = 'w-full aspect-square flex items-center justify-center text-sm sm:text-base md:text-lg font-mono font-bold select-none cursor-pointer transition-all duration-200 rounded-sm ';

    if (state === 'found') {
      return base + 'bg-copper text-white scale-105';
    }
    if (state === 'pulsing') {
      return base + 'signal-glow bg-white text-copper';
    }
    if (isSelected) {
      return base + 'bg-navy text-white scale-105';
    }
    return base + 'bg-white text-navy hover:bg-stone-dark';
  };

  return (
    <main className="min-h-screen bg-stone pt-24 pb-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-6 text-center">
        <p className="text-copper font-body font-semibold text-sm tracking-widest uppercase mb-3">The Signal Report</p>
        <h1 className="text-navy text-3xl sm:text-4xl md:text-5xl mb-4">Signal Search</h1>
      </div>

      {/* Educational Context */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="bg-white rounded-card p-6 sm:p-8 shadow-card">
          <h2 className="font-body font-semibold text-navy text-lg mb-3">Why this game exists</h2>
          <p className="font-body text-warmgray leading-relaxed mb-4">
            Every word hidden in this grid represents something AI platforms look for when deciding whether to recommend a business. Signal. Structure. Presence. Visibility. Accuracy. These are not marketing terms. They are the building blocks that determine whether AI can find you, understand you, and recommend you to the right people.
          </p>
          <p className="font-body text-warmgray leading-relaxed mb-4">
            Right now, most businesses are hidden in plain sight. The information exists somewhere online, but it is buried, scattered, or formatted in ways AI cannot read. AI does not browse your website the way a human does. It looks for structured signals. When those signals are missing, your business is invisible to the fastest-growing referral channel in the world.
          </p>
          <p className="font-body text-warmgray leading-relaxed">
            The words in this grid are hard to find on purpose. That is exactly what it is like for AI trying to find your business without the right structure in place. And just like the hint button below can help you find what you are looking for faster, the right tools and structure can help AI find your business faster too.
          </p>
        </div>
      </div>

      {/* How to Play */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="bg-navy/5 rounded-card p-5 border border-navy/10">
          <p className="font-body text-navy text-sm font-semibold mb-2">How to play</p>
          <p className="font-body text-warmgray text-sm leading-relaxed">
            Click and drag across letters to select words. Words can read forward, backward, vertically, or diagonally. Stuck? Use the hint button and the word will glow briefly to show you where it is.
          </p>
        </div>
      </div>

      {/* Game Stats Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <div className="bg-white rounded-card p-4 flex items-center justify-between shadow-card">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Found</p>
              <p className="text-navy font-mono font-bold text-xl">{foundWords.size}/{WORDS.length}</p>
            </div>
            <div>
              <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold">Time</p>
              <p className="text-navy font-mono font-bold text-xl">{formatTime(timer)}</p>
            </div>
          </div>
          <button
            onClick={handleHint}
            disabled={pulsingWord !== null || gameComplete}
            className="bg-navy text-white px-4 py-2.5 rounded-button text-sm font-body font-semibold hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Boost My Signal
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div
          className="grid gap-[3px] bg-stone-dark p-3 rounded-card shadow-card"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
          onMouseUp={handleCellUp}
          onMouseLeave={() => { if (selecting) handleCellUp(); }}
          onTouchEnd={handleCellUp}
        >
          {grid.map((row, r) =>
            row.map((letter, c) => (
              <div
                key={cellKey(r, c)}
                className={getCellClassName(r, c)}
                onMouseDown={(e) => { e.preventDefault(); handleCellDown(r, c); }}
                onMouseEnter={() => handleCellEnter(r, c)}
                onTouchStart={(e) => { e.preventDefault(); handleCellDown(r, c); }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const el = document.elementFromPoint(touch.clientX, touch.clientY);
                  if (el) {
                    const cellData = el.getAttribute('data-cell');
                    if (cellData) {
                      const [tr, tc] = cellData.split('-').map(Number);
                      handleCellEnter(tr, tc);
                    }
                  }
                }}
                data-cell={cellKey(r, c)}
              >
                {letter}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Word List */}
      <div className="max-w-2xl mx-auto px-6 mb-12">
        <div className="bg-white rounded-card p-6 shadow-card">
          <p className="text-warmgray-light text-xs uppercase tracking-wider font-body font-semibold mb-4">Words to Find</p>
          <div className="flex flex-wrap gap-3">
            {WORDS.map(word => (
              <span
                key={word}
                className={`px-3 py-1.5 rounded-full text-sm font-mono font-bold transition-all duration-300 ${
                  foundWords.has(word)
                    ? 'bg-copper text-white line-through'
                    : pulsingWord === word
                    ? 'bg-copper/20 text-copper animate-pulse'
                    : 'bg-stone text-navy'
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Completion Screen */}
      {gameComplete && (
        <div className="max-w-2xl mx-auto px-6 mb-12">
          <div className="bg-navy rounded-card p-8 text-center shadow-card">
            <h2 className="text-white text-2xl sm:text-3xl mb-3">All signals found.</h2>
            <p className="text-white/60 text-lg mb-2">Time: {formatTime(timer)}</p>
            <p className="text-white/70 text-base mb-8 max-w-md mx-auto leading-relaxed">
              You found every hidden word because you knew what to look for. AI platforms work the same way. When the right signals exist, they find you. When they do not, you stay hidden.
            </p>
            <Link
              href="/signal-pulse"
              className="inline-block bg-copper text-white px-8 py-3.5 rounded-button font-body font-semibold text-base hover:bg-copper-light transition-colors shadow-button"
            >
              Find Out If AI Can Find You
            </Link>
          </div>
        </div>
      )}

      {/* Footer context */}
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-warmgray-light text-sm leading-relaxed">
          Signal Search is part of The Signal Report, a bi-weekly newsletter from Signal &amp; Structure AI.
          <br />
          <Link href="/resources" className="text-copper hover:text-copper-dark transition-colors">
            Subscribe to The Signal Report
          </Link>
        </p>
      </div>

      {/* Glow animation styles */}
      <style jsx global>{`
        @keyframes signalGlow {
          0% { box-shadow: 0 0 4px rgba(193, 122, 58, 0.3), inset 0 0 2px rgba(193, 122, 58, 0.1); }
          50% { box-shadow: 0 0 12px rgba(193, 122, 58, 0.6), inset 0 0 4px rgba(193, 122, 58, 0.2); }
          100% { box-shadow: 0 0 4px rgba(193, 122, 58, 0.3), inset 0 0 2px rgba(193, 122, 58, 0.1); }
        }
        .signal-glow {
          animation: signalGlow 0.8s ease-in-out infinite;
          border: 2px solid rgba(193, 122, 58, 0.5);
        }
      `}</style>
    </main>
  );
}
