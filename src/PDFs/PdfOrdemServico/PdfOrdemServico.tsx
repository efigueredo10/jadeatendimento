import { Document, Page, Text, View } from '@react-pdf/renderer';
import styles from './PdfOrdemServico.styles';
import { converterParaReal } from '../../util/valoresMonetarios.util';
import { formatarDataPadraoBrasileiro, obterDataAtual } from '../../util/datas.util';
import type { Servico } from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';

interface Props {
  servicos: Servico[];
}

export const PdfOrdemServico = ({ servicos }: Props) => {
  const criarTextoInfoPedido = (titulo: string, valor: string) => {
    return (
      <View style={styles.text}>
        <Text style={styles.boldText}>{titulo}: </Text>
        <Text>{valor}</Text>
      </View>
    );
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.bordaConteudo}>
          <View style={styles.cabecalho}>
            <View style={styles.cabecalho__logo}>{/* <Image src={logoAtanDistribuidor} /> */}</View>
          </View>
          <View style={styles.tituloPedido}>
            <View style={styles.tituloPedidoLinha1}>
              <Text>PEDIDO: </Text>
              <Text>TIPO: </Text>
              <Text>STATUS: </Text>
            </View>
          </View>
          <View style={styles.tituloPedido2}>
            <View style={styles.tituloPedidoLinha2}>
              <Text>DATA: {formatarDataPadraoBrasileiro('2021-11-11')}</Text>
              <Text>TABELA: </Text>
              <Text>CATEGORIA: </Text>
            </View>
          </View>
          <View style={styles.dados}>
            <View style={styles.dadosCliente}>
              <Text style={styles.dadosTitulo}>CLIENTE</Text>
              <Text>NOME DO CLIENTE</Text>
              {criarTextoInfoPedido('CEP', `1111`)}
              {criarTextoInfoPedido('Bairro', `1111`)}
              {criarTextoInfoPedido('CIDADE', `1111`)}
              {criarTextoInfoPedido('FONE', `1111`)}
              {criarTextoInfoPedido('CNPJ', `1111`)}
              {criarTextoInfoPedido('E-MAIL', `1111`)}
              {criarTextoInfoPedido('REPRESENTANTE', `1111`)}
            </View>
            <View style={styles.dadosFornecedor}>
              <Text style={styles.dadosTitulo}>FORNECEDOR</Text>
              <Text>NOME DO FORNECEDOR</Text>
              {criarTextoInfoPedido('CEP', `1111`)}
              {criarTextoInfoPedido('Bairro', `1111`)}
              {criarTextoInfoPedido('CIDADE', `1111`)}
              {criarTextoInfoPedido('FONE', `111111`)}
              {criarTextoInfoPedido('CNPJ', `1111`)}
              {criarTextoInfoPedido('E-MAIL', `1111`)}
              {criarTextoInfoPedido('IE', `1111`)}
            </View>
          </View>
          <View style={styles.listagemProdutos}>
            <View style={styles.listagemProdutosHeader} fixed={true}>
              <View style={styles.headerColuna0}>
                <Text>IMAGEM</Text>
              </View>
              <View style={styles.headerColuna1}>
                <Text>DESCRIÇÃO</Text>
              </View>
              <View style={styles.headerColuna2}>
                <Text>OBSERVAÇÃO</Text>
              </View>
              <View style={styles.headerColuna3}>
                <Text>VALOR</Text>
              </View>
            </View>
          </View>
          <View style={styles.listagemProdutosBody}>
            {servicos &&
              servicos.map((servico) => (
                <View style={styles.linhaProduto} wrap={false}>
                  <View style={styles.bodyColuna0}>{/* <Image src={servico.imagem} /> */}</View>
                  <View style={styles.bodyColuna1}>
                    <Text>{servico.descricao}</Text>
                  </View>
                  <View style={styles.bodyColuna2}>
                    <Text>{servico.observacao}</Text>
                  </View>
                  <View style={styles.bodyColuna3}>
                    <Text>{servico.valor}</Text>
                  </View>
                </View>
              ))}
          </View>

          <View style={styles.linhaTotalObservacoes}>
            <View style={styles.totalContainer}>
              <Text style={styles.linhaTotalTexto}>Total:</Text>
              <Text style={styles.linhaTotalTexto}>R$ {converterParaReal(1000)}</Text>
            </View>
            <View style={styles.observacoesContainer}>
              <Text style={styles.observacoesContainerTitulo}>Observações</Text>
              {/* <Text>{dados.obs}</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.pageRodape}>
          <Text>Impresso em: {obterDataAtual()}</Text>
        </View>
      </Page>
    </Document>
  );
};
