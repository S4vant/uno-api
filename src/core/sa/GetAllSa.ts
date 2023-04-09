import SaRepository from "../repository/SaRepository";

export default class GetAllSas {
    saRepository: SaRepository

    constructor(saRepository: SaRepository) {
        this.saRepository = saRepository
    }

    execute() {
        return this.saRepository.getAllSas();
    }
}