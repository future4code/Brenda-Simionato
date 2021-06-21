/*Exercícios de interpretação de código:

Exercício 1.
Resposta:
A) Matheus Nachtergaele
Virginia Cavendish
Object [1]
Canal: Globo
Horário: 14h


Exercício 2.
Resposta: 
A) Nome: "Juca", idade: 3, raça: "SRD"
Nome: "Juca", idade: 3, raça: "SRD"
Nome: "Juca", idade: 3, raça: "SRD"

B) A sintaxe dos três pontos faz com que seja clonado o objeto, 
para poder ser alterado os dados posteriormente.


Exercício 3.
Resposta:
A) False
Underfined

B) A função tem parametros declarados objetos e pessoas, que no console, são
respectivamente substituidos por pessoa e backender e pessoa e altura, 
backender foi declarado como false e altura não está definida em propriedade, 
por isso, o underfined. 


Exercícios de escrita de código:

Exercício 1.
Resposta:*/

/*A) const pessoa = {
    nome: "Brenda",
    apelidos: ["Bren", "Brendinha", "Bre"]
}

const dados = (pessoa) => {
    console.log (`Eu sou ${pessoa.nome} , mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
}

dados(pessoa)


B) const novaPessoa = {
    ...pessoa, apelidos: ["apelido1", "apelido2", "apelido3"]
}

dados(novaPessoa)


Exercício 2.
Resposta:

A)
const primeiraPessoa = {
    nome: "Luiz Paulo",
    idade: 30,
    profissao: "Desenvolvedor Especialista"

}

const segundaPesssoa = {
    nome: "Brenda Evellyn",
    idade: 24,
    profissao: "Estudante"

}

const minhaFuncao = (pessoa) => {
    console.log([pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length])
}

B) minhaFuncao(primeiraPessoa)
minhaFuncao(segundaPesssoa)


Exercício 3.
Resposta:

A) let carrinho = []

B) const frutasSacolao = {
    nome: "Melancia",
    disponibilidade: true
}

const frutasSacolao2 = {
    nome: "Morango",
    disponibilidade: true
}

const frutasSacolao3 = {
    nome: "Melão",
    disponibilidade: false
}

C) const compras = (frutas) => {
    carrinho.push(frutas)
}

compras(frutasSacolao)
compras(frutasSacolao2)
compras(frutasSacolao3)

D) console.log(carrinho)*/
