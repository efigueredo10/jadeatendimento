// import { FaArrowLeft } from "react-icons/fa";
import style from "./TelaServico.module.css";
import Apresentacao from "../../layout/LayoutPages/components/Apresentacao/Apresentacao";
import ServicoCard, {
  type ServicoCardProps,
} from "./components/ServicoCard/ServicoCard";
import Tela from "../../layout/LayoutPages/components/Tela/Tela";
import useModal from "../../hooks/useModal";
import Modal from "../../layout/LayoutPages/components/Modal/Modal";
import FormularioAddServico, {
  type ModoFormulario,
} from "./components/FormularioAddServico/FormularioAddServico";
import { useCriarOrdemServico } from "../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext";
import Botao from "../../layout/ui/Botao/Botao";
import { MdAdd } from "react-icons/md";
import { LuClipboardPenLine } from "react-icons/lu";
import TextArea from "../../layout/ui/TextArea/TextArea";
import { useEffect, useState } from "react";
import BotaoLimpar from "../../layout/LayoutPages/components/BotaoLimpar/BotaoLimpar";

const TelaServico = () => {
  // Hooks
  const { abrirModal, fecharModal, modalOpen } = useModal();
  const modalObservacoesProps = useModal();
  const { ordemServico, limparServicos, setarObservacao } =
    useCriarOrdemServico();

  // States
  const [servicoEdicao, setServicoEdicao] = useState<ServicoCardProps>();
  const [modoFormulario, setModoFormulario] =
    useState<ModoFormulario>("CADASTRO");

  useEffect(() => {
    console.log(modoFormulario);
  }, [modoFormulario]);

  const fecharModalServico = () => {
    setModoFormulario("CADASTRO");
    setServicoEdicao(null);
    fecharModal();
  };

  const abrirModalServicoEdicao = (servico: ServicoCardProps) => {
    setModoFormulario("EDICAO");
    setServicoEdicao(servico);
    abrirModal();
  };

  return (
    <Tela
      className={style.telaContainer}
      infoTela={{
        titulo: "Serviços",
      }}
      exibirToolbar={ordemServico?.servicos?.length > 0}
      toolbar={
        <div className={style.toolbar}>
          <BotaoLimpar
            mensagemConfirmacao="Tem certeza que quer limpar todos os serviços?"
            onClick={limparServicos}
          ></BotaoLimpar>
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
      {ordemServico?.servicos?.length > 0 && (
        <Botao
          onClick={modalObservacoesProps.abrirModal}
          icone={<LuClipboardPenLine size={16} />}
          className={style.botaoObservacoes}
        >
          Observações
        </Botao>
      )}

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
        titulo={
          modoFormulario == "CADASTRO" ? "Adicionar Serviço" : "Editar Serviço"
        }
        open={modalOpen}
        closeModal={fecharModalServico}
      >
        <FormularioAddServico
          modoFormulario={modoFormulario}
          servicoEdicao={servicoEdicao}
          closeModal={fecharModalServico}
        ></FormularioAddServico>
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
            <ServicoCard
              servico={servico}
              key={servico.id}
              abrirModalServicoEdicao={abrirModalServicoEdicao}
            ></ServicoCard>
          ))}
        </div>
      )}
    </Tela>
  );
};

export default TelaServico;
