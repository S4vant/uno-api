import Amostra from "../core/amostra/entity/Amostra";

export default class AmostraAdapter {
  static create(
    idAmostra: string,
    nomeAmostra: string,
    statusAmostra: string,
    dataDeEntrada: string,
    tipo: string,
    notaFiscal: string,
    validade: string,
    solicitacaoDeAnalise: string,

    
  ) {
    return new Amostra(
        idAmostra,
        nomeAmostra,
        statusAmostra,
        dataDeEntrada,
        tipo,
        notaFiscal,
        validade,
        solicitacaoDeAnalise);
  }
}