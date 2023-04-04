import AnaliseRepository from "../repository/AnaliseRepository";

export default class GetAnalise {
    analiseRepository: AnaliseRepository;

    constructor(analiseRepository: AnaliseRepository) {
        this.analiseRepository = analiseRepository
    }

    execute(id: string) {
        return this.analiseRepository.getAnalise(id);
    }
}