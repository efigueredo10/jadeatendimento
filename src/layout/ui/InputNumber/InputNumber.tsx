import { memo, useState, useEffect, useRef } from 'react';
import style from './InputNumber.module.css';

interface Props {
  label: string;
  value: number;
  casasDecimais?: number;
  monetario?: boolean;
  setValue: (valor: number) => void;
}

const Input = ({
  label,
  value,
  monetario = false,
  setValue,
  casasDecimais = 0,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const [texto, setTexto] = useState('');

  // Ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Quando perde foco ou atualiza valor externo
  useEffect(() => {
    if (!focus) {
      if (monetario) {
        const numeroFormatado = formatarNumeroBrasileiro(value);
        setTexto(numeroFormatado);
        return;
      }
      setTexto(String(value));
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

    console.log(somenteNumeros);

    // Insere casas decimais "fixas" — Ex: 123 → 1.23
    const valorComDecimal = parseFloat(
      (parseInt(somenteNumeros, 10) / Math.pow(10, casasDecimais)).toFixed(
        casasDecimais
      )
    );

    if (monetario) {
      setTexto(formatarNumeroBrasileiro(valorComDecimal));
    } else {
      setTexto(String(valorComDecimal));
    }
    setValue(valorComDecimal);
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

  const setarFocoInput = () => {
    setFocus(true);
    inputRef?.current?.focus();
  };

  return (
    <div onClick={setarFocoInput} className={style.inputContainer}>
      <input
        ref={inputRef}
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
