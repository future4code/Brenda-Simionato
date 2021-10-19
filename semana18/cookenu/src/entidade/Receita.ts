export class Receita {
    id: number
    titulo: string
    descricao: string
    dataCriacao: Date


    constructor(id: number, titulo: string, descricao: string, dataCriacao: Date) {
        this.id = id
        this.titulo = titulo
        this.descricao = descricao
        this.dataCriacao = dataCriacao

    }
}