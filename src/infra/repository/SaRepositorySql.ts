import Sa from "../../core/sa/entity/Sa";
import SaRepository from "../../core/sa/repository/SaRepository";
import SaAdapter from "../../adapters/SaAdapter";
import { prisma } from "../db/prisma";

export default class SaRepositorySql implements SaRepository {
  async getSa(idSa: string): Promise<Sa> {
    const Sa = await prisma.Sa.findUnique({
      where: { idSa },
    });

    if (!sa) throw new Error("SA não encontrada!");

    return SaAdapter.create(
        sa.idSa,
        sa.dataDeAberturaSa,
        sa.dataDeEntradaDosMateriais,
        sa.dataDeConclusaoDaSa,
        sa.prazoDeEntregaAcordado,
        sa.nomeDoSolicitante,
        sa.cepdoSolicitante,
        sa.enderecoDoSolicitante,
        sa.cidadeDoSolicitante,
        sa.estadoDoSolicitante,
        sa.telefoneDoSolicitante,
        sa.emailDoSolicitante,
        sa.vendedorResponsavel,
        sa.emailVendedor,
        sa.tipoDeAnalise,
        sa.descricaoDosServicosContratados,
        sa.item,
        sa.quantidade,
        sa.unidade,
        sa.tipoDeMaterial,
        sa.informacoesAdicionais
    );
  }

  async createSa(
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
    informacoesAdicionais: string ): Promise<Sa> 
    {
    const saExistente = await prisma.sa.findUnique({
      where: { idSa },
    });

    if (saExistente) throw new Error("SA já cadastrada!");

    const Sa = await prisma.sa.create({
      data: {
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
      },
    });

    return SaAdapter.create(
        sa.idSa,
        sa.dataDeAberturaSa,
        sa.dataDeEntradaDosMateriais,
        sa.dataDeConclusaoDaSa,
        sa.prazoDeEntregaAcordado,
        sa.nomeDoSolicitante,
        sa.cepdoSolicitante,
        sa.enderecoDoSolicitante,
        sa.cidadeDoSolicitante,
        sa.estadoDoSolicitante,
        sa.telefoneDoSolicitante,
        sa.emailDoSolicitante,
        sa.vendedorResponsavel,
        sa.emailVendedor,
        sa.tipoDeAnalise,
        sa.descricaoDosServicosContratados,
        sa.item,
        sa.quantidade,
        sa.unidade,
        sa.tipoDeMaterial,
        sa.informacoesAdicionais
    );
  }

  async getAllSas(): Promise<Sa[]> {
    let Sas = await prisma.sa.findMany();
    sas = sas.map((Sa) =>
      SaAdapter.create(
        sa.idSa,
        sa.dataDeAberturaSa,
        sa.dataDeEntradaDosMateriais,
        sa.dataDeConclusaoDaSa,
        sa.prazoDeEntregaAcordado,
        sa.nomeDoSolicitante,
        sa.cepdoSolicitante,
        sa.enderecoDoSolicitante,
        sa.cidadeDoSolicitante,
        sa.estadoDoSolicitante,
        sa.telefoneDoSolicitante,
        sa.emailDoSolicitante,
        sa.vendedorResponsavel,
        sa.emailVendedor,
        sa.tipoDeAnalise,
        sa.descricaoDosServicosContratados,
        sa.item,
        sa.quantidade,
        sa.unidade,
        sa.tipoDeMaterial,
        sa.informacoesAdicionais
      )
    );
    return Sas;
  }

  async updateSa(
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
    descricaoDosServicosContratados: string): Promise<Solicitante> 
    {
    const solicitate = await prisma.solicitante.findUnique({ where: { idSa } });

    if (!sa) throw new Error("SA não encontrada!");

    if (telefoneDoSolicitante.length === 0) telefone = sa.telefoneDoSolicitante;

    if (emailDoSolicitante.length === 0) email = sa.emailDoSolicitante;
    const SaAtualizada = await prisma.Sa.update({
      where: { idSa },
      data: {
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
      },
    });

    return SaAtualizada;
  }
}