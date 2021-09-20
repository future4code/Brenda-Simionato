// //Exercicio 1

//  A - npm run nomeDoComando - Procura o comando especificado em "script"e o executa.\


// const countries = require("./countries")
// console.log(countries)

// const nome = process.argv[2]
// const idade = process.argv[3]
// const novaIdade = Number(idade) + 7

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)


const primeiroNumero = Number(process.argv[2])
const segundoNumero = Number(process.argv[3])

switch(operacao){
	case "soma":
		console.log(`Resultado da soma: ${primeiroNumero} + ${primeiroNumero}`)
		break;
	case "subt":
		console.log(`Resultado da subtração: ${segundoNumero} - ${primeiroNumero}`)
		break;
}

// const tarefas = [
//     "Lavar louça",
//     "Comprar leite"
// ]

// const novaTarefa = process.argv[2]

// const listaDeTarefas = tarefas + novaTarefa