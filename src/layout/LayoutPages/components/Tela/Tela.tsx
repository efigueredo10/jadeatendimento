import { memo, useEffect, type ReactNode } from 'react';
import style from './Tela.module.css';
import type { InfoPagina } from '../../../../contexts/GlobalContext/GlobalContext.types';
import { useGlobalContext } from '../../../../contexts/GlobalContext/GlobalContext';

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

  useEffect(() => {
    setarInfoPagina(infoTela);
  }, []);

  return (
    <div className={className}>
      {exibirToolbar && <div className={style.toolbar}>{toolbar}</div>}
      {children}
    </div>
  );
};

export default memo(Tela);
