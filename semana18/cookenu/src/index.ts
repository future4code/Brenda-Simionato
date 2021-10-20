import express, { Request, Response } from 'express';
import cors from 'cors'
import { Cadastro } from './entidade/Cadastro';
import { CadastroRepositorio } from './repositorio/CadastroRepositorio';
import { ReceitaRepositorio } from './repositorio/ReceitaRepositorio';
import { Receita } from './entidade/Receita';
import { Login } from './entidade/Login';
import { Autenticacao } from './servicos/Autenticacao';
import { LoginRepositorio } from './repositorio/LoginRepositorio';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})


app.post("/cadastros", async (req: Request, res: Response) => {
    const cadastro = req.body as Cadastro

    if (cadastro != null && cadastro != undefined) {
        const cadastroRepositorio = new CadastroRepositorio()
        const cadastroCriado = await cadastroRepositorio.cria(cadastro)
        res.status(201).send(cadastroCriado)
    } else {
        res.status(500).send("Erro ao criar cadastro.")
    }
})

app.post("/receitas", async (req: Request, res: Response) => {
    const receita = req.body as Receita

    if (receita != null && receita != undefined) {
        const receitaRepositorio = new ReceitaRepositorio()
        const receitaCriada = await receitaRepositorio.cria(receita)
        res.status(201).send(receitaCriada)
    } else {
        res.status(500).send("Erro ao criar receita.")
    }
})


app.post("/login", async (req: Request, res: Response) => {
  
    const cadastroRepositorio = new CadastroRepositorio() 
    const cadastro = await cadastroRepositorio.buscaPorEmailESenha(req.body.email, req.body.senha)
    
    if(cadastro == null || cadastro == undefined) {
        return res.status(401).send("Credenciais inválidas.")
    }

    const autenticacao = new Autenticacao()
    const token = autenticacao.gerarToken({ id: cadastro.id, email: cadastro.email })
    const loginRepositorio = new LoginRepositorio()

    const login = new Login(cadastro.id, cadastro.email, token, new Date())
    loginRepositorio.cria(login)

    res.send(login)
})
