export const obterDataAtual = () => {
  const data = new Date();
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// Formatos existentes
const regex1 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/; // ISO completo
const regex2 = /^(\d{4})-(\d{2})-(\d{2})$/; // yyyy-MM-dd
const regex3 = /^(\d{2})\/(\d{2})\/(\d{4})$/; // dd/MM/yyyy
const regex4 = /^(\d{4})(\d{2})(\d{2})$/; // yyyyMMdd

export function formatarDataPadraoBrasileiro(valor: string): string {
  if (!valor) return '';

  if (String(valor).match(regex1)) {
    const data = new Date(valor);
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${dia}/${mes}/${ano}`;
  }

  if (String(valor).match(regex2)) {
    const [_, ano, mes, dia] = String(valor).match(regex2)!;
    return `${dia}/${mes}/${ano}`;
  }

  if (String(valor).match(regex3)) {
    return valor; // Já está no formato desejado
  }

  if (String(valor).match(regex4)) {
    const [_, ano, mes, dia] = String(valor).match(regex4)!;
    return `${dia}/${mes}/${ano}`;
  }

  return '';
}
