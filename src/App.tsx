import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { CriarOrdemServicoProvider } from './contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import TelaServico from './screens/TelaServico/TelaServico';
import TelaVisualizarPDF from './screens/TelaVisualizarPDF/TelaVisualizarPDF';
import LayoutPage from './layout/LayoutPages/LayoutPage/LayoutPage';
import TelaCliente from './screens/TelaCliente/TelaCliente';
import { GlobalContextProvider } from './contexts/GlobalContext/GlobalContext';

export const routes = {
  home: '/',
  telaCliente: '/clientes',
  telaServicos: '/servico',
  telaPDF: '/pdf',
};

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <CriarOrdemServicoProvider>
          <Routes>
            <Route element={<LayoutPage />}>
              <Route
                path={routes.telaCliente}
                element={<TelaCliente></TelaCliente>}
              ></Route>
              <Route
                path={routes.telaServicos}
                element={<TelaServico></TelaServico>}
              ></Route>
              <Route
                path={routes.telaPDF}
                element={<TelaVisualizarPDF></TelaVisualizarPDF>}
              ></Route>
              <Route
                path="*"
                element={<Navigate to={routes.telaCliente} />}
              ></Route>
            </Route>
          </Routes>
        </CriarOrdemServicoProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
