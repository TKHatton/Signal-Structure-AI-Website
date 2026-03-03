'use client';

import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
  };

  const offset = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
