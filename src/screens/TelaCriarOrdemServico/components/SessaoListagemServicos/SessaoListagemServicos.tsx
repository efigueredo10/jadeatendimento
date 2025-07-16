import { memo } from 'react';
import style from './SessaoListagemServicos.module.css';
import ItemOrdemServico from '../ItemOrdemServico/ItemOrdemServico';

const SessaoListagemServico = () => {
  return (
    <div className={style.listagemItens}>
      <h4>Itens</h4>
      <div className='lista'>
        <ItemOrdemServico
          imagem='https://atan.olivint.com.br/images/produtos/03030010002.jpg'
          titulo='Televisão 40 polegadas'
          valor={2000}
        ></ItemOrdemServico>
        <ItemOrdemServico
          imagem='https://atan.olivint.com.br/images/produtos/03030010002.jpg'
          titulo='Televisão 40 polegadas'
          valor={2000}
        ></ItemOrdemServico>
        <ItemOrdemServico
          imagem='https://atan.olivint.com.br/images/produtos/03030010002.jpg'
          titulo='Televisão 40 polegadas'
          valor={2000}
        ></ItemOrdemServico>
      </div>
    </div>
  );
};

export default memo(SessaoListagemServico);
