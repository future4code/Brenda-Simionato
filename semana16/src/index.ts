import express, { Request, Response } from "express";
import { connection } from "./connection";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})

//RAW permite que enviemos uma query para o banco usando a linguagem SQL diretamente, template strings são usadas normalmente para montar as queries da raw, pois isso permite quebrar linhas e acessar variáveis do código.

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

app.get("/actors/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        const actors = await getActorByName(name)
        res.send(actors)
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro inesperado")
    }
})

const countActorForGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT count(*) AS quantidade FROM Actor WHERE gender = '${gender}'
    `)
    return result[0][0]
}