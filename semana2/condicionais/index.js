/* Exercícios de interpretação de código:
Exercício 1.
Resposta:
A) O código verifica se o número escolhido é divisível por 2 e com resultado igual a 0,
ou seja, verifica se o número escolhido pelo usuário é par.

B) Números pares.

C) Números ímpares.


Exercício 2. 
Resposta:
A) O código acima serve para facilitar na hora de buscar os preços das frutas.

B) "O preço da fruta, Maça, é R$ 2.25."

C) "O preço da fruta Pêra é R$ 5."


Exercício 3.
Resposta:
A) A primeira linha está perguntando um número ao usuário.

B) 10 : "Esse número passou no teste." / "Mensagem is not defined."
- 10 : "Mensagem is not defined."

C) Sim. A variável mensagem se encontra dentro do escopo "if", sendo inacessível
fora desse escopo. 


Exercícios de escrita de código:

Exercício 1.
Resposta:*/
/*const idadeUsuario = Number(prompt("Qual a sua idade?"))

const idadeDirigir = (idade) => {
    if (idade >= 18) {
        console.log("Você pode dirigir.")
    } else {
        console.log("Você não pode dirigir.")
    }
}

idadeDirigir(idadeUsuario)


Exercício 2.
Resposta:
const periodo = prompt("Em qual turno você estuda?")

const identificaTurno = (periodo) => {
    if (periodo === "M") {
        console.log("Bom Dia!")
    } else if (periodo === "V") {
        console.log("Boa Tarde!")
    } else if (periodo === "N") {
        console.log("Boa Noite!")
    } else {
        console.log("Período não identificado.")
    }
}

identificaTurno(periodo)


Exercício 3.
Resposta:
const periodo = prompt("Em qual turno você estuda?")

const identificaTurno = (periodo) => {
    switch (periodo) {
        case "M":
            console.log("Bom Dia!")
            break 
        case "V":
            console.log("Boa Tarde!")
            break
        case "N":
            console.log("Boa Noite!")
        default:
            console.log("Período não identificado.")
            break
    }
}

identificaTurno(periodo)


Exercício 4.
Resposta:

const generoFilme = prompt("Qual o gênero do filme?")
const valorIngresso = Number (prompt("Qual o valor do ingresso?"))

const decisaoFilme = (genero, valor) => {
    if (genero === "Fantasia" && valor <= 15) {
        console.log("Bom Filme!")
    } else {
        console.log("Escolha outro filme! :(")
    }
}

decisaoFilme(generoFilme, valorIngresso)*/
