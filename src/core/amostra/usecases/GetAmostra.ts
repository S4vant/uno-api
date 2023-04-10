import AmostraRepository from "../repository/AmostraRepository";

export default class GetAmostra {
    amostraRepository: AmostraRepository

    constructor(amostraRepository: AmostraRepository) {
        this.amostraRepository = amostraRepository
    }

    execute(idAmostra: string) {
        return this.amostraRepository.getAmostra(idAmostra);
    }
}