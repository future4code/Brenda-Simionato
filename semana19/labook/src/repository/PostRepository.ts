import { connection } from "../connection"
import { Post } from "../entity/Post"

export class PostRepository {

    create = async (post: Post): Promise<any> => {
        const result = await connection.raw(`

             INSERT INTO labook_post (foto, descricao, dataCriacao, tipo) VALUES ('${post.foto}', '${post.descricao}', ${post.dataCriacao}, '${post.tipo}')
        `)
        return result[0][0]
    }

    buscaPorId = async (id: number): Promise<any> => {
        const result = await connection.raw(`
            SELECT * FROM labook_post WHERE id = ${id}
        `)
        return result[0][0]
    }

    
}