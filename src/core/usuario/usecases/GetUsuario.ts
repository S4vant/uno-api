import UsuarioRepository from "../repository/UsuarioRepository";

export default class GetUsuario {
    usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository
    }

    execute(id: string) {
        return this.usuarioRepository.getUsuario(id);
    }
}