import Analise from "../entity/Analise";

export default interface AnaliseRepository {
    getAnalise(id: string) : Promise<Analise>
    createAnalise(id: string, nomeAnalise: string, especificacao: string, dataDeAnalise: string, status: string, amostra: string, amostraId: string, resultado: string) : Promise<Analise>
    getAllAnalises() : Promise<Analise[]>
    updateAnalise(id: string, status: string, resultado: string) : Promise<Analise>
}