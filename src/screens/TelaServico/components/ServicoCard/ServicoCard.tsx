import { memo, useState } from "react";
import style from "./ServicoCard.module.css";
import { PiHammer } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { useCardAppearAnimation } from "../../../../hooks/useCardAppearAnimation";
import { motion } from "framer-motion";
import { useCriarOrdemServico } from "../../../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext";

export interface ServicoCardProps {
  id?: string;
  titulo: string;
  descricao: string;
  quantidade: number;
  valor: number;
}

interface Props {
  servico: ServicoCardProps;
  abrirModalServicoEdicao: (servico: ServicoCardProps) => void;
}

const ServicoCard = ({ servico, abrirModalServicoEdicao }: Props) => {
  // States
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  // Refs
  const containerRef = useOnClickOutside(() => setMostrarOpcoes(false));

  // Hooks
  const animation = useCardAppearAnimation();
  const { removerServico } = useCriarOrdemServico();

  function formatarNumeroBrasileiro(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const toogleMostrarOpcoes = () => {
    setMostrarOpcoes((prev) => !prev);
  };

  const excluirServico = () => {
    removerServico(servico.id);
  };

  const editarServico = () => {
    abrirModalServicoEdicao(servico);
  };

  return (
    <motion.div
      {...animation}
      layout
      ref={containerRef}
      onClick={toogleMostrarOpcoes}
      className={style.servicoCardContainer}
    >
      <div className={style.iconContainer}>
        <PiHammer size={20} />
      </div>
      <div className={style.descricaoContainer}>
        <h6>{servico.titulo}</h6>
        <p>{servico.descricao}</p>
      </div>
      <div className={style.quantidadeContainer}>
        <p className={style.tag}>{servico.quantidade} unidades</p>
        <p className={style.valor}>
          R$ {formatarNumeroBrasileiro(servico.valor)}
        </p>
      </div>
      {mostrarOpcoes && (
        <div className={style.opcoesContainer}>
          <div onClick={editarServico} className={style.btnOpcao}>
            <div className={style.iconContainer}>
              <BiEdit size={20} />
            </div>
            <p>Editar</p>
          </div>
          <div onClick={excluirServico} className={style.btnOpcao}>
            <div className={style.iconContainer}>
              <FaRegTrashAlt size={18} />
            </div>
            <p>Excluir</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default memo(ServicoCard);
