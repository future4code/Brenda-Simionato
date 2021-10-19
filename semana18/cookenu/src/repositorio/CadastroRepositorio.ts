import connection from "../connection"
import { Cadastro } from "../entidade/Cadastro"

export class CadastroRepositorio {

    cria = async (cadastro: Cadastro): Promise<any> => {
        const result = await connection.raw(`
            INSERT INTO cookenu_cadastro (nome, email, senha) VALUES ('${cadastro.nome}', '${cadastro.email}', '${cadastro.senha}')
        `)
        return result[0][0]
    }
}