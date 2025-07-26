import type { ReactNode } from 'react';

export const estadoInicialGlobalContext: GlobalState = {
  infoPagina: {
    titulo: 'PÁGINA SEM TÍTULO',
  },
};

export interface GlobalState {
  infoPagina: InfoPagina;
}

export interface InfoPagina {
  titulo: string;
  botoes?: {
    esquerdo?: ReactNode;
    direito?: ReactNode;
  };
}
