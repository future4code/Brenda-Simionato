/*Exercícios de interpretação de código:

Exercício 1.
Resposta:

A - 10, 50.
B - Não seria impresso nada.


Exercício 2.
Resposta:

A - Recebe um parâmetro, deixa tudo em letras minúsculas, e verifica se existe a palavra 
cenoura no texto, retornando true ou false.
B - I True
II True
III False



Exercícios de escrita de código:
Exercício 1.
Resposta:

A - 
function imprimeDadosPessoais(){
    console.log("Meu nome é Brenda, tenho 24 anos, moro em Presidente Prudente e sou estudante.")
}

imprimeDadosPessoais()

B - function imprimeDadosPessoais(nome, idade, cidade, profissao){
    console.log(`Meu nome é ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)
}

imprimeDadosPessoais("Brenda", 24, "Presidente Prudente", "estudante")

Exercício 2.
Resposta:
A -
function somaDoisNumeros(numero1, numero2){
    const soma = numero1 + numero2
    return soma
}

console.log(somaDoisNumeros(24,30))

B -
function verificaNumeroMaior(numero1, numero2){
    return numero1 >= numero2
}

console.log(verificaNumeroMaior(24, 30))

C -
function verificaNumeroPar(primeiroNumero){
    return (primeiroNumero % 2) == 0

}
console.log(verificaNumeroPar(200))

D -
function mensagemMaiuscula(frase){
    console.log(frase.length)
    console.log(frase.toUpperCase())
}

mensagemMaiuscula("Sou estudante Labenu.")


Exercício 3.
Resposta: 
function soma(numero1, numero2){
    return numero1 + numero2
}

function subtrai(numero1, numero2){
    return numero1 - numero2
}

function multiplica(numero1, numero2){
    return numero1 * numero2
}

function divide(numero1, numero2){
    return numero1 / numero2
}

const primeiroNumero = Number (prompt("Digite o primeiro número"))
const segundoNumero = Number (prompt("Digite o segundo número."))

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`)
console.log(`Soma: ${soma(primeiroNumero, segundoNumero)}`)
console.log(`Diferença: ${subtrai(primeiroNumero, segundoNumero)}`)
console.log(`Multiplicação: ${multiplica(primeiroNumero, segundoNumero)}`)
console.log(`Divisão: ${divide(primeiroNumero, segundoNumero)}`)*/

