import { memo, useState, useEffect } from 'react';
import style from './InputNumber.module.css';

interface Props {
  label: string;
  value: number;
  casasDecimais?: number;
  setValue: (valor: number) => void;
}

const Input = ({ label, value, setValue, casasDecimais = 2 }: Props) => {
  const [focus, setFocus] = useState(false);
  const [texto, setTexto] = useState('');

  // Quando perde foco ou atualiza valor externo
  useEffect(() => {
    if (!focus) {
      const numeroFormatado = formatarNumeroBrasileiro(value);
      setTexto(numeroFormatado);
    }
  }, [value, focus]);

  // Formatar valor como string brasileira
  const formatarNumeroBrasileiro = (valor: number): string => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: casasDecimais,
      maximumFractionDigits: casasDecimais,
    });
  };

  // Ao digitar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const somenteNumeros = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (somenteNumeros === '') {
      setTexto('');
      setValue(0);
      return;
    }

    // Insere casas decimais "fixas" — Ex: 123 → 1.23
    const valorComDecimal = parseFloat(
      (parseInt(somenteNumeros, 10) / Math.pow(10, casasDecimais)).toFixed(
        casasDecimais
      )
    );

    setValue(valorComDecimal);
    setTexto(formatarNumeroBrasileiro(valorComDecimal));
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const obterClasseLabel = () => {
    return `${style.label} ${
      focus || value == 0 || value != 0 ? style.labelSuspenso : ''
    }`;
  };

  return (
    <div className={style.inputContainer}>
      <input
        type="text"
        inputMode="numeric"
        value={texto}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label className={obterClasseLabel()}>{label}</label>
    </div>
  );
};

export default memo(Input);
