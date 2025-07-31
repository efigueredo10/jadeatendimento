// import { FaArrowLeft } from "react-icons/fa";
import style from "./TelaServico.module.css";
import Apresentacao from "../../layout/LayoutPages/components/Apresentacao/Apresentacao";
import ServicoCard from "./components/ServicoCard/ServicoCard";
import Tela from "../../layout/LayoutPages/components/Tela/Tela";
import useModal from "../../hooks/useModal";
import Modal from "../../layout/LayoutPages/components/Modal/Modal";
import FormularioAddServico from "./components/FormularioAddServico/FormularioAddServico";
import { useCriarOrdemServico } from "../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext";
import Botao from "../../layout/ui/Botao/Botao";
import { MdAdd } from "react-icons/md";
import { LuClipboardPenLine } from "react-icons/lu";
import TextArea from "../../layout/ui/TextArea/TextArea";

const TelaServico = () => {
  // Hooks
  const { abrirModal, fecharModal, modalOpen } = useModal();
  const modalObservacoesProps = useModal();
  const { ordemServico, limparServicos, setarObservacao } =
    useCriarOrdemServico();

  return (
    <Tela
      className={style.telaContainer}
      infoTela={{
        titulo: "Serviços",
      }}
      exibirToolbar={ordemServico?.servicos?.length > 0}
      toolbar={
        <div className={style.toolbar}>
          <Botao onClick={limparServicos} size="normal">
            Limpar
          </Botao>
          <Botao
            onClick={abrirModal}
            size="normal"
            icone={<MdAdd size={20} className={style.iconeAdd} />}
          >
            Adicionar
          </Botao>
        </div>
      }
    >
      <Botao
        onClick={modalObservacoesProps.abrirModal}
        icone={<LuClipboardPenLine size={16} />}
        className={style.botaoObservacoes}
      >
        Observações
      </Botao>

      <Modal
        titulo="Observações"
        open={modalObservacoesProps.modalOpen}
        closeModal={modalObservacoesProps.fecharModal}
      >
        <div className={style.textAreaInput}>
          <TextArea
            label="Observações"
            value={ordemServico.observacoes}
            setValue={setarObservacao}
          ></TextArea>
        </div>
      </Modal>
      <Modal
        titulo="Adicionar Serviço"
        open={modalOpen}
        closeModal={fecharModal}
      >
        <FormularioAddServico closeModal={fecharModal}></FormularioAddServico>
      </Modal>
      {ordemServico?.servicos?.length == 0 ? (
        <Apresentacao
          botaoProps={{
            titulo: "Adicionar Serviço",
            onClick: abrirModal,
          }}
          titulo="Bora ficar rico"
          imagemProps={{
            nomeImagem: "money.png",
            alt: "Imagem de um homem sentado em uma montanha de dinheiro",
          }}
        ></Apresentacao>
      ) : (
        <div className={style.containerListaServicos}>
          {ordemServico?.servicos?.map((servico) => (
            <ServicoCard {...servico} key={servico.id}></ServicoCard>
          ))}
        </div>
      )}
    </Tela>
  );
};

export default TelaServico;
