import SaRepository from "../repository/SaRepository";

export default class UpdateSa {
  saRepository: SaRepository;

  constructor(saRepository: SaRepository) {
    this.saRepository = saRepository;
  }

  execute(
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
    descricaoDosServicosContratados: string) 
    
    {
    return this.saRepository.updateSa(
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
        informacoesAdicionais);
  }
}