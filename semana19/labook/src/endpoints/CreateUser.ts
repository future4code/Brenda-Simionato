// import express, { Request, Response } from 'express';
// import cors from 'cors'
// import { User } from '../entity/User';
// import { CadastreRepository } from '../repository/CadastreRepository';

// const app = express();

// app.use(express.json());
// app.use(cors());


// app.post("/cadastre", async (req: Request, res: Response) => {
//     const user = req.body as User

//     if (user != null && user != undefined) {
//         const cadastreRepository = new CadastreRepository()

//         res.status(201).send()
//     } else {
//         res.status(500).send("Erro ao criar cadastro.")
//     }
// })