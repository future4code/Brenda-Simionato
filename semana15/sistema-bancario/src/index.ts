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

app.post("/contas", (req: Request, res: Response) => {
    const conta = req.body as conta
    const comparaConta = contas.find((c) => {
        return conta.cpf == c.cpf
    })
    console.log(comparaConta)
    if (comparaConta == null || comparaConta == undefined) {
        contas.push(conta)
        res.status(201).send("Conta criada.")
    } else {
        res.status(400).send("CPF já cadastrado.")
    }
})

let contas: conta[] = []



app.get("/contas/saldo", (req: Request, res: Response) => {
    const nome = req.query.nome
    const cpf = req.query.cpf

    const conta = contas.find((conta) => {
        return conta.nome == nome && conta.cpf == cpf
    })
    if (conta != null && conta != undefined) {
        res.send(conta.saldo)
    } else {
        res.status(404).send("Não encontrada conta com esses dados.")
    }
})


app.post("/contas/saldo", (req: Request, res: Response) => {
    const nome = req.query.nome
    const cpf = req.query.cpf
    const saldo = Number(req.body.saldo)

    const conta = contas.find((conta) => {
        return conta.nome == nome && conta.cpf == cpf
    })
    if (conta != null && conta != undefined) {
        conta.saldo = Number(conta.saldo) + saldo
        console.log(conta)
        res.status(200).send("O seu novo saldo é: " + conta.saldo)
    } else {
        res.status(404).send("Não encontrada conta com esses dados.")
    }
})
