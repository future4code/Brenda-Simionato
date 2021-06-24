// Exercícios de interpretação de código:

// Exercício 1.
// Resposta:

// A variável "valor" está recebendo o valor dela mesmo e somando com o "i", resultando assim, no console, o valor 10.


// Exercício 2.
// Resposta:

// A) 19, 21, 23, 25, 27, 30.

// B) Sim. Teria que ser criado um índice manual, recebendo 0, que fosse possível fazer a interação dele dentro do for.


// Exercício 3.
// Resposta: 
// *
// **
// ***
// ****


// Exercícios de escrita de código:

// Exercício 1. 
// Resposta:

// let bichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você possui?"))

// const quantidadeBichinhos = (numeroDePets) => {
//     let arrayBichinhos = []
//     if (numeroDePets <= 0){
//         console.log("Que pena! Você pode adotar um pet!")
//     } else{
//         for(let i = 0; i < numeroDePets; i++){
//             const nomePet = prompt("Qual o nome do seu pet?")
//             arrayBichinhos.push(nomePet)
//         }
      
//     }
//     console.log(arrayBichinhos)
// }

// quantidadeBichinhos(bichinhosDeEstimacao)



// Exercício 2.
// Resposta: const arrayOriginal = ([13, 22, 38, 47, 55, 61, 70, 89, 93, 101, 124])

// A) 
// const valoresDoArray = (conjuntoDeArray) =>{
//     for(let i = 0; i < conjuntoDeArray.length; i++) {
//         const elemento = conjuntoDeArray[i]
//         console.log(elemento)
//     }
// }

// valoresDoArray(arrayOriginal)

// B) 
// const valoresDoArray = (conjuntoDeArray) =>{
//     for(let i = 0; i < conjuntoDeArray.length; i++) {
//         const elemento = conjuntoDeArray[i]
//         console.log(elemento / 10)
//     }
// }

// valoresDoArray(arrayOriginal)

// C)
// const obtemNumerosPares = (arrayDeNumeros) => {
//     const arrayNumerosPares = []
//     for (let i = 0; i < arrayDeNumeros.length; i++) {
//         if(arrayDeNumeros[i] % 2 == 0){
//             arrayNumerosPares.push(arrayDeNumeros[i])
//         }
//     } 
//     console.log(arrayNumerosPares)
// }

// obtemNumerosPares(arrayOriginal)

// D) 
// const valoresDoArray = (conjuntoDeArray) =>{
//     for(let i = 0; i < conjuntoDeArray.length; i++) {
//     const elemento = conjuntoDeArray[i]
//     console.log("O elemento do índex ", i, " é: ", conjuntoDeArray[i])
//     }
// }

// valoresDoArray(arrayOriginal)

// E) 
// const descobreNumeros = (arrayDeNumeros) => {
//     let menorNumero
//     let maiorNumero

//     for(let valor of arrayDeNumeros) {
//         if(menorNumero == null || valor < menorNumero) {
//             menorNumero = valor 
//         }


//         if(maiorNumero == null || valor > maiorNumero){
//             maiorNumero = valor
//         }

//     }

//     console.log("O menor número do array é: ", menorNumero)
//     console.log("O maior número do array é:  ", maiorNumero)

//  }

//  descobreNumeros(arrayOriginal)
