import { PDFViewer } from '@react-pdf/renderer';
// import style from './TelaVisualizarPDF.module.css';
import { PdfOrdemServico } from '../../PDFs/PdfOrdemServico/PdfOrdemServico';
import { useCriarOrdemServico } from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';

const TelaVisualizarPDF = () => {
  const { servicos } = useCriarOrdemServico();
  return (
    <PDFViewer style={{ width: '100vw', height: '100vh' }}>
      <PdfOrdemServico servicos={servicos} />
    </PDFViewer>
  );
};

export default TelaVisualizarPDF;
