// src/pages/VisualizarPDF.tsx
import React, { useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import style from './TelaVisualizarPDF.module.css';
import { PdfOrdemServico } from '../../PDFs/PdfOrdemServico/PdfOrdemServico';
import { useCriarOrdemServico } from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';

export default function VisualizarPDF() {
  const { servicos, cliente } = useCriarOrdemServico();

  const [url, setUrl] = React.useState<string | null>(null);

  useEffect(() => {
    const gerarPdfBlob = async () => {
      const blob = await pdf(
        <PdfOrdemServico
          servicos={servicos}
          cliente={cliente}
        ></PdfOrdemServico>
      ).toBlob();

      const blobUrl = URL.createObjectURL(blob);
      console.log(blobUrl);
      setUrl(blobUrl);
    };

    console.log('renderizando');
    gerarPdfBlob();
  }, []);

  return <iframe className={style.iframe} src={url} title="PDF Viewer" />;
}
