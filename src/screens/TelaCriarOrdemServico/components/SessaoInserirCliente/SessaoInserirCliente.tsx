import { memo, useState } from 'react';
import style from './SessaoInserirCliente.module.css';
import Input from '../../../../layout/ui/Input/Input';
import {
  useCriarOrdemServico,
  type Cliente,
  type Endereco,
  type InfoCliente
} from '../../../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';

const SessaoInserirCliente = () => {
  // Hooks
  const { setCliente } = useCriarOrdemServico();

  // States
  const [clienteFormulario, setClienteFormulario] = useState<Cliente>({
    infoCliente: {
      nome: null
    },
    endereco: {
      cidade: 'Custódia',
      rua: null,
      bairro: null,
      numero: null,
      complemento: null
    }
  });

  const setarInfoCliente = (valor: string, key: keyof InfoCliente) => {
    setClienteFormulario((prev) => ({
      ...prev,
      infoCliente: {
        ...prev.infoCliente,
        [key]: valor
      }
    }));
  };

  const setarEndereco = (valor: string, key: keyof Endereco) => {
    setClienteFormulario((prev) => ({
      ...prev,
      endereco: {
        ...prev.endereco,
        [key]: valor
      }
    }));
  };

  const setarClienteDaOrdemServico = () => {
    setCliente(clienteFormulario);
  };

  return (
    <div className={style.sessaoInserirCliente}>
      <div className={style.nomeCliente}>
        <h2>Insira o nome do cliente</h2>
        <Input value={clienteFormulario.infoCliente.nome} setValue={(valor) => setarInfoCliente(valor, 'nome')}></Input>
        <button>Avançar</button>
      </div>
      <div className={style.enderecoCliente}>
        <h2>Insira o endereço do cliente</h2>
        <Input value={clienteFormulario.endereco.cidade} setValue={(valor) => setarEndereco(valor, 'cidade')}></Input>
        <Input value={clienteFormulario.endereco.rua} setValue={(valor) => setarEndereco(valor, 'rua')}></Input>
        <Input value={clienteFormulario.endereco.bairro} setValue={(valor) => setarEndereco(valor, 'bairro')}></Input>
        <Input value={clienteFormulario.endereco.numero} setValue={(valor) => setarEndereco(valor, 'numero')}></Input>
        <Input
          value={clienteFormulario.endereco.complemento}
          setValue={(valor) => setarEndereco(valor, 'complemento')}
        ></Input>
        <button onClick={setarClienteDaOrdemServico}>Avançar</button>
      </div>
    </div>
  );
};

export default memo(SessaoInserirCliente);
