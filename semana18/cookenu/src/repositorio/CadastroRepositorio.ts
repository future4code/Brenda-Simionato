import connection from "../connection"
import { Cadastro } from "../entidade/Cadastro"

export class CadastroRepositorio {

    cria = async (cadastro: Cadastro): Promise<any> => {
        const result = await connection.raw(`
            INSERT INTO cookenu_cadastro (nome, email, senha) VALUES ('${cadastro.nome}', '${cadastro.email}', '${cadastro.senha}')
        `)
        return result[0][0]
    }

    buscaPorEmailESenha = async (email: string, senha: string): Promise<any> => {
        const result = await connection.raw(`

            SELECT * FROM cookenu_cadastro WHERE email = '${email}' AND senha = '${senha}'
        `)
        return result[0][0]
    }


    buscaPorId = async (id: number): Promise<any> => {
        const result = await connection.raw(`

            SELECT * FROM cookenu_cadastro WHERE id = ${id}
        `)
        return result[0][0]
    }

}