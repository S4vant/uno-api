import Solicitante from "../core/solicitante/entity/Sa";

export default class SaAdapter {
  static create(
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
    /*idAmostra: essa informação vem do cadastro da amostra certo?
    lote: idem
    condicao: idem*/
    informacoesAdicionais: string,
    /*vou deixar a parte do recebimento da amostra para incluir depois*/

  ) {
    return new Sa(
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
      informacoesAdicionais,
    );
  }
}