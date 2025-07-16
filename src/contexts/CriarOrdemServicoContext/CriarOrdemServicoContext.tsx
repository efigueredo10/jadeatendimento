import { createContext, useContext, useState } from 'react';

export interface Servico {
  id: string;
  imagem: string;
  descricao: string;
  valor: number;
  observacao: string;
}

export interface Cliente {
  infoCliente: InfoCliente;
  endereco: Endereco;
}

export interface InfoCliente {
  nome: string;
}

export interface Endereco {
  cidade: string;
  rua: string;
  bairro: string;
  numero: string;
  complemento: string;
}

interface CriarOrdemServicoContextTypes {
  cliente: Cliente | null;
  servicos: Servico[] | null;
  setCliente: (cliente: Cliente | null) => void;
  adicionarServico: (servico: Servico) => void;
  removerServico: (servicoId: string) => void;
}

export const CriarOrdemServicoContext = createContext<CriarOrdemServicoContextTypes | undefined>(undefined);

export function CriarOrdemServicoProvider({ children }) {
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [servicos, setServicos] = useState<Servico[] | null>([
    {
      id: '1',
      descricao: 'servico 1',
      imagem: 'https://atan.olivint.com.br/images/produtos/03020010113.jpg',
      observacao: 'observação do serviço 1',
      valor: 2000
    }
  ]);

  const adicionarServico = (servico: Servico) => {
    if (servico) setServicos((prev) => [...prev, servico]);
  };

  const removerServico = (servicoId: string) => {
    setServicos((prev) => prev.filter((servico) => servico.id != servicoId));
  };

  return (
    <CriarOrdemServicoContext.Provider value={{ cliente, setCliente, adicionarServico, removerServico, servicos }}>
      {children}
    </CriarOrdemServicoContext.Provider>
  );
}

export function useCriarOrdemServico() {
  const context = useContext(CriarOrdemServicoContext);
  if (!context) {
    throw new Error('useCriarOrdemServico deve ser usado dentro de CriarOrdemServicoProvider');
  }
  return context;
}
