export default class Analise {
  
  id: string;
  nomeAnalise: string;
  especificacao: string;
  dataDeAnalise: string;
  status: string;
  amostra: string;
  amostraId: string;
  resultado: string;

  constructor(
    id: string,
    nomeAnalise: string,
    especificacao: string,
    dataDeAnalise: string,
    status: string,
    amostra: string,
    amostraId: string,
    resultado: string
  ) {

    this.id = id;
    this.nomeAnalise = nomeAnalise;
    this.especificacao = especificacao;
    this.dataDeAnalise = dataDeAnalise;
    this.status = status;
    this.amostra = amostra;
    this.amostraId = amostraId;
    this.resultado = resultado;
  }
}
