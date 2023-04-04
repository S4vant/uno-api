import Analise from "../../core/analise/entity/Analise";
import AnaliseRepository from "../../core/analise/repository/AnaliseRepository";
import AnaliseAdapter from "../../adapters/AnaliseAdapter";
import { prisma } from "../db/prisma";

export default class AnaliseRepositorySql implements AnaliseRepository {
  async getAnalise(id: string): Promise<Analise> {
    const analise = await prisma.analise.findUnique({
      where: { id },
    });

    if (!id) throw new Error("Analise não encontrada!");

    return AnaliseAdapter.create(
      analise.id,
      analise.nomeAnalise,
      analise.especificacao,
      analise.dataDeAnalise,
      analise.status,
      analise.amostra,
      analise.amostraId,
      analise.resultado
    );
  }

  async createAnalise(
    id: string,
    nomeAnalise: string,
    especificacao: string,
    dataDeAnalise: string,
    status: string,
    amostra: string,
    amostraId: string,
    resultado: string
  ): Promise<Analise> {
    const analiseExistente = await prisma.analise.findUnique({
      where: { id },
    });

    if (analiseExistente) throw new Error("Analise já cadastrada!");

    const analise = await prisma.analise.create({
      data: {
        id,
        nomeAnalise,
        especificacao,
        dataDeAnalise,
        status,
        amostra,
        amostraId,
        resultado,
      },
    });

    return AnaliseAdapter.create(
      analise.id,
      analise.nomeAnalise,
      analise.especificacao,
      analise.dataDeAnalise,
      analise.status,
      analise.amostra,
      analise.amostraId,
      analise.resultado
    );
  }

  async getAllAnalises(): Promise<Analise[]> {
    let analises = await prisma.analise.findMany();
    analises = analises.map((analise) =>
      AnaliseAdapter.create(
        analise.id,
        analise.nomeAnalise,
        analise.especificacao,
        analise.dataDeAnalise,
        analise.status,
        analise.amostra,
        analise.amostraId,
        analise.resultado
      )
    );
    return analises;
  }

  async updateAnalise(
    id: string,
    nomeAnalise: string,
    especificacao: string,
    dataDeAnalise: string,
    status: string,
    amostra: string,
    amostraId: string,
    resultado: string
  ): Promise<Analise> {
    const analise = await prisma.analise.findUnique({ where: { id } });

    if (!analise) throw new Error("Analise não encontrada!");

    if (amostra.length === 0) amostra = analise.amostra;

    if (nomeAnalise.length === 0) nomeAnalise = analise.nomeAnalise;

    if (resultado.length === 0) resultado = analise.resultado;

    if (dataDeAnalise.length === 0) dataDeAnalise = analise.dataDeAnalise;

    const analiseAtualizada = await prisma.analise.update({
      where: { id },
      data: {
        nomeAnalise: nomeAnalise,
        especificacao: especificacao,
        dataDeAnalise: dataDeAnalise,
        status: status,
        amostra: amostra,
        amostraId: amostraId,
        resultado: resultado
      },
    });

    return analiseAtualizada;
  }
}
