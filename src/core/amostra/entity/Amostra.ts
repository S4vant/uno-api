export default class amostra {
  
    idAmostra: string;
    nomeAmostra: string;
    statusAmostra: string;
    dataDeEntrada: string;
    tipo: string;
    notaFiscal: string;
    validade: string;
    solicitacaoDeAnalise: string;
  
    constructor(
        idAmostra: string,
        nomeAmostra: string,
        statusAmostra: string,
        dataDeEntrada: string,
        tipo: string,
        notaFiscal: string,
        validade: string,
        solicitacaoDeAnalise: string
    ) 
    {
  
      this.idAmostra = idAmostra;
      this.nomeAmostra = nomeAmostra;
      this.statusAmostra = statusAmostra;
      this.dataDeEntrada = dataDeEntrada;
      this.tipo = tipo;
      this.notaFiscal = notaFiscal;
      this.validade = validade;
      this.solicitacaoDeAnalise = solicitacaoDeAnalise;
    }
  }
  