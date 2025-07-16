export function converterParaReal(valor: number, casasDecimais: number = 2): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: casasDecimais,
    maximumFractionDigits: casasDecimais
  }).format(valor ? valor : 0);
}

export function converterParaDecimal(valor: string): number {
  if (!valor) return 0;

  // Se já está no formato "1234.56" e não contém vírgula, não formata
  if (/^\d+(\.\d+)?$/.test(valor)) {
    return parseFloat(valor);
  }

  // Se está no formato brasileiro "1.234,56", converte
  const valorFormatado = valor.replaceAll('.', '').replaceAll(',', '.');
  return parseFloat(valorFormatado);
}
