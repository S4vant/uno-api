import SaRepository from "../repository/SaRepository";

export default class GetSa {
    saRepository: SaRepository;

    constructor(saRepository: SaRepository) {
        this.saRepository = saRepository
    }

    execute(idSa: string) {
        return this.saRepository.getSa(idSa);
    }
}