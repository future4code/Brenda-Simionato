export class Cadastro {
    id: number
    nome: string
    email: string
    senha: string


    constructor(id: number, nome: string, email: string, senha: string) {
        this.nome = nome
        this.email = email
        this.senha = senha
        this.id = id
    }
}
