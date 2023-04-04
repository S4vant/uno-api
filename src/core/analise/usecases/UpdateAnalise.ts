import AnaliseRepository from "../repository/AnaliseRepository";

export default class UpdateAnalise {
  analiseRepository: AnaliseRepository;

  constructor(analiseRepository: AnaliseRepository) {
    this.analiseRepository = analiseRepository;
  }

  execute(id: string, nomeAnalise: string, especificacao: string, dataDeAnalise: string, status: string, amostra: string, amostraId: string, resultado: string) {
    return this.analiseRepository.updateAnalise(id, nomeAnalise, especificacao, dataDeAnalise, status, amostra, amostraId, resultado);
  }
}
