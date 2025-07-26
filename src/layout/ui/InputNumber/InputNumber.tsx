import { memo, useState } from 'react';
import style from './InputNumber.module.css';

interface Props {
  label: string;
  value: number;
  casasDecimais?: number;
  setValue: (valor: number) => void;
}

const Input = ({ label, value, setValue, casasDecimais = 0 }: Props) => {
  const [focus, setFocus] = useState(false);

  function formatarNumeroBrasileiro(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: casasDecimais,
      maximumFractionDigits: casasDecimais,
    });
  }

  function parseNumeroBrasileiro(valor: string): number {
    const limpo = valor.replace(/\./g, '').replace(',', '.');
    const numero = parseFloat(limpo);
    return isNaN(numero) ? 0 : numero;
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (/^[0-9.,]*$/.test(input) || input === '') {
      const numeroConvertido = parseNumeroBrasileiro(input);
      setValue(numeroConvertido);
    }
  };

  function getStepFromDecimalPlaces(decimals: number): number {
    if (decimals <= 0) return 1;
    return parseFloat('0.' + '0'.repeat(decimals - 1) + '1');
  }

  const obterClasseLabel = () => {
    console.log(value);
    if (focus || String(value).trim() !== '') {
      return `${style.labelSuspenso}`;
    }
  };

  return (
    <div className={style.inputContainer}>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        step={getStepFromDecimalPlaces(casasDecimais)}
        type="text"
        value={formatarNumeroBrasileiro(value)}
        onChange={handleOnChange}
      />
      <label className={obterClasseLabel()}>{label}</label>
    </div>
  );
};

export default memo(Input);
