import { memo } from "react";
import style from "./Header.module.css";

interface Props {
  titulo: string;
}

const Header = ({ titulo }: Props) => {
  return (
    <div className={style.header}>
      <div className={style.iconeLeft}></div>
      <h3>{titulo}</h3>
      <div className={style.iconeRight}></div>
    </div>
  );
};

export default memo(Header);
