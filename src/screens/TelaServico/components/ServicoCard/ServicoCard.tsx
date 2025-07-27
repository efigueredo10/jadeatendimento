import { memo, useState } from 'react';
import style from './ServicoCard.module.css';
import { PiHammer } from 'react-icons/pi';
import { BiEdit } from 'react-icons/bi';
import { FaRegTrashAlt } from 'react-icons/fa';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import { useCardAppearAnimation } from '../../../../hooks/useCardAppearAnimation';
import { motion } from 'framer-motion';

export interface ServicoCardProps {
  id?: string;
  titulo: string;
  descricao: string;
  quantidade: number;
  valor: number;
}

const ServicoCard = ({
  titulo,
  descricao,
  quantidade,
  valor,
}: ServicoCardProps) => {
  // States
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  // Refs
  const containerRef = useOnClickOutside(() => setMostrarOpcoes(false));

  // Hooks
  const animation = useCardAppearAnimation();

  function formatarNumeroBrasileiro(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const toogleMostrarOpcoes = () => {
    setMostrarOpcoes(prev => !prev);
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
        <h6>{titulo}</h6>
        <p>{descricao}</p>
      </div>
      <div className={style.quantidadeContainer}>
        <p className={style.tag}>{quantidade} unidades</p>
        <p className={style.valor}>R$ {formatarNumeroBrasileiro(valor)}</p>
      </div>
      {mostrarOpcoes && (
        <div className={style.opcoesContainer}>
          <div className={style.btnOpcao}>
            <div className={style.iconContainer}>
              <BiEdit size={20} />
            </div>
            <p>Editar</p>
          </div>
          <div className={style.btnOpcao}>
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
