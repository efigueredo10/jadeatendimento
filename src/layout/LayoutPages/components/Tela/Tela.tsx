import { memo, useEffect, type ReactNode } from 'react';
import type { InfoPagina } from '../../../../contexts/GlobalContext/GlobalContext.types';
import style from './Tela.module.css';
import { useGlobalContext } from '../../../../contexts/GlobalContext/GlobalContext';

interface Props {
  infoTela: InfoPagina;
  children: ReactNode;
  className?: string;
}

const Tela = ({ infoTela, children, className }: Props) => {
  // States
  const { setarInfoPagina } = useGlobalContext();

  useEffect(() => {
    setarInfoPagina(infoTela);
  }, []);

  return <div className={className}>{children}</div>;
};

export default memo(Tela);
