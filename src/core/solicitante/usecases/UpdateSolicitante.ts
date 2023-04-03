import SolicitanteRepository from "../repository/SolicitanteRepository";

export default class UpdateSolicitante {
  solicitanteRepository: SolicitanteRepository;

  constructor(solicitanteRepository: SolicitanteRepository) {
    this.solicitanteRepository = solicitanteRepository;
  }

  execute(cnpj: string, telefone: string, email: string) {
    return this.solicitanteRepository.updateSolicitante(cnpj, telefone, email);
  }
}
