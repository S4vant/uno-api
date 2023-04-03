import SolicitanteRepository from "../repository/SolicitanteRepository";

export default class GetAllSolicitantes {
    solicitanteRepository: SolicitanteRepository

    constructor(solicitanteRepository: SolicitanteRepository) {
        this.solicitanteRepository = solicitanteRepository
    }

    execute() {
        return this.solicitanteRepository.getAllSolicitantes();
    }
}