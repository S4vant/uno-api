import SolicitanteRepository from "../repository/SolicitanteRepository";

export default class GetSolicitante {
    solicitanteRepository: SolicitanteRepository;

    constructor(solicitanteRepository: SolicitanteRepository) {
        this.solicitanteRepository = solicitanteRepository
    }

    execute(cnpj: string) {
        return this.solicitanteRepository.getSolicitante(cnpj);
    }
}