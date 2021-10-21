import express, { Request, Response } from "express";
import cors from 'cors'
import { User } from "./entity/User";
import connection from "./connection";
import { Product } from "./entity/Product";
import { Trip } from "./entity/Trip";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})

const createUser = async (user: User): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO User (name, email, age) VALUES ('${user.name}', '${user.email}', ${user.age})
    `)
    return result[0][0]
}

app.post("/users", async (req: Request, res: Response) => {
    const user = req.body as User

    if (user != null && user != undefined) {
        const createdUser = await createUser(user)
        res.status(201).send(createdUser)
    } else {
        res.status(500).send("Erro ao cadastrar usuário.")
    }
})


const createProduct = async (product: Product): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO Product (name, description, price) VALUES ('${product.name}', '${product.description}', ${product.price})
    `)
    return result[0][0]
}

app.post("/products", async (req: Request, res: Response) => {
    const product = req.body as Product

    if (product != null && product != undefined) {
        const createdProduct = await createProduct(product)
        res.status(201).send(createdProduct)
    } else {
        res.status(500).send("Erro ao cadastrar produto.")
    }
})

const getUsers = async (): Promise<any> => {
    const result = await connection.raw(`
         SELECT * FROM User 
    `)
    return result[0][0]
}

app.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await getUsers()
        res.send(users)
    } catch (error) {
        res.status(500).send("Erro inesperado.")
    }
})

const getProducts = async (): Promise<any> => {
    const result = await connection.raw(`
         SELECT * FROM Product 
    `)
    return result[0][0]
}

app.get("/products", async (req: Request, res: Response) => {
    try {
        const products = await getProducts()
        res.send(products)
    } catch (error) {
        res.status(500).send("Erro inesperado.")
    }
})


const createTrip = async (trip: Trip): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO Trip (name, description, price, origin, destination) VALUES ('${trip.name}', '${trip.description}', ${trip.price}, '${trip.origin}', '${trip.destination}')
    `)
    return result[0][0]
}

app.post("/trips", async (req: Request, res: Response) => {
    const trips = req.body as Trip

    if (trips != null && trips != undefined) {
        const createdTrip = await createTrip(trips)
        res.status(201).send(createdTrip)
    } else {
        res.status(500).send("Erro ao cadastrar nova viagem.")
    }
})

const getTrips = async (): Promise<any> => {
    const result = await connection.raw(`
         SELECT * FROM Trip
    `)
    return result[0][0]
}

app.get("/trips", async (req: Request, res: Response) => {
    try {
        const trips = await getTrips()
        res.send(trips)
    } catch (error) {
        res.status(500).send("Erro inesperado.")
    }
})