export default class Sa {
    idSa: string;
    dataDeAberturaSa: Date;
    dataDeEntradaDosMateriais: Date;
    dataDeConclusaoDaSa: Date;
    prazoDeEntregaAcordado: string;
    nomeDoSolicitante: string;
    cepdoSolicitante: string;
    enderecoDoSolicitante: string;
    cidadeDoSolicitante: string;
    estadoDoSolicitante: string;
    telefoneDoSolicitante: string;
    emailDoSolicitante: string;
    vendedorResponsavel: string;
    emailVendedor: string;
    tipoDeAnalise: string;
    descricaoDosServicosContratados: string;
    item: number;
    quantidade: number;
    unidade: string;
    tipoDeMaterial: string;
    informacoesAdicionais: string;
  
    constructor(
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
        informacoesAdicionais: string,
    ) {

        this.idSa = Sa,
        this.dataDeAberturaSa = dataDeAberturaSa,
        this.dataDeEntradaDosMateriais = dataDeEntradaDosMateriais,
        this.dataDeConclusaoDaSa = dataDeConclusaoDaSa,
        this.prazoDeEntregaAcordado = prazoDeEntregaAcordado,
        this.nomeDoSolicitante = nomeDoSolicitante,
        this.cepdoSolicitante = cepdoSolicitante,
        this.enderecoDoSolicitante = enderecoDoSolicitante,
        this.cidadeDoSolicitante = cidadeDoSolicitante,
        this.estadoDoSolicitante = estadoDoSolicitante,
        this.telefoneDoSolicitante = telefoneDoSolicitante,
        this.emailDoSolicitante = emailDoSolicitante,
        this.vendedorResponsavel = vendedorResponsavel,
        this.emailVendedor = emailVendedor,
        this.tipoDeAnalise = tipoDeAnalise,
        this.descricaoDosServicosContratados = descricaoDosServicosContratados,
        this.item = item,
        this.quantidade = quantidade,
        this.unidade = unidade,
        this.tipoDeMaterial = tipoDeMaterial,
        this.informacoesAdicionais = informacoesAdicionais
    }
  }