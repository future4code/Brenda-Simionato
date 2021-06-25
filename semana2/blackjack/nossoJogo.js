// PROJETO SEMANAL - WFS02 - Blackjack.


// const mensagemBoasVindas = "Boas Vindas ao jogo de BlackJack!"
// console.log(mensagemBoasVindas)

// const baralho = [
//   {naipe: "copas", carta: "A", valor: 11},
//   {naipe: "copas", carta: "2", valor: 2},
//   {naipe: "copas", carta: "3", valor: 3},
//   {naipe: "copas", carta: "4", valor: 4},
//   {naipe: "copas", carta: "5", valor: 5},
//   {naipe: "copas", carta: "6", valor: 6},
//   {naipe: "copas", carta: "7", valor: 7},
//   {naipe: "copas", carta: "8", valor: 8},
//   {naipe: "copas", carta: "9", valor: 9},
//   {naipe: "copas", carta: "10", valor: 10},
//   {naipe: "copas", carta: "J", valor: 10},
//   {naipe: "copas", carta: "Q", valor: 10},
//   {naipe: "copas", carta: "K", valor: 10},
//   {naipe: "paus", carta: "A", valor: 11},
//   {naipe: "paus", carta: "2", valor: 2},
//   {naipe: "paus", carta: "3", valor: 3},
//   {naipe: "paus", carta: "4", valor: 4},
//   {naipe: "paus", carta: "5", valor: 5},
//   {naipe: "paus", carta: "6", valor: 6},
//   {naipe: "paus", carta: "7", valor: 7},
//   {naipe: "paus", carta: "8", valor: 8},
//   {naipe: "paus", carta: "9", valor: 9},
//   {naipe: "paus", carta: "10", valor: 10},
//   {naipe: "paus", carta: "J", valor: 10},
//   {naipe: "paus", carta: "Q", valor: 10},
//   {naipe: "paus", carta: "K", valor: 10},
//   {naipe: "ouros", carta: "A", valor: 11},
//   {naipe: "ouros", carta: "2", valor: 2},
//   {naipe: "ouros", carta: "3", valor: 3},
//   {naipe: "ouros", carta: "4", valor: 4},
//   {naipe: "ouros", carta: "5", valor: 5},
//   {naipe: "ouros", carta: "6", valor: 6},
//   {naipe: "ouros", carta: "7", valor: 7},
//   {naipe: "ouros", carta: "8", valor: 8},
//   {naipe: "ouros", carta: "9", valor: 9},
//   {naipe: "ouros", carta: "10", valor: 10},
//   {naipe: "ouros", carta: "J", valor: 10},
//   {naipe: "ouros", carta: "Q", valor: 10},
//   {naipe: "ouros", carta: "K", valor: 10},
//   {naipe: "espadas", carta: "A", valor: 11},
//   {naipe: "espadas", carta: "2", valor: 2},
//   {naipe: "espadas", carta: "3", valor: 3},
//   {naipe: "espadas", carta: "4", valor: 4},
//   {naipe: "espadas", carta: "5", valor: 5},
//   {naipe: "espadas", carta: "6", valor: 6},
//   {naipe: "espadas", carta: "7", valor: 7},
//   {naipe: "espadas", carta: "8", valor: 8},
//   {naipe: "espadas", carta: "9", valor: 9},
//   {naipe: "espadas", carta: "10", valor: 10},
//   {naipe: "espadas", carta: "J", valor: 10},
//   {naipe: "espadas", carta: "Q", valor: 10},
//   {naipe: "espadas", carta: "K", valor: 10},
// ]

// const geraIndiceDoBaralho = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const cartasUsuario = []
// const cartasComputador = []

// if(confirm("Deseja iniciar uma nova rodada?")) {
//   for (let i = 0; i < 2; i++) {
//     const indiceUsuario = geraIndiceDoBaralho(0, baralho.length - 1)
//     cartasUsuario.push(baralho[indiceUsuario])
//     baralho.splice(indiceUsuario, 1)

//     const indiceComputador = geraIndiceDoBaralho(0, baralho.length - 1)
//     cartasComputador.push(baralho[indiceComputador])
//     baralho.splice(indiceComputador, 1)
//   } 
//   const pontosUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
//   const pontosComputador = cartasComputador[0].valor + cartasComputador[1].valor

//   console.log("Usuário - cartas: ", cartasUsuario[0].carta, cartasUsuario[0].naipe, " ", cartasUsuario[1].carta, cartasUsuario[1].naipe, " - pontuação ", pontosUsuario)
//   console.log("Computador - cartas: ", cartasComputador[0].carta, cartasComputador[0].naipe, " ", cartasComputador[1].carta, cartasComputador[1].naipe, " - pontuação ", pontosComputador)

//   if(pontosUsuario > pontosComputador){
//     console.log("O usuário ganhou!")
//   } else if (pontosUsuario < pontosComputador) {
//     console.log("O computador ganhou!")
//   } else {
//     console.log("Empate!")
//   }

// } else {
//   console.log("O jogo acabou!")
// }
