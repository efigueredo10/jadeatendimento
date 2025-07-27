import { memo } from 'react';
import style from './LayoutPage.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import NavigateBar from '../components/NavigateBar/NavigateBar';
import Header from '../components/Header/Header';
import { routes } from '../../../App';
import { useGlobalContext } from '../../../contexts/GlobalContext/GlobalContext';

const LayoutPage = () => {
  // Hooks
  const location = useLocation();
  const { globalState } = useGlobalContext();

  const isHomePage = () => {
    return location.pathname == routes.home;
  };

  return (
    <div className={style.layoutPage}>
      <Header
        titulo={globalState?.infoPagina?.titulo}
        botaoLeft={globalState?.infoPagina?.botoes?.esquerdo}
        botaoRight={globalState?.infoPagina?.botoes?.direito}
      ></Header>
      <div className={style.outlet}>
        <Outlet></Outlet>
      </div>
      {!isHomePage() && <NavigateBar></NavigateBar>}
    </div>
  );
};

export default memo(LayoutPage);
