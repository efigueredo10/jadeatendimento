import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import styles from './PdfOrdemServico.styles';
// import { converterParaReal } from '../../util/valoresMonetarios.util';
// import {
//   formatarDataPadraoBrasileiro,
//   obterDataAtual,
// } from '../../util/datas.util';
import type { ServicoCardProps } from '../../screens/TelaServico/components/ServicoCard/ServicoCard';

import headerImg from '../../../public/assets/img/headerJade.png';
import type { Cliente } from '../../contexts/CriarOrdemServicoContext/CriarOrdemServicoContext';

interface Props {
  servicos: ServicoCardProps[];
  cliente: Cliente;
}

export const PdfOrdemServico = ({ servicos, cliente }: Props) => {
  console.log(servicos);
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
    const cidade = `${formatarCampoEndereco(cliente?.endereco?.cidade, ', ')}`;
    const complemento = `${formatarCampoEndereco(
      cliente?.endereco?.complemento,
      'Complemento: '
    )}`;
    return `${rua}${numero}${bairro}${cidade}${complemento}`;
  };

  const formatarCampoEndereco = (campo: string, prefixo?: string) => {
    console.log(campo);
    console.log(campo == undefined);
    console.log(campo ? `${prefixo}${campo}` : '');
    return campo ? `${prefixo}${campo}` : '';
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image src={headerImg}></Image>
          <Text>NOTA DE SERVIÇO</Text>
        </View>
        <View style={styles.infoCliente}>
          {criarTextoInfo('Cliente', cliente?.infoCliente?.nome)}
          {cliente?.infoCliente?.cnpj &&
            criarTextoInfo('CNPJ', cliente?.infoCliente?.cnpj)}
          {cliente?.infoCliente?.cnpj &&
            criarTextoInfo('CPF', cliente?.infoCliente?.cpf)}
          {criarTextoInfo('Endereço', obterEnderecoFormatado())}
          {criarTextoInfo('Cliente', cliente?.infoCliente?.nome)}
          {criarTextoInfo('Cliente', cliente?.infoCliente?.nome)}
        </View>
      </Page>
    </Document>
  );
};
