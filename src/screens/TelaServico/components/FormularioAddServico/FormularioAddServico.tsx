import { memo, useState } from 'react';
import style from './FormularioAddServico.module.css';
import Input from '../../../../layout/ui/Input/Input';
import InputNumber from '../../../../layout/ui/InputNumber/InputNumber';

const FormularioAddServico = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  return (
    <div className={style.formulario}>
      <Input
        label="Titulo"
        value={titulo}
        setValue={valor => setTitulo(valor)}
      ></Input>
      <Input
        label="Descricao"
        value={descricao}
        setValue={valor => setDescricao(valor)}
      ></Input>
      <InputNumber
        label="Quantidade"
        value={quantidade}
        setValue={valor => setQuantidade(valor)}
      ></InputNumber>
      <InputNumber
        label="Valor"
        value={valor}
        setValue={valor => setValor(valor)}
        casasDecimais={2}
      ></InputNumber>
    </div>
  );
};

export default memo(FormularioAddServico);
