import Amostra from "../../core/amostra/entity/Amostra";
import AmostraRepository from "../../core/amostra/repository/AmostraRepository";
import AmostraAdapter from "../../adapters/AmostraAdapter";
import { prisma } from "../db/prisma";

export default class AmostraRepositorySql implements AmostraRepository {
  async getAmostra(idAmostra: string): Promise<Amostra> {
    const amostra = await prisma.amostra.findUnique({
      where: { idAmostra },
    });

    if (!amostra) throw new Error("Amostra não encontrado!");

    return AmostraAdapter.create(
      amostra.idAmostra,
      amostra.nomeAmostra,
      amostra.statusAmostra,
      amostra.dataDeEntrada,
      amostra.tipo,
      amostra.notaFiscal,
      amostra.validade,
      amostra.solicitacaoDeAnalise
    );
  }

  async createAmostra(
    idAmostra: string,
    nomeAmostra: string,
    statusAmostra: string,
    dataDeEntrada: string,
    tipo: string,
    notaFiscal: string,
    validade: string,
    solicitacaoDeAnalise: string,
  ): Promise<Amostra> {
    const AmostraExistente = await prisma.Amostra.findUnique({
      where: { idAmostra },
    });

    if (AmostraExistente) throw new Error("CNPJ já cadastrado!");

    const Amostra = await prisma.Amostra.create({
      data: {
        idAmostra,
        nomeAmostra,
        statusAmostra,
        dataDeEntrada,
        tipo,
        notaFiscal,
        validade,
        solicitacaoDeAnalise,
      },
    });

    return AmostraAdapter.create(
      Amostra.idAmostra,
      Amostra.nomeAmostra,
      Amostra.statusAmostra,
      Amostra.dataDeEntrada,
      Amostra.tipo,
      Amostra.notaFiscal,
      Amostra.validade,
      Amostra.solicitacaoDeAnalise
    );
  }

  async getAllAmostras(): Promise<Amostra[]> {
    let Amostras = await prisma.Amostra.findMany();
    Amostras = Amostras.map((Amostra) =>
      AmostraAdapter.create(
        Amostra.idAmostra,
        Amostra.nomeAmostra,
        Amostra.statusAmostra,
        Amostra.dataDeEntrada,
        Amostra.tipo,
        Amostra.notaFiscal,
        Amostra.validade,
        Amostra.solicitacaoDeAnalise
      )
    );
    return Amostras;
  }

  async updateAmostra(
    idAmostra: string,
    nomeAmostra: string,
    statusAmostra: string,
    dataDeEntrada: string,
    tipo: string,
    notaFiscal: string,
    validade: string,
    solicitacaoDeAnalise: string,
  ): Promise<Amostra> {
    const amostra = await prisma.Amostra.findUnique({ where: { idAmostra } });

    if (!amostra) throw new Error("Amostra não encontrado!");

    if (nomeAmostra.length === 0) nomeAmostra = amostra.nomeAmostra;
    if (statusAmostra.length === 0) statusAmostra = amostra.statusAmostra;
    if (dataDeEntrada.length === 0) dataDeEntrada = amostra.dataDeEntrada;
    if (tipo.length === 0) tipo = amostra.tipo;
    if (notaFiscal.length === 0) notaFiscal = amostra.notaFiscal;
    if (validade.length === 0) validade = amostra.validade;
    if (solicitacaoDeAnalise.length === 0) solicitacaoDeAnalise = amostra.solicitacaoDeAnalise;

   
    const AmostraAtualizado = await prisma.Amostra.update({
      where: { idAmostra },
      data: {
        nomeAmostra: nomeAmostra,
        statusAmostra: statusAmostra,
        dataDeEntrada: dataDeEntrada,
        tipo: tipo,
        notaFiscal: notaFiscal,
        validade: validade,
        solicitacaoDeAnalise: solicitacaoDeAnalise,
      },
    });

    return AmostraAtualizado;
  }
}
