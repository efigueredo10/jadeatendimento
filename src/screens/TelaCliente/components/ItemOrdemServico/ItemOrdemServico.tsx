import { memo } from 'react';
import style from './ItemOrdemServico.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';

interface Props {
  imagem: string;
  titulo: string;
  valor: number;
}

const ItemOrdemServico = ({ imagem, titulo, valor }: Props) => {
  return (
    <div className={style.itemOrdemServico}>
      <div className={style.imagemContainer}>
        <img src={imagem} alt='' />
      </div>
      <div className={style.info}>
        <div className={style.titulo}>{titulo}</div>
        <div className={style.valor}>{valor}</div>
      </div>
      <div className={style.icones}>
        <FaRegTrashAlt />
      </div>
    </div>
  );
};

export default memo(ItemOrdemServico);
