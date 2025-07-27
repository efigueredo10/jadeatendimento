import {
  memo,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react';
import style from './Botao.module.css';

interface Props {
  children?: ReactNode;
  size?: 'large' | 'normal' | 'small';
  width?: string;
  borderRadius?: string;
  icone?: ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const Botao = ({
  children,
  size = 'normal',
  borderRadius = '8px',
  width,
  icone,
  onClick,
}: Props) => {
  const obterEstilosBotao = () => {
    const estilos: CSSProperties = {};
    estilos.borderRadius = borderRadius;
    estilos.width = width;
    return estilos;
  };

  const obterClassName = () => {
    let classSize;
    switch (size) {
      case 'large':
        classSize = style.large;
        break;
      case 'normal':
        classSize = style.normal;
        break;
      case 'small':
        classSize = style.small;
    }
    return `${style.botao} ${classSize}`;
  };
  return (
    <button
      onClick={onClick}
      className={obterClassName()}
      style={obterEstilosBotao()}
    >
      {children}
      {icone}
    </button>
  );
};

export default memo(Botao);
