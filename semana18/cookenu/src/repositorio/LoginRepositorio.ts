import connection from "../connection"
import { Login } from "../entidade/Login"

export class LoginRepositorio {

    cria = async (login: Login): Promise<any> => {
        const result = await connection.raw(`
            INSERT INTO cookenu_login (email, token, dataCriacao) VALUES ('${login.email}', '${login.token}', '2021-10-20')
        `)
        return result[0][0]
    }
}