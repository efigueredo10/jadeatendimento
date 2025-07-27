import { memo, useState } from 'react';
import style from './FormularioAddServico.module.css';
import Input from '../../../../layout/ui/Input/Input';
import InputNumber from '../../../../layout/ui/InputNumber/InputNumber';
import Botao from '../../../../layout/ui/Botao/Botao';
import { useCriarOrdemServico } from '../../../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  closeModal: () => void;
}

const FormularioAddServico = ({ closeModal }: Props) => {
  // Hooks
  const { adicionarServico } = useCriarOrdemServico();

  // Formulário
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  const addServico = () => {
    adicionarServico({
      descricao,
      quantidade,
      titulo,
      valor,
      id: uuidv4(),
    });
    closeModal();
  };

  return (
    <div className={style.formulario}>
      <div className={style.inputs}>
        <Input
          label="Título"
          value={titulo}
          setValue={valor => setTitulo(valor)}
        ></Input>
        <Input
          label="Descrição"
          value={descricao}
          setValue={valor => setDescricao(valor)}
        ></Input>
        <InputNumber
          monetario={false}
          label="Quantidade"
          value={quantidade}
          setValue={valor => setQuantidade(valor)}
        ></InputNumber>
        <InputNumber
          monetario={true}
          label="Valor"
          value={valor}
          setValue={valor => setValor(valor)}
          casasDecimais={2}
        ></InputNumber>
      </div>

      <div className={style.botoes}>
        <Botao onClick={addServico} width="100%" size="large">
          Adicionar
        </Botao>
      </div>
    </div>
  );
};

export default memo(FormularioAddServico);
