import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CriarOrdemServicoProvider } from './contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import TelaCriarOrdemServico from './screens/TelaCriarOrdemServico/TelaCriarOrdemServico';
import TelaAdicionarServico from './screens/TelaAdicionarServico/TelaAdicionarServico';
import TelaVisualizarPDF from './screens/TelaVisualizarPDF/TelaVisualizarPDF';

export const routes = {
  telaCriarOrdemServico: '/',
  telaAdicionarServico: '/servico/add',
  telaVisualizarPdf: '/pdf'
};

function App() {
  return (
    <BrowserRouter>
      <CriarOrdemServicoProvider>
        <Routes>
          <Route path={routes.telaCriarOrdemServico} element={<TelaCriarOrdemServico></TelaCriarOrdemServico>}></Route>
          <Route path={routes.telaAdicionarServico} element={<TelaAdicionarServico></TelaAdicionarServico>}></Route>
          <Route path={routes.telaVisualizarPdf} element={<TelaVisualizarPDF></TelaVisualizarPDF>}></Route>
        </Routes>
      </CriarOrdemServicoProvider>
    </BrowserRouter>
  );
}

export default App;
