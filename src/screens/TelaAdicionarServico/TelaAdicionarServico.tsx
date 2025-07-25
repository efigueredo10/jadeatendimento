// import { FaArrowLeft } from "react-icons/fa";
import style from "./TelaAdicionarServico.module.css";
import UploadImagem from "../../layout/ui/UploadImagem/UploadImagem";
import TextArea from "../../layout/ui/TextArea/TextArea";
import { useState } from "react";
import InputNumber from "../../layout/ui/InputNumber/InputNumber";

const TelaAdicionarServico = () => {
  // Formulario
  const [valor, setValor] = useState(0.0);
  return (
    <div className={style.telaContainer}>
      <div className={style.header}>
        <div className={style.iconeLeft}></div>
        <h3>Adicionar Serviço</h3>
        <div className={style.iconeRight}>
          {/* <FaArrowLeft onClick={navegarParaTelaCriarOrdemServico} /> */}
        </div>
      </div>
      <form>
        <UploadImagem></UploadImagem>
        <TextArea></TextArea>
        <InputNumber value={valor} setValue={setValor}></InputNumber>
      </form>
    </div>
  );
};

export default TelaAdicionarServico;
