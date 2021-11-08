import app from "./app";
import { Request, Response } from 'express';
import { User } from "./entity/User";
import { CadastreRepository } from "./repository/CadastreRepository"
import { Autenticacao } from "./services/Autenticacao"
import { PostRepository } from './repository/PostRepository'
import { Post } from './entity/Post'

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

app.post("/login", async (req: Request, res: Response) => {

    const cadastroRepositorio = new CadastreRepository()

    const user = await cadastroRepositorio.buscaPorEmailESenha(req.body.email, req.body.senha)

    if (user == null || user == undefined) {
        return res.status(401).send("Credenciais inválidas.")
    }

    const autenticacao = new Autenticacao()
    const token = autenticacao.gerarToken({ id: user.id, email: user.email })

    res.send(token)
})

app.post("/post", async (req: Request, res: Response) => {
    const post = req.body as Post

    if (post != null && post != undefined) {
        const postRepository = new PostRepository()
        if (post.tipo != "normal" && post.tipo != "evento") {
            return res.status(400).send("Tipo inválido.")
        }
        const createPost = await postRepository.create(post)
        res.status(201).send(createPost)
    } else {
        res.status(500).send("Erro ao criar post.")
    }
})

app.get("post/:id", async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const postRespository = new PostRepository()
    const post = postRespository.buscaPorId(id)

    return res.status(200).send(post)

})

