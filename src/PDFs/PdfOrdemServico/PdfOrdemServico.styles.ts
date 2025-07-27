import { StyleSheet } from '@react-pdf/renderer';

const primaryColor = '#7f1212';

const widthsColunas = {
  coluna0: 100,
  coluna1: 120,
  coluna2: 300,
  coluna3: 150,
  coluna4: 60,
  coluna5: 110,
  coluna6: 100,
};

const estiloListagemHeader = {
  padding: '4px',
  fontFamily: 'Helvetica-Bold',
};

const estiloListagemBody = {
  padding: '4px',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    padding: 0,
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {},
  infoCliente: {},

  // ANTIGO
  bordaConteudo: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    border: `2px solid ${primaryColor}`,
  },

  /* CABECALHO */
  cabecalho: {
    flexDirection: 'row',
    padding: '8px',
  },
  cabecalho__logo: {
    width: 80,
  },
  tituloPedido: {
    backgroundColor: primaryColor,
    display: 'flex',
    padding: '8px',
    gap: '8px',
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  tituloPedido2: {
    display: 'flex',
    padding: '8px',
    gap: '8px',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    borderBottom: `1px dashed ${primaryColor}`,
  },
  tituloPedidoLinha1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tituloPedidoLinha2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dados: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    padding: '8px',
    borderBottom: `1px dashed ${primaryColor}`,
  },
  dadosCliente: {
    width: '100%',
  },
  dadosFornecedor: {
    width: '100%',
  },
  dadosTitulo: {
    marginBottom: '8px',
    fontFamily: 'Helvetica-Bold',
  },
  linhaTipoFrete: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '8px',
    padding: '8px',
    // borderBottom: `1px dashed ${primaryColor}`
  },
  listagemProdutos: {},
  listagemProdutosHeader: {
    backgroundColor: primaryColor,
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
  headerColuna0: {
    width: widthsColunas.coluna0,
    minWidth: widthsColunas.coluna0,
    maxWidth: widthsColunas.coluna0,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemHeader,
  },
  headerColuna1: {
    width: widthsColunas.coluna1,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemHeader,
  },
  headerColuna2: {
    width: widthsColunas.coluna2,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemHeader,
  },
  headerColuna3: {
    width: widthsColunas.coluna3,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemHeader,
  },
  headerColuna4: {
    width: widthsColunas.coluna4,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemHeader,
  },
  headerColuna5: {
    width: widthsColunas.coluna5,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemHeader,
  },
  headerColuna6: {
    width: widthsColunas.coluna6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemHeader,
  },
  listagemProdutosBody: {},
  linhaProduto: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 9,
    fontWeight: 'bold',
    borderBottom: `1px solid #888888`,
  },
  bodyColuna0: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthsColunas.coluna0,
    minWidth: widthsColunas.coluna0,
    maxWidth: widthsColunas.coluna0,
    padding: '4px',
    borderRight: `1px solid #888888`,
  },
  bodyColuna1: {
    width: widthsColunas.coluna1,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemBody,
  },
  bodyColuna2: {
    width: widthsColunas.coluna2,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemBody,
  },
  bodyColuna3: {
    width: widthsColunas.coluna3,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemBody,
  },
  bodyColuna4: {
    width: widthsColunas.coluna4,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...estiloListagemBody,
  },
  bodyColuna5: {
    width: widthsColunas.coluna5,
    borderRight: `1px solid #888888`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...estiloListagemBody,
  },
  bodyColuna6: {
    width: widthsColunas.coluna6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    ...estiloListagemBody,
  },
  linhaTotalObservacoes: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    gap: '8px',
  },
  observacoesContainer: {
    width: '100%',
  },
  observacoesContainerTitulo: {
    fontFamily: 'Helvetica-Bold',
    marginBottom: '8px',
  },
  totalContainer: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 12,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: '8px',
  },
  linhaTotalTexto: {},
  pageRodape: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
  },
  boldText: {
    fontFamily: 'Helvetica-Bold',
  },

  imagem: {
    maxHeight: 60,
    objectFit: 'cover',
  },
});

export default styles;
