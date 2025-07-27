import { createContext, useContext, useEffect, useState } from 'react';
import type { ServicoCardProps } from '../../screens/TelaServico/components/ServicoCard/ServicoCard';
import { useCookie } from '../../hooks/useCookies';

export interface Cliente {
  infoCliente: InfoCliente;
  endereco: Endereco;
}

export interface InfoCliente {
  nome: string;
  cpf: number;
  cnpj: number;
  telefone: number;
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
  alterarCliente: (callback: (clienteAtual: Cliente) => Cliente) => void;
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
    cnpj: 0,
    cpf: 0,
    email: '',
    nome: '',
    telefone: 0,
  },
};

const ordemServicoInicial = {
  total: 0,
  servicos: [],
};

export const CriarOrdemServicoContext = createContext<
  CriarOrdemServicoContextTypes | undefined
>(undefined);

export function CriarOrdemServicoProvider({ children }) {
  // Hooks
  const { setCookie, getCookie } = useCookie();

  // States
  const [cliente, setCliente] = useState<Cliente>(clienteInicial);
  const [ordemServico, setOrdemServico] =
    useState<OrdemServico>(ordemServicoInicial);

  useEffect(() => {
    const clienteCookie = getCookie('cliente');
    const ordemServicoCookie = getCookie('ordemServico');
    console.log(clienteCookie);
    console.log(ordemServicoCookie);
    setCliente(clienteCookie ? clienteCookie : clienteInicial);
    setOrdemServico(
      ordemServicoCookie ? ordemServicoCookie : ordemServicoInicial
    );
  }, []);

  const obterTotal = (servicos: ServicoCardProps[]) => {
    return servicos.reduce(
      (acumulador, servico) => acumulador + servico.valor,
      0
    );
  };

  const alterarOrdemServico = (
    callback: (ordemServicoAtual: OrdemServico) => OrdemServico
  ) => {
    setOrdemServico(prev => {
      const novoValor = callback(prev);
      setCookie('ordemServico', novoValor);
      return novoValor;
    });
  };

  const alterarCliente = (callback: (clienteAtual: Cliente) => Cliente) => {
    setCliente(prev => {
      const novoValor = callback(prev);
      setCookie('cliente', novoValor);
      return novoValor;
    });
  };

  const adicionarServico = (servico: ServicoCardProps) => {
    if (!servico) return;
    alterarOrdemServico(prev => ({
      ...prev,
      servicos: [...prev.servicos, servico],
      total: obterTotal([...prev.servicos, servico]),
    }));
  };

  const removerServico = (servicoId: string) => {
    alterarOrdemServico(prev => ({
      ...prev,
      servicos: {
        ...prev.servicos,
        servico: prev.servicos.filter(servico => servico.id != servicoId),
      },
      total: obterTotal(
        prev.servicos.filter(servico => servico.id != servicoId)
      ),
    }));
  };

  const limparServicos = () => {
    alterarOrdemServico(prev => ({
      ...prev,
      servicos: [],
      total: 0,
    }));
  };

  const limparCliente = () => {
    alterarCliente(() => clienteInicial);
  };

  return (
    <CriarOrdemServicoContext.Provider
      value={{
        cliente,
        alterarCliente,
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
