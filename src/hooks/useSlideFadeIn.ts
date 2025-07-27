// hooks/useSlideUpModal.ts
import { useMemo } from 'react';
import type { Variants } from 'framer-motion';

export function useSlideUpModal() {
  const variants: Variants = useMemo(
    () => ({
      hidden: {
        y: '100%', // começa fora da tela, abaixo
      },
      visible: {
        y: '0%', // sobe até sua posição final
        transition: {
          duration: 0.2,
          ease: 'linear', // sem aceleração ou desaceleração
        },
      },
      exit: {
        y: '100%', // desce de volta
        transition: {
          duration: 0.2,
          ease: 'linear',
        },
      },
    }),
    []
  );

  return {
    initial: 'hidden',
    animate: 'visible',
    exit: 'exit',
    variants,
  };
}
