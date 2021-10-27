import { connection } from "../connection"
import { User } from "../entity/User"

export class CadastreRepository {

    create = async (user: User): Promise<any> => {
        const result = await connection.raw(`

             INSERT INTO labook_cadastre (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}')
        `)
        return result[0][0]
    }
}