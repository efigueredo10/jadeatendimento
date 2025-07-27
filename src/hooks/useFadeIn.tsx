// hooks/useFadeIn.ts
import { useMemo } from 'react';
import type { Variants } from 'framer-motion';

export function useFadeIn(duration: number = 0.5, delay: number = 0) {
  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut',
        },
      },
    }),
    [duration, delay]
  );

  return {
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    variants,
  };
}
