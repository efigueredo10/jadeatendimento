import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import {
  estadoInicialGlobalContext,
  type GlobalState,
  type InfoPagina,
} from './GlobalContext.types';

interface GlobalContextTypes {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
  setarInfoPagina: (infoPaginaAtual: InfoPagina) => void;
}

export const GlobalContext = createContext<GlobalContextTypes>(null);

interface Props {
  children: ReactNode;
}

export const GlobalContextProvider = ({ children }: Props) => {
  const [globalState, setGlobalState] = useState<GlobalState>(
    estadoInicialGlobalContext
  );

  const setarInfoPagina = (infoPaginaAtual: InfoPagina) => {
    setGlobalState(prev => ({
      ...prev,
      infoPagina: {
        ...prev.infoPagina,
        ...infoPaginaAtual,
      },
    }));
  };

  return (
    <GlobalContext.Provider
      value={{ globalState, setGlobalState, setarInfoPagina }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Erro ao criar contexto global');
  }
  return context;
}
