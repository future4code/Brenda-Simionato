export class Post {
    id: number
    foto: string
    descricao: string
    dataCriacao: Date
    tipo: string


    constructor(id: number, foto: string, descricao: string, dataCriacao: Date, tipo: string) {
        this.id = id
        this.foto = foto
        this.descricao = descricao
        this.dataCriacao = dataCriacao
        this.tipo = tipo

    }
} 