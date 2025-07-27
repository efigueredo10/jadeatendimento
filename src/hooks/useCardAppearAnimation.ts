// hooks/useCardAppearAnimation.ts
import { useMemo } from 'react';
import type { Variants } from 'framer-motion';

export function useCardAppearAnimation(duration = 0.4, distance = 20) {
  const variants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: 'easeOut',
        },
      },
      exit: {
        opacity: 0,
        y: distance,
        transition: {
          duration: duration * 0.7,
          ease: 'easeIn',
        },
      },
    }),
    [duration, distance]
  );

  return {
    initial: 'hidden',
    animate: 'visible',
    exit: 'exit',
    variants,
  };
}
