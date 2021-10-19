import express, { Request, Response } from 'express';
import cors from 'cors'
import connection from './connection';


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})