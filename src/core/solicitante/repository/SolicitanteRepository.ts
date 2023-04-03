import Solicitante from "../entity/Solicitante";

export default interface SolicitanteRepository {
    getSolicitante(cnpj: string) : Promise<Solicitante>
    createSolicitante(cnpj: string, nome: string, cep: string, endereco: string, cidade: string, estado: string, telefone: string, email: string) : Promise<Solicitante>
    getAllSolicitantes() : Promise<Solicitante[]>
}