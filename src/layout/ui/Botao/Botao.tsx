import {
  memo,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import style from "./Botao.module.css";

interface Props {
  children?: ReactNode;
  size?: "large" | "normal" | "small";
  width?: string;
  borderRadius?: string;
  icone?: ReactNode;
  className?: string;
  tipo?: "normal" | "outline";
  onClick?: (event: MouseEvent) => void;
}

const Botao = ({
  children,
  size = "normal",
  borderRadius = "8px",
  width,
  icone,
  className,
  tipo = "normal",
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
    let classTipo;
    switch (size) {
      case "large":
        classSize = style.large;
        break;
      case "normal":
        classSize = style.normal;
        break;
      case "small":
        classSize = style.small;
    }
    switch (tipo) {
      case "outline":
        classTipo = style.outline;
        break;
      case "normal":
        classTipo = style.normal;
        break;
    }
    return `${style.botao} ${classSize} ${className} ${classTipo}`;
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
