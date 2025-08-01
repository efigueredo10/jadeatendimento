import style from "./TelaCliente.module.css";
import {
  useCriarOrdemServico,
  type Endereco,
  type InfoCliente,
} from "../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext";
import Input from "../../layout/ui/Input/Input";
import Tela from "../../layout/LayoutPages/components/Tela/Tela";
import InputNumber from "../../layout/ui/InputNumber/InputNumber";
import BotaoLimpar from "../../layout/LayoutPages/components/BotaoLimpar/BotaoLimpar";

const TelaCliente = () => {
  // Hooks
  const { alterarCliente, cliente, limparCliente } = useCriarOrdemServico();

  const setarInfoCliente = (valor: string | number, key: keyof InfoCliente) => {
    alterarCliente((prev) => ({
      ...prev,
      infoCliente: {
        ...prev.infoCliente,
        [key]: valor,
      },
    }));
  };

  const setarEndereco = (valor: string, key: keyof Endereco) => {
    alterarCliente((prev) => ({
      ...prev,
      endereco: {
        ...prev.endereco,
        [key]: valor,
      },
    }));
  };

  return (
    <Tela
      className={style.telaContainer}
      infoTela={{
        titulo: "Cliente",
      }}
      exibirToolbar={true}
      toolbar={
        <div className={style.toolbar}>
          <BotaoLimpar
            mensagemConfirmacao="Tem certeza que quer limpar todos os dados do cliente?"
            onClick={limparCliente}
          ></BotaoLimpar>
        </div>
      }
    >
      <div className={style.infoCliente}>
        <h2>Informações</h2>
        <Input
          label="Nome"
          value={cliente?.infoCliente?.nome}
          setValue={(valor) => setarInfoCliente(valor, "nome")}
        ></Input>
        <InputNumber
          label="CPF"
          value={cliente?.infoCliente?.cpf}
          setValue={(valor) => setarInfoCliente(valor, "cpf")}
        ></InputNumber>
        <InputNumber
          label="CNPJ"
          value={cliente?.infoCliente?.cnpj}
          setValue={(valor) => setarInfoCliente(valor, "cnpj")}
        ></InputNumber>
        <InputNumber
          label="Telefone"
          value={cliente?.infoCliente?.telefone}
          setValue={(valor) => setarInfoCliente(valor, "telefone")}
        ></InputNumber>
        <Input
          label="E-mail"
          value={cliente?.infoCliente?.email}
          setValue={(valor) => setarInfoCliente(valor, "email")}
        ></Input>
      </div>
      <div className={style.enderecoCliente}>
        <h2>Endereço</h2>
        <Input
          label="Cidade"
          value={cliente?.endereco?.cidade}
          setValue={(valor) => setarEndereco(valor, "cidade")}
        ></Input>
        <Input
          label="Rua"
          value={cliente?.endereco?.rua}
          setValue={(valor) => setarEndereco(valor, "rua")}
        ></Input>
        <Input
          label="Bairro"
          value={cliente?.endereco?.bairro}
          setValue={(valor) => setarEndereco(valor, "bairro")}
        ></Input>
        <Input
          label="Número"
          value={cliente?.endereco?.numero}
          setValue={(valor) => setarEndereco(valor, "numero")}
        ></Input>
        <Input
          label="Complemento"
          value={cliente?.endereco?.complemento}
          setValue={(valor) => setarEndereco(valor, "complemento")}
        ></Input>
      </div>
    </Tela>
  );
};

export default TelaCliente;
