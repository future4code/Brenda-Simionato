import express, { Request, Response } from "express";
import cors from 'cors'
import { User } from "./entity/User";
import connection from "./connection";
import { Product } from "./entity/Product";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})

const createUser = async (user: User): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO User (name, email, age) VALUES ('${user.name}', '${user.email}', '${user.age}')
    `)
    return result[0][0]
}

app.post("/users", async (req: Request, res: Response) => {
    const user = req.body as User

    if (user != null || user != undefined) {
        const createdUser = await createUser(user)
        res.status(201).send(createdUser)
    } else {
        res.status(500).send("Erro ao cadastrar usuário.")
    }
})


const createProduct = async (product: Product): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO User (name, description, price) VALUES ('${product.name}', '${product.description}', '${product.price}')
    `)
    return result[0][0]
}

app.post("/products", async (req: Request, res: Response) => {
    const product = req.body as Product

    if (product != null || product != undefined) {
        const createdProduct = await createProduct(product)
        res.status(201).send(createdProduct)
    } else {
        res.status(500).send("Erro ao cadastrar produto.")
    }
})

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
         SELECT * FROM User WHERE id = ${id}
    `)
    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const usersById = await getUserById(id)
        res.send(usersById)
    } catch (error) {
        res.status(500).send("Erro inesperado.")
    }
})

const getProductById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
         SELECT * FROM Product WHERE id = ${id}
    `)
    return result[0][0]
}

app.get("/products/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const productsById = await getProductById(id)
        res.send(productsById)
    } catch (error) {
        res.status(500).send("Erro inesperado.")
    }
})