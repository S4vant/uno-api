import AmostraRepository from "../repository/AmostraRepository";

export default class getAllAmostras {
    amostraRepository: AmostraRepository

    constructor(amostraRepository: AmostraRepository) {
        this.amostraRepository = amostraRepository
    }

    execute() {
        return this.amostraRepository.getAllAmostras();
    }
}