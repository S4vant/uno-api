import Usuario from "../core/usuario/entity/Usuario";

export default class UsuarioAdapter {
    static create(
        id: string,
        cargo: string,
        email: string,
        nome: string,
        senha: string
    ){
        return new Usuario(
            id,
            cargo,
            email,
            nome,
            senha
        );
    }
}