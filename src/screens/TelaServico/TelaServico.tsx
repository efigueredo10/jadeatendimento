// import { FaArrowLeft } from "react-icons/fa";
import style from './TelaServico.module.css';
import Apresentacao from '../../layout/LayoutPages/components/Apresentacao/Apresentacao';
import ServicoCard from './components/ServicoCard/ServicoCard';
import Tela from '../../layout/LayoutPages/components/Tela/Tela';
import Botao from '../../layout/ui/Botao/Botao';
import { MdAdd } from 'react-icons/md';
import useModal from '../../hooks/useModal';
import Modal from '../../layout/LayoutPages/components/Modal/Modal';
import FormularioAddServico from './components/FormularioAddServico/FormularioAddServico';
import { useCriarOrdemServico } from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';

const TelaServico = () => {
  // Hooks
  const { abrirModal, fecharModal, modalOpen } = useModal();
  const { servicos } = useCriarOrdemServico();

  return (
    <Tela
      className={style.telaContainer}
      infoTela={{
        titulo: 'Serviços',
        botoes: {
          direito: (
            <Botao
              onClick={abrirModal}
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
        <FormularioAddServico closeModal={fecharModal}></FormularioAddServico>
      </Modal>
      {servicos.length == 0 ? (
        <Apresentacao
          botaoProps={{
            titulo: 'Adicionar Serviço',
            onClick: () => alert('programar aqui'),
          }}
          titulo="Bora ficar rico"
          imagemProps={{
            nomeImagem: 'money.png',
            alt: 'Imagem de um homem sentado em uma montanha de dinheiro',
          }}
        ></Apresentacao>
      ) : (
        <div className={style.containerListaServicos}>
          {servicos.map(servico => (
            <ServicoCard {...servico}></ServicoCard>
          ))}
        </div>
      )}
    </Tela>
  );
};

export default TelaServico;
