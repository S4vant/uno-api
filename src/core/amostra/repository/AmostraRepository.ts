import Amostra from "../entity/Amostra";

export default interface AnaliseRepository {
    getAmostra(idAmostra: string) : Promise<Amostra>
    createAmostra(idAmostra: string, nomeAmostra: string, statusAmostra: string, dataDeEntrada: string, tipo: string, notaFiscal: string, validade: string, solicitacaoDeAnalise: string) : Promise<Amostra>
    getAllAmostras() : Promise<Amostra[]>
    updateAmostra(idAmostra: string, nomeAmostra: string, statusAmostra: string, dataDeEntrada: string, tipo: string, notaFiscal: string, validade: string, solicitacaoDeAnalise: string) : Promise<Amostra>
}