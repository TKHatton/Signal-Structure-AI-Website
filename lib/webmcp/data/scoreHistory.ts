// Signal & Structure AI's own Signal Score history.
//
// Source of truth: CORE\1-VENTURES\Signal-and-Structure-AI\Signal-Engine\
// ssai-own-score-history.md (compiled 2026-09-21). The score_history tables
// hold no rows for these runs, so that file is the record. The 2026-03-24
// audit is left out because its score was never recorded.
//
// Flip `published` to false on any row to hide it from the tool.

export interface ScoreRow {
  date: string;
  score: number;
  /** Share of AI answers that were wrong, where the run recorded it. */
  hallucination_rate_pct: number | null;
  method: string;
  what_changed: string;
  note?: string;
  published: boolean;
}

export const SCORE_HISTORY: ScoreRow[] = [
  {
    date: '2026-03-10',
    score: 0,
    hallucination_rate_pct: null,
    method: 'manual audit',
    what_changed: 'Baseline. No AI platform knew the business.',
    published: true,
  },
  {
    date: '2026-03-17',
    score: 0,
    hallucination_rate_pct: null,
    method: 'manual audit',
    what_changed: 'Follow-up. Still nothing. The site was not yet crawlable or indexed.',
    published: true,
  },
  {
    date: '2026-03-23',
    score: 6,
    hallucination_rate_pct: null,
    method: 'manual audit',
    what_changed:
      'ChatGPT knew the business for the first time. Perplexity and Gemini began describing a different company with a similar name, wrong about 40% of the time each.',
    published: true,
  },
  {
    date: '2026-04-04',
    score: 43,
    hallucination_rate_pct: null,
    method: 'old manual rubric, 3 platforms',
    what_changed:
      'Schema and content work landed. Google Business Profile and directory listings were still missing.',
    published: true,
  },
  {
    date: '2026-04-06',
    score: 76,
    hallucination_rate_pct: 55.6,
    method: 'Signal Score engine, after the scoring fix',
    what_changed:
      'Every audit moved onto the engine. The Google Business Profile was claimed and detected. The main blocker was that Bing had not indexed the site yet.',
    published: true,
  },
  {
    date: '2026-05-05',
    score: 75,
    hallucination_rate_pct: 77.8,
    method: 'Signal Score engine, 3 platforms',
    what_changed: 'Baseline for the founder story. AI presence was 2.8 out of 10.',
    published: true,
  },
  {
    date: '2026-05-11',
    score: 77,
    hallucination_rate_pct: 55.6,
    method: 'Signal Score engine, full audit',
    what_changed: 'AI presence rose to 4.6 out of 10 and the wrong-answer rate came down.',
    published: true,
  },
  {
    date: '2026-09-21',
    score: 67,
    hallucination_rate_pct: 0,
    method: 'Signal Score engine 2026.05.25, stricter scoring, 5 platforms',
    what_changed:
      'All five platforms know the business and none got it wrong. Searches that name the business found it. Searches that do not name it did not yet.',
    note: 'Google Business Profile is being re-verified after an address change, so that category reads zero.',
    published: true,
  },
];

export const SCORE_HISTORY_CAVEAT =
  'The scoring engine changed between April and September (branded versus unbranded searches, how wrong answers are counted, how answers are judged), so the September score is not directly comparable to the spring runs.';
