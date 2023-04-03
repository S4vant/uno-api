import Solicitante from "../../core/solicitante/entity/Solicitante";
import SolicitanteRepository from "../../core/solicitante/repository/SolicitanteRepository";
import SolicitanteAdapter from "../../adapter/SolicitanteAdapter";
import { prisma } from "../db/prisma";

export default class SolicitanteRepositorySql implements SolicitanteRepository {
  async getSolicitante(cnpj: string): Promise<Solicitante> {
    const solicitante = await prisma.solicitante.findUnique({
      where: { cnpj },
    });

    if (!solicitante) throw new Error("Solicitante não encontrado!");

    return SolicitanteAdapter.create(
      solicitante.cnpj,
      solicitante.nome,
      solicitante.cep,
      solicitante.endereco,
      solicitante.cidade,
      solicitante.estado,
      solicitante.telefone,
      solicitante.email
    );
  }

  async createSolicitante(
    cnpj: string,
    nome: string,
    cep: string,
    endereco: string,
    cidade: string,
    estado: string,
    telefone: string,
    email: string
  ): Promise<Solicitante> {
    const solicitanteExistente = await prisma.solicitante.findUnique({
      where: { cnpj },
    });

    if (solicitanteExistente) throw new Error("CNPJ já cadastrado!");

    const solicitante = await prisma.solicitante.create({
      data: {
        cnpj,
        nome,
        cep,
        endereco,
        cidade,
        estado,
        telefone,
        email,
      },
    });

    return SolicitanteAdapter.create(
      solicitante.cnpj,
      solicitante.nome,
      solicitante.cep,
      solicitante.endereco,
      solicitante.cidade,
      solicitante.estado,
      solicitante.telefone,
      solicitante.email
    );
  }

  async getAllSolicitantes(): Promise<Solicitante[]> {
    let solicitantes = await prisma.solicitante.findMany();
    solicitantes = solicitantes.map(solicitante => SolicitanteAdapter.create(solicitante.cnpj, solicitante.nome, solicitante.cep, solicitante.endereco, solicitante.cidade, solicitante.estado, solicitante.telefone, solicitante.email));
    return solicitantes;
  }
}
