import express, { Request, Response } from 'express'
import cors from 'cors'

// Aula 44 = APIs REST

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003!')
})

// Exercícios da Tarde:

// - Exercício 1:
type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// Respostas: 
//     A - O método HTTP utilizado para buscar todos os usuários de uma lista deve ser o GET.
app.get("/users", (req: Request, res: Response) => {
    if (req.query.name) {
        const name = req.query.name
        const usersNames = users.filter((user) => {
            return user.name == name
        })
        if (usersNames.length > 0) {
            res.send(usersNames)
        } else {
            res.status(404).send("Nenhum usuário encontrado.")
        }

    } else {
        res.send(users)
    }

})

//     B - A entidade que está sendo manipulada é a type user, que nada mais é do que um objeto.


// - Exercício 2:

// Respostas:
//     A - 
app.get("/users/:type", (req: Request, res: Response) => {
    const type = req.params.type
    if (type != "ADMIN" && type != "NORMAL") {
        res.status(400).send("Tipo de usuário inválido.")
    } else {
        const usersFilters = users.filter((user) => {
            return user.type == type
        })
        res.send(usersFilters)
    }
})

// Através de req.params, utilizando um filter para filtrar somente os tipos desejados.


//     B - Sim, foi necessário somente criar uma erro como resposta para os demais tipos, que não fossem válidos. 


// - Exercício 3:

// Respostas:
//     A - req.query.name (implementado na primeira requisição).

//     B - Implementado na primeira requisição.


// - Exercício 4:

// Respostas:
app.post("/users", (req: Request, res: Response) => {
    // body: {
    // }
    console.log(req.body)

})

//     A -
//     B -