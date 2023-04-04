import AnaliseRepository from "../repository/AnaliseRepository";

export default class GetAllAnalises {
    analiseRepository: AnaliseRepository

    constructor(analiseRepository: AnaliseRepository) {
        this.analiseRepository = analiseRepository
    }

    execute() {
        return this.analiseRepository.getAllAnalises();
    }
}