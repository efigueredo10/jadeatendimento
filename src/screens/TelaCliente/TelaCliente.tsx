import style from './TelaCliente.module.css';
import {
  useCriarOrdemServico,
  type Endereco,
  type InfoCliente,
} from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import Input from '../../layout/ui/Input/Input';

const TelaCliente = () => {
  // Hooks
  const { setCliente, cliente } = useCriarOrdemServico();

  const setarInfoCliente = (valor: string, key: keyof InfoCliente) => {
    setCliente(prev => ({
      ...prev,
      infoCliente: {
        ...prev.infoCliente,
        [key]: valor,
      },
    }));
  };

  const setarEndereco = (valor: string, key: keyof Endereco) => {
    setCliente(prev => ({
      ...prev,
      endereco: {
        ...prev.endereco,
        [key]: valor,
      },
    }));
  };

  return (
    <div className={style.telaContainer}>
      <div className={style.infoCliente}>
        <h2>Informações</h2>
        <Input
          label="Nome"
          value={cliente?.infoCliente.nome}
          setValue={valor => setarInfoCliente(valor, 'nome')}
        ></Input>
        <Input
          label="CPF"
          value={cliente?.infoCliente.cpf}
          setValue={valor => setarInfoCliente(valor, 'cpf')}
        ></Input>
        <Input
          label="CNPJ"
          value={cliente?.infoCliente.cnpj}
          setValue={valor => setarInfoCliente(valor, 'cnpj')}
        ></Input>
        <Input
          label="Telefone"
          value={cliente?.infoCliente.telefone}
          setValue={valor => setarInfoCliente(valor, 'telefone')}
        ></Input>
        <Input
          label="E-mail"
          value={cliente?.infoCliente.email}
          setValue={valor => setarInfoCliente(valor, 'email')}
        ></Input>
      </div>
      <div className={style.enderecoCliente}>
        <h2>Endereço</h2>
        <Input
          label="Cidade"
          value={cliente?.endereco.cidade}
          setValue={valor => setarEndereco(valor, 'cidade')}
        ></Input>
        <Input
          label="Rua"
          value={cliente?.endereco.rua}
          setValue={valor => setarEndereco(valor, 'rua')}
        ></Input>
        <Input
          label="Bairro"
          value={cliente?.endereco.bairro}
          setValue={valor => setarEndereco(valor, 'bairro')}
        ></Input>
        <Input
          label="Número"
          value={cliente?.endereco.numero}
          setValue={valor => setarEndereco(valor, 'numero')}
        ></Input>
        <Input
          label="Complemento"
          value={cliente?.endereco.complemento}
          setValue={valor => setarEndereco(valor, 'complemento')}
        ></Input>
      </div>
    </div>
  );
};

export default TelaCliente;
