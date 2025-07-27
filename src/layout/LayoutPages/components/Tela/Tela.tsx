import { memo, useEffect, type ReactNode } from 'react';
import style from './Tela.module.css';
import type { InfoPagina } from '../../../../contexts/GlobalContext/GlobalContext.types';
import { useGlobalContext } from '../../../../contexts/GlobalContext/GlobalContext';
import { motion } from 'framer-motion';
import { useFadeIn } from '../../../../hooks/useFadeIn';

interface Props {
  infoTela: InfoPagina;
  children: ReactNode;
  className?: string;
  toolbar?: ReactNode;
  exibirToolbar?: boolean;
}

const Tela = ({
  infoTela,
  children,
  className,
  toolbar,
  exibirToolbar = false,
}: Props) => {
  // States
  const { setarInfoPagina } = useGlobalContext();

  // Hooks
  const fade = useFadeIn(0.3);

  useEffect(() => {
    setarInfoPagina(infoTela);
  }, []);

  return (
    <motion.div {...fade} className={className}>
      {exibirToolbar && <div className={style.toolbar}>{toolbar}</div>}
      {children}
    </motion.div>
  );
};

export default memo(Tela);
