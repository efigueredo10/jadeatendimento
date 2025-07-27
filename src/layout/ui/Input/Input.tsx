import { memo, useRef, useState, type ChangeEvent } from 'react';
import style from './Input.module.css';

interface Props {
  value: string;
  label: string;
  setValue: (valor: string) => void;
}

const Input = ({ value, label, setValue }: Props) => {
  const [focus, setFocus] = useState(false);

  // Ref
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const obterClasseLabel = () => {
    if (focus || (value && value.trim() !== '')) {
      return `${style.labelSuspenso}`;
    }
  };

  const setarFocoInput = () => {
    setFocus(true);
    inputRef?.current?.focus();
  };

  return (
    <div onClick={setarFocoInput} className={style.inputContainer}>
      <input
        ref={inputRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type="text"
        value={value}
        onChange={handleOnChange}
      />
      <label className={obterClasseLabel()}>{label}</label>
    </div>
  );
};

export default memo(Input);
