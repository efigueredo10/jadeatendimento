import { memo, type ReactNode } from 'react';
import style from './Header.module.css';

interface Props {
  titulo: string;
  botaoLeft: ReactNode;
  botaoRight: ReactNode;
}

const Header = ({ titulo, botaoLeft, botaoRight }: Props) => {
  return (
    <div className={style.header}>
      <div className={style.iconeLeft}>{botaoLeft}</div>
      <h3>{titulo}</h3>
      <div className={style.iconeRight}>{botaoRight}</div>
    </div>
  );
};

export default memo(Header);
