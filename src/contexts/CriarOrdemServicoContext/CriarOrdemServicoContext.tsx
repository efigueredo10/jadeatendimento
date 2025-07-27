import { createContext, useContext, useState } from 'react';
import type { ServicoCardProps } from '../../screens/TelaServico/components/ServicoCard/ServicoCard';

export interface Cliente {
  infoCliente: InfoCliente;
  endereco: Endereco;
}

export interface InfoCliente {
  nome: string;
  cpf: string;
  cnpj: string;
  telefone: string;
  email: string;
}

export interface Endereco {
  cidade: string;
  rua: string;
  bairro: string;
  numero: string;
  complemento: string;
}

export interface OrdemServico {
  servicos: ServicoCardProps[];
  total: number;
}

interface CriarOrdemServicoContextTypes {
  ordemServico: OrdemServico;
  cliente: Cliente;
  setCliente: React.Dispatch<React.SetStateAction<Cliente>>;
  adicionarServico: (servico: ServicoCardProps) => void;
  removerServico: (servicoId: string) => void;
  limparServicos: () => void;
  limparCliente: () => void;
}

const clienteInicial = {
  endereco: {
    bairro: '',
    cidade: 'Custódia',
    complemento: '',
    numero: '',
    rua: '',
  },
  infoCliente: {
    cnpj: '',
    cpf: '',
    email: '',
    nome: '',
    telefone: '',
  },
};

export const CriarOrdemServicoContext = createContext<
  CriarOrdemServicoContextTypes | undefined
>(undefined);

export function CriarOrdemServicoProvider({ children }) {
  const [cliente, setCliente] = useState<Cliente>(clienteInicial);
  const [ordemServico, setOrdemServico] = useState<OrdemServico>({
    total: 0,
    servicos: [],
  });

  const obterTotal = () => {
    return ordemServico.servicos.reduce(
      (acumulador, servico) => acumulador + servico.valor,
      0
    );
  };

  const adicionarServico = (servico: ServicoCardProps) => {
    if (!servico) return;
    setOrdemServico(prev => ({
      ...prev,
      servicos: [...prev.servicos, servico],
      total: obterTotal(),
    }));
  };

  const removerServico = (servicoId: string) => {
    setOrdemServico(prev => ({
      ...prev,
      servicos: {
        ...prev.servicos,
        servico: prev.servicos.filter(servico => servico.id != servicoId),
      },
      total: obterTotal(),
    }));
  };

  const limparServicos = () => {
    setOrdemServico(prev => ({
      ...prev,
      servicos: [],
      total: 0,
    }));
  };

  const limparCliente = () => {
    setCliente(clienteInicial);
  };

  return (
    <CriarOrdemServicoContext.Provider
      value={{
        cliente,
        setCliente,
        adicionarServico,
        removerServico,
        limparServicos,
        limparCliente,
        ordemServico,
      }}
    >
      {children}
    </CriarOrdemServicoContext.Provider>
  );
}

export function useCriarOrdemServico() {
  const context = useContext(CriarOrdemServicoContext);
  if (!context) {
    throw new Error(
      'useCriarOrdemServico deve ser usado dentro de CriarOrdemServicoProvider'
    );
  }
  return context;
}
