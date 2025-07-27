import { memo } from 'react';
import style from './NavigateBar.module.css';
import { PiFilePdfBold, PiNotepadBold } from 'react-icons/pi';
import { useNavegar } from '../../../../hooks/useNavegar';
import { FiUser } from 'react-icons/fi';

const NavigateBar = () => {
  // Hooks
  const { navegarTelaCliente, navegarTelaPDF, navegarTelaServicos } =
    useNavegar();
  return (
    <nav>
      <div onClick={navegarTelaCliente} className={style.button}>
        <FiUser size={18} />
        <button>Cliente</button>
      </div>
      <div onClick={navegarTelaServicos} className={style.button}>
        <PiNotepadBold size={18} />
        <button>Serviços</button>
      </div>
      <div onClick={navegarTelaPDF} className={style.button}>
        <PiFilePdfBold size={18} />
        <button>PDF</button>
      </div>
    </nav>
  );
};

export default memo(NavigateBar);
