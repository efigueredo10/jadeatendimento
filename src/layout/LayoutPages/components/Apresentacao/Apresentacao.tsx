import { memo } from 'react';
import style from './Apresentacao.module.css';
import useFloatingEffect from '../../../../hooks/useFloatingEffect/useFloatingEffect';
import Botao from '../../../ui/Botao/Botao';

interface Props {
  titulo: string;
  botaoProps: {
    titulo: string;
    onClick: () => void;
  };
  imagemProps: {
    nomeImagem: string;
    alt: string;
  };
  className?: string;
}

const Apresentacao = ({
  titulo,
  botaoProps,
  imagemProps,
  className,
}: Props) => {
  // Hooks
  const floatingClass = useFloatingEffect(true);

  return (
    <div className={`${style.telaContainer} ${className}`}>
      <div className={style.imgContainer}>
        <img
          className={floatingClass}
          src={`../../../../assets/img/${imagemProps.nomeImagem}`}
          alt={imagemProps.alt}
        />
      </div>
      <div className={style.info}>
        <h3>{titulo}</h3>
        <Botao onClick={botaoProps.onClick}>{botaoProps.titulo}</Botao>
      </div>
    </div>
  );
};

export default memo(Apresentacao);
