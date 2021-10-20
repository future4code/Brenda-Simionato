export class Login {
    cadastroId: number
    email: string
    token: string
    dataCriacao: Date


    constructor(cadastroId: number, email: string, token: string, dataCriacao: Date) {
        this.cadastroId = cadastroId
        this.email = email
        this.token = token
        this.dataCriacao = dataCriacao

    }
}