import express, { Request, Response } from "express";
import { connection } from "./connection";
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})

type user = {
    id: number,
    name: string,
    nickname: string,
    email: string
}

const createUser = async (user: user): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO User (name, nickname, email) VALUES ('${user.name}', '${user.nickname}', '${user.email}')
    `)
    return result[0][0]
}

app.post("/users", async (req: Request, res: Response) => {
    const user = req.body as user

    if (user != null || user != undefined) {
        const createdUser = await createUser(user)
        res.status(201).send(createdUser)
    } else {
        res.status(500).send("Erro ao cadastrar usuário.")
    }
})

const getUserById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
         SELECT * FROM user WHERE id = ${id}
    `)
    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const usersById = await getUserById(id)
        res.send(usersById)
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro inesperado.")
    }
})

const editUser = async (user: user): Promise<any> => {
    const result = await connection.raw(`
        UPDATE User SET name = '${user.name}' AND nickname = '${user.nickname}' WHERE id = ${user.id}
    `)
    return result[0][0]
}

app.put("/users/edit/:id", async (req: Request, res: Response) => {
    const user = req.body as user
    user.id = Number(req.params.id)

    if (user != null || user != undefined) {
        const uptadedUser = await editUser(user)
        res.status(200).send(uptadedUser)
    } else {
        res.status(500).send("Erro ao editar usuário.")
    }
})

type task = {
    tittle: string,
    description: string,
    limiteDate: string,
    creatorUserId: string
}

app.post("/task", (req: Request, res: Response) => {
    const task = req.body as task

    if (task != null || task != undefined) {
        res.status(201).send("Tarefa cadastrada com sucesso.")
    } else {
        res.status(500).send("Erro ao cadastrar nova tarefa.")
    }
})