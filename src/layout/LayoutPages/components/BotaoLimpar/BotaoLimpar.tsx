import { memo, useState } from "react";
import Botao from "../../../ui/Botao/Botao";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";

interface Props {
  onClick: () => void;
  mensagemConfirmacao: string;
}

const BotaoLimpar = ({ onClick, mensagemConfirmacao }: Props) => {
  // States
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Botao onClick={() => setDialogOpen(true)} size="normal">
        Limpar
      </Botao>

      <ConfirmationDialog
        mensagem={mensagemConfirmacao}
        onCancel={() => {
          setDialogOpen(false);
        }}
        onConfirm={() => {
          onClick();
          setDialogOpen(false);
        }}
        open={dialogOpen}
      ></ConfirmationDialog>
    </>
  );
};

export default memo(BotaoLimpar);
