import { memo, type ChangeEvent } from 'react';
import style from './Input.module.css';

interface Props {
  value: string;
  setValue: (valor: string) => void;
}

const Input = ({ value, setValue }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={style.inputContainer}>
      <input type='text' value={value} onChange={handleOnChange} />
    </div>
  );
};

export default memo(Input);
