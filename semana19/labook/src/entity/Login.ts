export class Login {
    id: number
    email: string
    token: string
    dataCriacao: Date


    constructor(id: number, email: string, token: string, dataCriacao: Date) {
        this.id = id
        this.email = email
        this.token = token
        this.dataCriacao = dataCriacao

    }
} 