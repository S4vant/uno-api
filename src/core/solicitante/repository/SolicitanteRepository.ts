import Solicitante from "../entity/Solicitante";

export default interface SolicitanteRepository {
    getSolicitante(cnpj: string) : Promise<Solicitante>
}