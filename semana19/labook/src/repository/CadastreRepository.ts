import { connection } from "../connection"
import { Cadastre } from "../entity/Cadastre"

export class CadastreRepository {

    create = async (cadastre: Cadastre): Promise<any> => {
        const result = await connection.raw(`

             INSERT INTO labook_cadastre (name, email, password) VALUES ('${cadastre.name}', '${cadastre.email}', '${cadastre.password}')
        `)
        return result[0][0]
    }
}