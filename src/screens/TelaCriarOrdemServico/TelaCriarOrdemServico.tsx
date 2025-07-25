// import { IoAdd } from "react-icons/io5";
import style from "./TelaCriarOrdemServico.module.css";
import SessaoInserirCliente from "./components/SessaoInserirCliente/SessaoInserirCliente";
import { useCriarOrdemServico } from "../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext";
import SessaoListagemServicos from "./components/SessaoListagemServicos/SessaoListagemServicos";

const TelaCriarOrdemServico = () => {
  const { cliente } = useCriarOrdemServico();
  return (
    <div className={style.telaContainer}>
      {!cliente ? (
        <SessaoInserirCliente></SessaoInserirCliente>
      ) : (
        <SessaoListagemServicos></SessaoListagemServicos>
      )}
    </div>
  );
};

export default TelaCriarOrdemServico;
