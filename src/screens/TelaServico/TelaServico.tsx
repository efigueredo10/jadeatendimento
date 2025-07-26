// import { FaArrowLeft } from "react-icons/fa";
import style from './TelaServico.module.css';
import { useState } from 'react';
import InputNumber from '../../layout/ui/InputNumber/InputNumber';
import Apresentacao from '../../layout/LayoutPages/components/Apresentacao/Apresentacao';
import ServicoCard from './components/ServicoCard/ServicoCard';

const TelaServico = () => {
  // Formulario
  const [valor, setValor] = useState(0.0);
  return (
    <div className={style.telaContainer}>
      {/* <Apresentacao
        botaoProps={{
          titulo: 'Adicionar Serviço',
          onClick: () => alert('programar aqui'),
        }}
        titulo="Bora ficar rico"
        imagemProps={{
          nomeImagem: 'money.png',
          alt: 'Imagem de um homem sentado em uma montanha de dinheiro',
        }}
      ></Apresentacao> */}
      <div className={style.containerListaServicos}>
        <ServicoCard
          titulo="Sacada superior"
          descricao="Frente do
prédio em alumínio ou vidro
com torre de inox"
          quantidade={3}
          valor={4500}
        ></ServicoCard>
        <ServicoCard
          titulo="Sacada superior"
          descricao="Frente do
prédio em alumínio ou vidro
com torre de inox"
          quantidade={3}
          valor={4500}
        ></ServicoCard>
        <ServicoCard
          titulo="Sacada superior"
          descricao="Frente do
prédio em alumínio ou vidro
com torre de inox"
          quantidade={3}
          valor={4500}
        ></ServicoCard>
        <ServicoCard
          titulo="Sacada superior"
          descricao="Frente do
prédio em alumínio ou vidro
com torre de inox"
          quantidade={3}
          valor={4500}
        ></ServicoCard>
      </div>
    </div>
  );
};

export default TelaServico;
