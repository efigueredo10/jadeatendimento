import { useNavigate } from 'react-router-dom';
import { routes } from '../App';

interface NavegarProps {
  rota: string;
}

export const useNavegar = () => {
  const navigate = useNavigate();
  const navegar = ({ rota }: NavegarProps) => {
    navigate(rota);
  };

  const navegarParaTelaCriarOrdemServico = () => {
    navegar({
      rota: routes.telaCriarOrdemServico
    });
  };

  const navegarTelaAdicionarServico = () => {
    navegar({
      rota: routes.telaAdicionarServico
    });
  };

  const navegarParaTelaVisualizarPdf = () => {
    navegar({
      rota: routes.telaVisualizarPdf
    });
  };

  return { navegar, navegarParaTelaCriarOrdemServico, navegarTelaAdicionarServico, navegarParaTelaVisualizarPdf };
};
