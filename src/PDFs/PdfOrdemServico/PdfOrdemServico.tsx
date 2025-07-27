import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import styles from './PdfOrdemServico.styles';
import { obterDataAtual } from '../../util/datas.util';

import headerImg from '../../../public/assets/img/headerJade.png';
import type {
  Cliente,
  OrdemServico,
} from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';
import { converterParaReal } from '../../util/valoresMonetarios.util';

interface Props {
  ordemServico: OrdemServico;
  cliente: Cliente;
}

export const PdfOrdemServico = ({ ordemServico, cliente }: Props) => {
  const criarTextoInfo = (titulo: string, valor: string) => {
    return (
      <View style={styles.text}>
        <Text style={styles.boldText}>{titulo}: </Text>
        <Text>{valor}</Text>
      </View>
    );
  };

  const obterEnderecoFormatado = () => {
    const rua = formatarCampoEndereco(cliente?.endereco?.rua);
    const numero = `${formatarCampoEndereco(
      cliente?.endereco?.numero,
      ', N° '
    )}`;
    const bairro = `${formatarCampoEndereco(cliente?.endereco?.bairro, ', ')}`;
    const complemento = `${formatarCampoEndereco(
      cliente?.endereco?.complemento,
      ', Complemento: '
    )}`;
    return `${rua}${numero}${bairro}${complemento}`;
  };

  const formatarCampoEndereco = (campo: string, prefixo?: string) => {
    return campo ? `${prefixo ? prefixo : ''}${campo}` : '';
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.relativeWrapper}>
          <Image style={styles.headerImagem} src={headerImg} />
        </View>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text>NOTA DE SERVIÇO</Text>
          </View>
        </View>
        <View style={styles.infoCliente}>
          <View style={styles.clienteData}>
            {criarTextoInfo('Cliente', cliente?.infoCliente?.nome)}
            {criarTextoInfo('Data', obterDataAtual())}
          </View>
          {cliente?.infoCliente?.cnpj &&
            criarTextoInfo('CNPJ', cliente?.infoCliente?.cnpj)}
          {cliente?.infoCliente?.cpf &&
            criarTextoInfo('CPF', cliente?.infoCliente?.cpf)}
          {criarTextoInfo('Endereço', obterEnderecoFormatado())}
          {criarTextoInfo('Cidade', cliente?.endereco?.cidade)}
          {criarTextoInfo('Telefone', cliente?.infoCliente?.telefone)}
          {criarTextoInfo('E-mail', cliente?.infoCliente?.email)}
        </View>
        {ordemServico.servicos.length > 0 && (
          <View style={styles.listagem}>
            <View style={styles.listagemProdutos}>
              <View style={styles.listagemProdutosHeader} fixed={true}>
                <View style={styles.headerColuna0}>
                  <Text>SERVIÇO</Text>
                </View>
                <View style={styles.headerColuna1}>
                  <Text>DESCRIÇÃO</Text>
                </View>
                <View style={styles.headerColuna2}>
                  <Text>QTD</Text>
                </View>
                <View style={styles.headerColuna3}>
                  <Text>VALOR</Text>
                </View>
              </View>
            </View>
            <View style={styles.listagemProdutosBody}>
              {ordemServico?.servicos &&
                ordemServico?.servicos.map(servico => (
                  <View
                    key={servico.id}
                    style={styles.linhaProduto}
                    wrap={false}
                  >
                    <View style={styles.bodyColuna0}>
                      <Text>{servico.titulo}</Text>
                    </View>
                    <View style={styles.bodyColuna1}>
                      <Text>{servico.descricao}</Text>
                    </View>
                    <View style={styles.bodyColuna2}>
                      <Text>{servico.quantidade}</Text>
                    </View>
                    <View style={styles.bodyColuna3}>
                      <Text>R$ {converterParaReal(servico.valor)}</Text>
                    </View>
                  </View>
                ))}
            </View>
            <View style={styles.linhaTotalObservacoes}>
              <View style={styles.totalContainer}>
                <Text style={styles.linhaTotalTexto}>Total:</Text>
                <Text style={styles.linhaTotalTexto}>
                  R$ {converterParaReal(ordemServico.total)}
                </Text>
              </View>
              <View style={styles.observacoesContainer}>
                <Text style={styles.observacoesContainerTitulo}>
                  Observações
                </Text>
                {/* <Text>{dados.obs}</Text> */}
              </View>
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
