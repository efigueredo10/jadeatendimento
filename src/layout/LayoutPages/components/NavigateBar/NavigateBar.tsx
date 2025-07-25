import { memo } from "react";
import style from "./NavigateBar.module.css";
import { FaUser } from "react-icons/fa";
import { PiFilePdfBold, PiNotepadBold } from "react-icons/pi";
import { useNavegar } from "../../../../hooks/useNavegar";

const NavigateBar = () => {
  // Hooks
  const { navegarTelaCliente, navegarTelaPDF, navegarTelaServicos } =
    useNavegar();
  return (
    <nav>
      <div onClick={navegarTelaCliente} className={style.button}>
        <FaUser />
        <p>Cliente</p>
      </div>
      <div onClick={navegarTelaServicos} className={style.button}>
        <PiNotepadBold />
        <p>Serviços</p>
      </div>
      <div onClick={navegarTelaPDF} className={style.button}>
        <PiFilePdfBold />
        <p>PDF</p>
      </div>
    </nav>
  );
};

export default memo(NavigateBar);
