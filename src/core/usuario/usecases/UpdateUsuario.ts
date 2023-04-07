import UsuarioRepository from "../repository/UsuarioRepository";

export default class UpadateUsuario {
    usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    execute(id: string, email: string, senha: string) {
        return this.usuarioRepository.updateUsuario(id, email, senha);
    }
}