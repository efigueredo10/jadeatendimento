import { createContext, useContext, useEffect, useState } from 'react';
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

interface CriarOrdemServicoContextTypes {
  cliente: Cliente;
  servicos: ServicoCardProps[];
  setCliente: React.Dispatch<React.SetStateAction<Cliente>>;
  adicionarServico: (servico: ServicoCardProps) => void;
  removerServico: (servicoId: string) => void;
}

export const CriarOrdemServicoContext = createContext<
  CriarOrdemServicoContextTypes | undefined
>(undefined);

export function CriarOrdemServicoProvider({ children }) {
  const [cliente, setCliente] = useState<Cliente>({
    endereco: {
      bairro: '',
      cidade: '',
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
  });
  const [servicos, setServicos] = useState<ServicoCardProps[]>([
    {
      id: '1',
      descricao: 'Frente do prédio em alumínio ou vidro com torre de inox',
      quantidade: 2,
      titulo: 'Sacada superior',
      valor: 2000,
    },
  ]);

  useEffect(() => {
    console.log(cliente);
  }, [cliente]);

  console.log('renderizando contexto');

  const adicionarServico = (servico: ServicoCardProps) => {
    if (servico) setServicos(prev => [...prev, servico]);
  };

  const removerServico = (servicoId: string) => {
    setServicos(prev => prev.filter(servico => servico.id != servicoId));
  };

  return (
    <CriarOrdemServicoContext.Provider
      value={{
        cliente,
        setCliente,
        adicionarServico,
        removerServico,
        servicos,
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
