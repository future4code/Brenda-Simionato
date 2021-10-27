import app from "./app";
import { Request, Response } from 'express';
import { User } from "./entity/User";
import { CadastreRepository } from "./repository/CadastreRepository"
import { Autenticacao } from "./services/Autenticacao"

// app.post('/users/signup', createUser)
// app.post("/users/login", login)
// app.put('/users', editUser)
// app.post("create", CreateUser.)

app.post("/cadastre", async (req: Request, res: Response) => {
    const user = req.body as User

    if (user != null && user != undefined) {
        const cadastreRepository = new CadastreRepository()
        const createUser = await cadastreRepository.create(user)
        const autenticacao = new Autenticacao()
        const token = autenticacao.gerarToken({ id: createUser.id, email: createUser.email })
        res.status(201).send(token)
    } else {
        res.status(500).send("Erro ao criar cadastro.")
    }
})

