'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface SignalScoreDemoProps {
  before: number;
  after: number;
}

export default function SignalScoreDemo({ before, after }: SignalScoreDemoProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayBefore, setDisplayBefore] = useState(before);
  const [displayAfter, setDisplayAfter] = useState(before);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const intervalTime = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOut cubic

      setDisplayBefore(Math.round(before));
      setDisplayAfter(Math.round(before + (after - before) * easedProgress));

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayAfter(after);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isInView, before, after]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-12">
      <div className="flex items-center gap-8 md:gap-12">
        {/* Before */}
        <div className="text-center">
          <div className="font-mono text-5xl md:text-6xl font-bold text-warmgray mb-2">
            {displayBefore}
          </div>
          <div className="font-body text-sm text-warmgray-light uppercase tracking-wider">
            Before
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-copper text-4xl"
        >
          →
        </motion.div>

        {/* After */}
        <div className="text-center">
          <div className="font-mono text-5xl md:text-6xl font-bold text-navy mb-2">
            {displayAfter}
          </div>
          <div className="font-body text-sm text-navy uppercase tracking-wider">
            After
          </div>
        </div>
      </div>

      <div className="mt-6 font-body text-warmgray text-center">
        Signal Score™ Improvement
      </div>
    </div>
  );
}
