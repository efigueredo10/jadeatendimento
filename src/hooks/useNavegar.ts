import { useNavigate } from "react-router-dom";
import { routes } from "../App";

interface NavegarProps {
  rota: string;
}

export const useNavegar = () => {
  const navigate = useNavigate();
  const navegar = ({ rota }: NavegarProps) => {
    navigate(rota);
  };

  const navegarTelaCliente = () => {
    navegar({
      rota: routes.telaCliente,
    });
  };

  const navegarTelaServicos = () => {
    navegar({
      rota: routes.telaServicos,
    });
  };

  const navegarTelaPDF = () => {
    navegar({
      rota: routes.telaPDF,
    });
  };

  return {
    navegar,
    navegarTelaCliente,
    navegarTelaServicos,
    navegarTelaPDF,
  };
};
