import express, { Request, Response } from 'express';
import cors from 'cors'
import { Cadastre } from '../entity/Cadastre';
import { CadastreRepository } from '../repository/CadastreRepository';

const app = express();

app.use(express.json());
app.use(cors());


app.post("/cadastre", async (req: Request, res: Response) => {
    const cadastre = req.body as Cadastre

    if (cadastre != null && cadastre != undefined) {
        const cadastreRepository = new CadastreRepository()

        res.status(201).send()
    } else {
        res.status(500).send("Erro ao criar cadastro.")
    }
})