import Solicitante from "../entity/Sa";

export default interface SaRepository {
    getSa(idSa: string) : Promise<Sa>
    
        createSa(
        idSa: string,
        dataDeAberturaSa: Date,
        dataDeEntradaDosMateriais: Date,
        dataDeConclusaoDaSa: Date,
        prazoDeEntregaAcordado: string,
        nomeDoSolicitante: string,
        cepdoSolicitante: string,
        enderecoDoSolicitante: string,
        cidadeDoSolicitante: string,
        estadoDoSolicitante: string,
        telefoneDoSolicitante: string,
        emailDoSolicitante: string,
        vendedorResponsavel: string,
        emailVendedor: string,
        tipoDeAnalise: string,
        descricaoDosServicosContratados: string,
        item: number,
        quantidade: number,
        unidade: string,
        tipoDeMaterial: string,
        informacoesAdicionais: string,): Promise<Sa>
    
        getAllSas() : Promise<Sa[]>
    
        updateSa(
            dataDeAberturaSa: Date,
            dataDeEntradaDosMateriais: Date,
            dataDeConclusaoDaSa: Date,
            prazoDeEntregaAcordado: string,
            nomeDoSolicitante: string,
            cepdoSolicitante: string,
            enderecoDoSolicitante: string,
            cidadeDoSolicitante: string,
            estadoDoSolicitante: string,
            telefoneDoSolicitante: string,
            emailDoSolicitante: string,
            vendedorResponsavel: string,
            emailVendedor: string,
            tipoDeAnalise: string,
            descricaoDosServicosContratados: string) : Promise<Sa>
}