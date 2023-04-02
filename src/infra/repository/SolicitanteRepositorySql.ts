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
}
