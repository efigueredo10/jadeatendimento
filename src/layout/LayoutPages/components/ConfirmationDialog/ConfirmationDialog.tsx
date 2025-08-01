import { memo } from "react";
import style from "./ConfirmationDialog.module.css";
import Dialog from "../Dialog/Dialog";
import Botao from "../../../ui/Botao/Botao";

interface Props {
  mensagem: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog = ({ mensagem, open, onConfirm, onCancel }: Props) => {
  return (
    <Dialog open={open}>
      <div className={style.confirmationDialog}>
        <h4>Confirmação</h4>
        <p>{mensagem}</p>
        <div className={style.buttons}>
          <Botao onClick={onCancel} tipo="outline">
            Cancelar
          </Botao>
          <Botao onClick={onConfirm}>Confirmar</Botao>
        </div>
      </div>
    </Dialog>
  );
};

export default memo(ConfirmationDialog);
