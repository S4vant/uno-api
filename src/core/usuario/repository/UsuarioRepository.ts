import { get } from "http";
import Usuario from "../entity/Usuario";

export default interface UsuarioRepository {
    getUsuario(id: string) : Promise<Usuario>
    createUsuario(id: string, cargo: string, email: string, nome: string, senha: string) : Promise<Usuario>
    getALLUsuario() : Promise<Usuario[]>
    updateUsuario(id: string, email: string, senha: string) : Promise<Usuario>
}