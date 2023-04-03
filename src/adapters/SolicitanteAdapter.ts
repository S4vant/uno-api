import Solicitante from "../core/solicitante/entity/Solicitante";

export default class SolicitanteAdapter {
  static create(
    cnpj: string,
    nome: string,
    cep: string,
    endereco: string,
    cidade: string,
    estado: string,
    telefone: string,
    email: string
  ) {
    return new Solicitante(
      cnpj,
      nome,
      cep,
      endereco,
      cidade,
      estado,
      telefone,
      email
    );
  }
}
