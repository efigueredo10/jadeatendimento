import { StyleSheet } from "@react-pdf/renderer";

const primaryColor = "#000";

const widthsColunas = {
  coluna0: 150,
  coluna1: 300,
  coluna2: 60,
  coluna3: 100,
};

const estiloListagemHeader = {
  padding: "12px",
  fontFamily: "Helvetica-Bold",
  fontSize: "12px",
};

const estiloListagemBody = {
  padding: "6px",
  fontSize: "10px",
};

const defaultPadding = "32px";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 0,
    paddingBottom: 32,
    paddingTop: 32,
    display: "flex",
    gap: 8,
    flexDirection: "column",
  },
  relativeWrapper: {
    marginTop: -32, // negativo para compensar o padding do page
    marginLeft: -32,
    marginRight: -32,
  },
  header: {},
  infoCliente: {
    padding: `0 ${defaultPadding}`,
    fontSize: "14px",
    gap: "8px",
  },
  clienteData: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "16px",
  },
  headerImagem: {
    width: "100%",
  },
  headerTitle: {
    padding: `16px ${defaultPadding}`,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    fontSize: "18px",
    fontFamily: "Helvetica-Bold",
  },

  // ANTIGO
  bordaConteudo: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    border: `2px solid ${primaryColor}`,
  },

  /* CABECALHO */
  cabecalho: {
    flexDirection: "row",
    padding: "8px",
  },
  cabecalho__logo: {
    width: 80,
  },
  tituloPedido: {
    backgroundColor: primaryColor,
    display: "flex",
    padding: "8px",
    gap: "8px",
    color: "#fff",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  tituloPedido2: {
    display: "flex",
    padding: "8px",
    gap: "8px",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    borderBottom: `1px dashed ${primaryColor}`,
  },
  tituloPedidoLinha1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tituloPedidoLinha2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dados: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    padding: "8px",
    borderBottom: `1px dashed ${primaryColor}`,
  },
  dadosCliente: {
    width: "100%",
  },
  dadosFornecedor: {
    width: "100%",
  },
  dadosTitulo: {
    marginBottom: "8px",
    fontFamily: "Helvetica-Bold",
  },
  linhaTipoFrete: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "8px",
    padding: "8px",
    // borderBottom: `1px dashed ${primaryColor}`
  },
  listagem: {
    padding: `0 ${defaultPadding}`,
  },
  listagemProdutos: { paddingTop: "12px" },
  listagemProdutosHeader: {
    backgroundColor: primaryColor,
    display: "flex",
    flexDirection: "row",
    color: "#fff",
    fontSize: 9,
    fontWeight: "bold",
  },
  headerColuna0: {
    width: widthsColunas.coluna0,
    minWidth: widthsColunas.coluna0,
    maxWidth: widthsColunas.coluna0,
    borderRight: `1px solid #888888`,
    borderLeft: `1px solid #888888`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...estiloListagemHeader,
  },
  headerColuna1: {
    width: widthsColunas.coluna1,
    borderRight: `1px solid #888888`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...estiloListagemHeader,
  },
  headerColuna2: {
    width: widthsColunas.coluna2,
    borderRight: `1px solid #888888`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...estiloListagemHeader,
  },
  headerColuna3: {
    width: widthsColunas.coluna3,
    borderRight: `1px solid #888888`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...estiloListagemHeader,
  },
  listagemProdutosBody: {},
  linhaProduto: {
    display: "flex",
    flexDirection: "row",
    fontSize: 9,
    fontWeight: "bold",
    borderTop: `1px solid #888888`,
    borderBottom: `1px solid #888888`,
  },
  bodyColuna0: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: widthsColunas.coluna0,
    minWidth: widthsColunas.coluna0,
    maxWidth: widthsColunas.coluna0,
    padding: "4px",
    borderLeft: `2px solid #888888`,
    borderRight: `2px solid #888888`,
    ...estiloListagemBody,
  },
  bodyColuna1: {
    width: widthsColunas.coluna1,
    borderRight: `1px solid #888888`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...estiloListagemBody,
  },
  bodyColuna2: {
    width: widthsColunas.coluna2,
    borderRight: `1px solid #888888`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...estiloListagemBody,
  },
  bodyColuna3: {
    width: widthsColunas.coluna3,
    borderRight: `1px solid #888888`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    ...estiloListagemBody,
  },

  linhaTotalObservacoes: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    gap: "8px",
  },
  observacoesContainer: {
    width: "100%",
  },
  observacoesContainerTitulo: {
    fontFamily: "Helvetica-Bold",
    marginBottom: "8px",
    fontSize: 16,
  },
  observacoesContainerTexto: {
    fontSize: 14,
  },
  totalContainer: {
    fontFamily: "Helvetica-Bold",
    fontSize: 12,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: "8px",
  },
  linhaTotalTexto: {},
  pageRodape: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  text: {
    display: "flex",
    flexDirection: "row",
  },
  boldText: {
    fontFamily: "Helvetica-Bold",
  },

  imagem: {
    maxHeight: 60,
    objectFit: "cover",
  },
});

export default styles;
