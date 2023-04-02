import SolicitanteRepository from "../repository/SolicitanteRepository";

export default class CreateSolicitante {
    solicitanteRepository: SolicitanteRepository

    constructor(solicitanteRepository: SolicitanteRepository) {
        this.solicitanteRepository = solicitanteRepository
    }

    execute(cnpj: string, nome: string, cep: string, endereco: string, cidade: string, estado: string, telefone: string, email: string) {
        return this.solicitanteRepository.createSolicitante(cnpj, nome, cep, endereco, cidade, estado, telefone, email)
    }
}