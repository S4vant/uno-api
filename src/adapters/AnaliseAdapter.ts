import Analise from "../core/analise/entity/Analise";

export default class AnaliseAdapter {
  static create(
    id: string,
    nomeAnalise: string,
    especificacao: string,
    dataDeAnalise: string,
    status: string,
    amostra: string,
    amostraId: string,
    resultado: string
  ) {
    return new Analise(
      id,
      nomeAnalise,
      especificacao,
      dataDeAnalise,
      status,
      amostra,
      amostraId,
      resultado
    );
  }
}
