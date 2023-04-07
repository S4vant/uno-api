import UsuarioRepository from "../repository/UsuarioRepository";

export default class CreateUsuario {
    usuarioRepository: UsuarioRepository

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository
    }

    execute(id: string, cargo: string, email: string, nome: string, senha: string) {
        return this.usuarioRepository.createUsuario(id, cargo, email, nome, senha)
    }
}