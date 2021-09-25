import express, { Request, Response } from 'express'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003!')
})


type conta = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extratos: extrato[]
}

type extrato = {
    valor: number,
    data: string,
    descricao: string
}

app.post("/usuarios", (req: Request, res: Response) => {
    const conta = req.body as conta
    const comparaConta = contas.find((c) => {
        return conta.cpf == c.cpf
    })
    if (comparaConta != null || comparaConta != undefined) {
        contas.push(conta)
        res.status(201).send("Conta criada.")
    } else {
        res.status(400).send("CPF já cadastrado.")
    }
})

let contas: conta[] = []

