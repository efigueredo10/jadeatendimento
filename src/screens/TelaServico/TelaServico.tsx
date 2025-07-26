// import { FaArrowLeft } from "react-icons/fa";
import style from './TelaServico.module.css';
import { useState } from 'react';
import InputNumber from '../../layout/ui/InputNumber/InputNumber';
import Apresentacao from '../../layout/LayoutPages/components/Apresentacao/Apresentacao';
import ServicoCard from './components/ServicoCard/ServicoCard';
import Tela from '../../layout/LayoutPages/components/Tela/Tela';
import Botao from '../../layout/ui/Botao/Botao';
import { MdAdd } from 'react-icons/md';
import useModal from '../../hooks/useModal';
import Modal from '../../layout/LayoutPages/components/Modal/Modal';
import FormularioAddServico from './components/FormularioAddServico/FormularioAddServico';

const TelaServico = () => {
  // Formulario
  const [valor, setValor] = useState(0.0);

  // Hooks
  const { abrirModal, fecharModal, modalOpen } = useModal();

  return (
    <Tela
      className={style.telaContainer}
      infoTela={{
        titulo: 'Serviços',
        botoes: {
          direito: (
            <Botao
              size="small"
              icone={<MdAdd size={20} className={style.iconeAdd} />}
            ></Botao>
          ),
        },
      }}
    >
      <Modal
        titulo="Adicionar Serviço"
        open={modalOpen}
        closeModal={fecharModal}
      >
        <FormularioAddServico></FormularioAddServico>
      </Modal>
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
    </Tela>
  );
};

export default TelaServico;
