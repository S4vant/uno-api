export default class Usuario {

    id: string;
    cargo: string;
    email: string;
    nome: string;
    senha: string;

    constructor(
        id: string,
        cargo: string,
        email: string,
        nome: string,
        senha: string,
    ){

        this.id = id;
        this.cargo = cargo;
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }
}
