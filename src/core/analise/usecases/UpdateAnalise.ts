import AnaliseRepository from "../repository/AnaliseRepository";

export default class UpdateAnalise {
  analiseRepository: AnaliseRepository;

  constructor(analiseRepository: AnaliseRepository) {
    this.analiseRepository = analiseRepository;
  }

  execute(id: string, status: string, resultado: string) {
    return this.analiseRepository.updateAnalise(id, status, resultado);
  }
}
