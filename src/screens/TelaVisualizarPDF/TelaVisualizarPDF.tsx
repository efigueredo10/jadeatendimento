// src/pages/VisualizarPDF.tsx
import React, { useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import style from './TelaVisualizarPDF.module.css';
import { PdfOrdemServico } from '../../PDFs/PdfOrdemServico/PdfOrdemServico';
import { useCriarOrdemServico } from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import Tela from '../../layout/LayoutPages/components/Tela/Tela';
import Apresentacao from '../../layout/LayoutPages/components/Apresentacao/Apresentacao';

export default function VisualizarPDF() {
  const { ordemServico, cliente } = useCriarOrdemServico();

  const [url, setUrl] = React.useState<string | null>(null);

  useEffect(() => {
    const gerarPdfBlob = async () => {
      const blob = await pdf(
        <PdfOrdemServico
          ordemServico={ordemServico}
          cliente={cliente}
        ></PdfOrdemServico>
      ).toBlob();

      const blobUrl = URL.createObjectURL(blob);
      setUrl(blobUrl);
    };
    gerarPdfBlob();
  }, []);

  const verPDF = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Tela
      className={style.telaContainer}
      infoTela={{
        titulo: 'PDF',
      }}
    >
      {/* <iframe className={style.iframe} src={url} title="PDF Viewer" /> */}
      <Apresentacao
        botaoProps={{
          titulo: 'Ver PDF',
          onClick: verPDF,
        }}
        imagemProps={{
          nomeImagem: 'pdfImage.png',
          alt: 'Imagem de um homem sentado em uma montanha de dinheiro',
        }}
      ></Apresentacao>
    </Tela>
  );
}
