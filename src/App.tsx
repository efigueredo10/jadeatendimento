import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { CriarOrdemServicoProvider } from "./contexts/CriarOrdemServicoContext/CriarOrdemServicoContext";
import TelaCriarOrdemServico from "./screens/TelaCriarOrdemServico/TelaCriarOrdemServico";
import TelaAdicionarServico from "./screens/TelaAdicionarServico/TelaAdicionarServico";
import TelaVisualizarPDF from "./screens/TelaVisualizarPDF/TelaVisualizarPDF";
import LayoutPage from "./layout/LayoutPages/LayoutPage/LayoutPage";
import Home from "./screens/Home/Home";

export const routes = {
  home: "/",
  telaCliente: "/clientes",
  telaServicos: "/servico",
  telaPDF: "/pdf",
};

function App() {
  return (
    <BrowserRouter>
      <CriarOrdemServicoProvider>
        <Routes>
          <Route element={<LayoutPage />}>
            <Route path={routes.home} element={<Home></Home>}></Route>
            <Route
              path={routes.telaCliente}
              element={<TelaCriarOrdemServico></TelaCriarOrdemServico>}
            ></Route>
            <Route
              path={routes.telaServicos}
              element={<TelaAdicionarServico></TelaAdicionarServico>}
            ></Route>
            <Route
              path={routes.telaPDF}
              element={<TelaVisualizarPDF></TelaVisualizarPDF>}
            ></Route>
            <Route path="*" element={<Navigate to={routes.home} />}></Route>
          </Route>
        </Routes>
      </CriarOrdemServicoProvider>
    </BrowserRouter>
  );
}

export default App;
