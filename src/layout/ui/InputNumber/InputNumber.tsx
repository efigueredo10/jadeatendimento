import { memo, type ChangeEvent } from 'react';
import style from './InputNumber.module.css';

interface Props {
  value: number;
  setValue: (valor: number) => void;
}

const Input = ({ value, setValue }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(parseFloat(event.target.value));
  };

  return (
    <div className={style.inputContainer}>
      <input type='number' value={value} onChange={handleOnChange} />
    </div>
  );
};

export default memo(Input);
