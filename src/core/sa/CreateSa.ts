import SaRepository from "../repository/SaRepository";

export default class CreateSa {
    saRepository: SaRepository

    constructor(saRepository: SaRepository) {
        this.saRepository = saRepository
    }

    execute(
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
        informacoesAdicionais: string) 
        {
        return this.saRepository.createSa(
            idSa,
            dataDeAberturaSa,
            dataDeEntradaDosMateriais,
            dataDeConclusaoDaSa,
            prazoDeEntregaAcordado,
            nomeDoSolicitante,
            cepdoSolicitante,
            enderecoDoSolicitante,
            cidadeDoSolicitante,
            estadoDoSolicitante,
            telefoneDoSolicitante,
            emailDoSolicitante,
            vendedorResponsavel,
            emailVendedor,
            tipoDeAnalise,
            descricaoDosServicosContratados,
            item,
            quantidade,
            unidade,
            tipoDeMaterial,
            informacoesAdicionais)
    }
}