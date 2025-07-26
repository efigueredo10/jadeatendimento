import style from './TelaCliente.module.css';
import {
  useCriarOrdemServico,
  type Cliente,
  type Endereco,
  type InfoCliente,
} from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import { useState } from 'react';
import Input from '../../layout/ui/Input/Input';

const TelaCliente = () => {
  // Hooks
  const { setCliente } = useCriarOrdemServico();

  // States
  const [clienteFormulario, setClienteFormulario] = useState<Cliente>({
    infoCliente: {
      nome: null,
    },
    endereco: {
      cidade: 'Custódia',
      rua: null,
      bairro: null,
      numero: null,
      complemento: null,
    },
  });

  const setarInfoCliente = (valor: string, key: keyof InfoCliente) => {
    setClienteFormulario(prev => ({
      ...prev,
      infoCliente: {
        ...prev.infoCliente,
        [key]: valor,
      },
    }));
  };

  const setarEndereco = (valor: string, key: keyof Endereco) => {
    setClienteFormulario(prev => ({
      ...prev,
      endereco: {
        ...prev.endereco,
        [key]: valor,
      },
    }));
  };

  const setarClienteDaOrdemServico = () => {
    setCliente(clienteFormulario);
  };

  return (
    <div className={style.telaContainer}>
      <div className={style.infoCliente}>
        <h2>Informações</h2>
        <Input
          label="Nome"
          value={clienteFormulario.infoCliente.nome}
          setValue={valor => setarInfoCliente(valor, 'nome')}
        ></Input>
        <Input
          label="CPF"
          value={clienteFormulario.infoCliente.nome}
          setValue={valor => setarInfoCliente(valor, 'nome')}
        ></Input>
        <Input
          label="CNPJ"
          value={clienteFormulario.infoCliente.nome}
          setValue={valor => setarInfoCliente(valor, 'nome')}
        ></Input>
        <Input
          label="Telefone"
          value={clienteFormulario.infoCliente.nome}
          setValue={valor => setarInfoCliente(valor, 'nome')}
        ></Input>
        <Input
          label="E-mail"
          value={clienteFormulario.infoCliente.nome}
          setValue={valor => setarInfoCliente(valor, 'nome')}
        ></Input>
      </div>
      <div className={style.enderecoCliente}>
        <h2>Endereço</h2>
        <Input
          label="Cidade"
          value={clienteFormulario.endereco.cidade}
          setValue={valor => setarEndereco(valor, 'cidade')}
        ></Input>
        <Input
          label="Rua"
          value={clienteFormulario.endereco.rua}
          setValue={valor => setarEndereco(valor, 'rua')}
        ></Input>
        <Input
          label="Bairro"
          value={clienteFormulario.endereco.bairro}
          setValue={valor => setarEndereco(valor, 'bairro')}
        ></Input>
        <Input
          label="Número"
          value={clienteFormulario.endereco.numero}
          setValue={valor => setarEndereco(valor, 'numero')}
        ></Input>
        <Input
          label="Complemento"
          value={clienteFormulario.endereco.complemento}
          setValue={valor => setarEndereco(valor, 'complemento')}
        ></Input>
      </div>
    </div>
  );
};

export default TelaCliente;
