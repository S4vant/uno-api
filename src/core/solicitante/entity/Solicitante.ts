export default class Solicitante {
  cnpj: string;
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  email: string;

  constructor(
    cnpj: string,
    nome: string,
    cep: string,
    endereco: string,
    cidade: string,
    estado: string,
    telefone: string,
    email: string
  ) {
    if(cnpj.length !== 14) throw new Error('CNPJ Inválido!');
    if(cep.length !== 8) throw new Error('CEP Inválido!');
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) throw new Error('Email Inválido!');

    this.cnpj = cnpj;
    this.nome = nome;
    this.cep = cep;
    this.endereco = endereco;
    this.cidade = cidade;
    this.estado = estado;
    this.telefone = telefone;
    this.email = email;
  }
}
