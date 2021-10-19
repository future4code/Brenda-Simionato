import connection from "../connection"
import { Receita } from "../entidade/Receita"

export class ReceitaRepositorio {

    cria = async (receita: Receita): Promise<any> => {
        const result = await connection.raw(`
            INSERT INTO cookenu_receita (titulo, descricao, dataCriacao) VALUES ('${receita.titulo}', '${receita.descricao}', '${new Date()}')
        `)
        return result[0][0]
    }
}