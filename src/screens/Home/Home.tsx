import { memo } from 'react';
import style from './Home.module.css';

import Apresentacao from '../../layout/LayoutPages/components/Apresentacao/Apresentacao';

const Home = () => {
  return (
    <Apresentacao
      botaoProps={{
        titulo: 'Nova Ordem de Serviço',
        onClick: () => alert('programar aqui'),
      }}
      titulo="Bora trabalhar jade, cuida"
      imagemProps={{
        nomeImagem: 'jadePescador.png',
        alt: 'Imagem de um pescador fisgando um tucunaré',
      }}
    ></Apresentacao>
  );
};

export default memo(Home);
