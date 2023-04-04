import AnaliseRepository from "../repository/AnaliseRepository";

export default class CreateAnalise {
    analiseRepository: AnaliseRepository

    constructor(analiseRepository: AnaliseRepository) {
        this.analiseRepository = analiseRepository
    }

    execute(id: string, nomeAnalise: string, especificacao: string, dataDeAnalise: string, status: string, amostra: string, amostraId: string, resultado: string) {
        return this.analiseRepository.createAnalise(id, nomeAnalise, especificacao, dataDeAnalise, status, amostra, amostraId, resultado)
    }
}