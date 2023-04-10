import AmostraRepository from "../repository/AmostraRepository";

export default class CreateAmostra {
    amostraRepository: AmostraRepository

    constructor(amostraRepository: AmostraRepository) {
        this.amostraRepository = amostraRepository
    }

    execute(idAmostra: string, nomeAmostra: string, statusAmostra: string, dataDeEntrada: string, tipo: string, notaFiscal: string, validade: string, solicitacaoDeAnalise: string) {
        return this.amostraRepository.createAmostra(idAmostra, nomeAmostra, statusAmostra, dataDeEntrada, tipo, notaFiscal, validade, solicitacaoDeAnalise)
    }
}