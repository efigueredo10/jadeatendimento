import { memo, useState, type ChangeEvent } from 'react';
import style from './Input.module.css';

interface Props {
  value: string;
  label: string;
  setValue: (valor: string) => void;
}

const Input = ({ value, label, setValue }: Props) => {
  const [focus, setFocus] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const obterClasseLabel = () => {
    if (focus || (value && value.trim() !== '')) {
      return `${style.labelSuspenso}`;
    }
  };

  return (
    <div className={style.inputContainer}>
      <input
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
