import { memo } from 'react';
import style from './Home.module.css';

import imagemPesca from '../../assets/img/jadePescador.png';
import Botao from '../../layout/ui/Botao/Botao';
import useFloatingEffect from '../../hooks/useFloatingEffect/useFloatingEffect';

const Home = () => {
  // Hooks
  const floatingClass = useFloatingEffect(true);

  return (
    <div className={style.homeContainer}>
      <div className={style.imgContainer}>
        <img
          className={floatingClass}
          src={imagemPesca}
          alt="Imagem de jade o pescador"
        />
      </div>
      <div className={style.info}>
        <h3>Bora trabalhar jade, cuida</h3>
        <Botao>Nova Ordem de Serviço</Botao>
      </div>
    </div>
  );
};

export default memo(Home);
