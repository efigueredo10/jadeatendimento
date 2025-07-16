import { IoAdd } from 'react-icons/io5';
import style from './TelaCriarOrdemServico.module.css';
import { useNavegar } from '../../hooks/useNavegar';
import SessaoInserirCliente from './components/SessaoInserirCliente/SessaoInserirCliente';
import { useCriarOrdemServico } from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import SessaoListagemServicos from './components/SessaoListagemServicos/SessaoListagemServicos';

const TelaCriarOrdemServico = () => {
  const { cliente } = useCriarOrdemServico();
  const { navegarTelaAdicionarServico } = useNavegar();
  return (
    <div className={style.telaContainer}>
      <div className={style.header}>
        <div className={style.iconeLeft}></div>
        <h3>Ordem de serviço</h3>
        <div className={style.iconeRight}>
          <IoAdd onClick={navegarTelaAdicionarServico} />
        </div>
      </div>
      {!cliente ? <SessaoInserirCliente></SessaoInserirCliente> : <SessaoListagemServicos></SessaoListagemServicos>}
    </div>
  );
};

export default TelaCriarOrdemServico;
