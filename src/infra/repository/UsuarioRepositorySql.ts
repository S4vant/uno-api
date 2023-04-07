import Usuario from "../../core/usuario/entity/Usuario";
import UsuarioRepository from "../../core/usuario/repository/UsuarioRepository";
import UsuarioAdapter from "../../adapters/UsuarioAdapter";
import { prisma } from "../db/prisma";

export default class UsuarioRepositorySql implements UsuarioRepository {
    async getUsuario(id: string): Promise<Usuario> {
        const usuario = await prisma.usuario.findUnique({
            where: { id },
        });

        if (!id) throw new Error("Usuario não encontrado!");

        return UsuarioAdapter.create(
            usuario.id,
            usuario.cargo,
            usuario.email,
            usuario.nome,
            usuario.senha
        );
    }

    async createUsuario(
        id: string,
        cargo: string,
        email: string,
        nome: string,
        senha: string
    ): Promise<Usuario> {
        const usuarioExistente = await prisma.usuario.findUnique({
            where: { id },
        });

        if (usuarioExistente) throw new Error("Usuário já cadastrado!");

        const usuario = await prisma.usuario.create({
            data: {
                id,
                cargo,
                email,
                nome,
                senha
            },
        });
        return UsuarioAdapter.create(
            usuario.id,
            usuario.cargo,
            usuario.email,
            usuario.nome,
            usuario.senha
        );
    }

    async getALLUsuario(): Promise<Usuario[]> {
        let usuario = await prisma.usuario.findMany();
        usuario = usuario.map((usuario) =>
            UsuarioAdapter.create(
                usuario.id,
                usuario.cargo,
                usuario.email,
                usuario.nome,
                usuario.senha
            )
        );
        return usuario;
    }

    async updateUsuario(
        id: string,
        email: string,
        senha: string
    ): Promise<Usuario> {
        const usuario = await prisma.usuario.findUnique({
            where: { id }
        });

        if (!usuario) throw new Error("Usuário não!");

        if (email.length === 0) email = usuario.email;

        if (senha.length === 0) senha = usuario.senha;

        const usuarioAtualizado = await prisma.usuario.update({
            where: { id },
            data: {
              status: email,
              resultado: senha
            },
          });
      
          return usuarioAtualizado;
        }
      }