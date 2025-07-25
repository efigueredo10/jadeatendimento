import { memo } from "react";
import style from "./LayoutPage.module.css";
import { Outlet, useLocation } from "react-router-dom";
import NavigateBar from "../components/NavigateBar/NavigateBar";
import Header from "../components/Header/Header";
import { routes } from "../../../App";

const LayoutPage = () => {
  const location = useLocation();

  const mapeamentoTitulos = {
    [routes.home]: "Home",
    [routes.telaCliente]: "Cliente",
    [routes.telaServicos]: "Serviços",
    [routes.telaPDF]: "PDF",
  };

  const obterTituloPorRota = () => {
    return mapeamentoTitulos[location.pathname];
  };

  return (
    <div className={style.layoutPage}>
      <Header titulo={obterTituloPorRota()}></Header>
      <Outlet></Outlet>
      <NavigateBar></NavigateBar>
    </div>
  );
};

export default memo(LayoutPage);
