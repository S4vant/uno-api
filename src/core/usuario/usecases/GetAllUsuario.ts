import UsuarioRepository from "../repository/UsuarioRepository";

export default class GetAllUsuario {
    usuarioRepository: UsuarioRepository

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository
    }

    execute() {
        return this.usuarioRepository.getALLUsuario();
    }
}