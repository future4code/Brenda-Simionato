// Exercícios de interpretação de código:
// Exercício 1.
// Resposta:

// A) 
// Nome: Amanda Rangel, Apelido: Mandi - 0
// Nome: Laís Petra, Apelido: Laura - 1 
// Nome: Letícia Chijo, Apelido: Chijo - 2


// Exercício 2. 
// Resposta:

// A) 
// Amanda Rangel, Laís Petra, Letícia Chijo.


// Exercício 3.
// Resposta:

// A) 
// Nome: Amanda Rangel, Apelido: Mandi
// Nome: Laís Petra, Apelido: Laura




// Exercícios de escrita de código:
// Exercício 1.
// Resposta:

// A) 
// const nomeDosPets = pets.map((pet) => {
//     return pet.nome
// })

// console.log(nomeDosPets)


// B) 
// const cachorroSalsicha = pets.filter((pet) => {
//     return pet.raca === "Salsicha"
//  })

//  console.log(cachorroSalsicha)


//  C) 
//  const cachorrosPoodles = pets.filter((pet) => {
//     return pet.raca === "Poodle"
// }) 

// const mensagens = cachorrosPoodles.map((cachorro) => {
//     return `Você ganhou um cumpom de desconto de 10% para tosar o/a ${cachorro.nome}.`
// })

// console.log(mensagens)



// Exercício 2.
// Resposta:

// A) 
// const nomesProdutos = produtos.map((produto) => {
//     return produto.nome
// })

// console.log(nomesProdutos)


// B)
// const nomeEPreco = produtos.map((produto) => {
//     return {"nome": produto.nome, "preço": produto.preco * 0.95}
// }) 

// console.log(nomeEPreco)


// C) 
// const bebidas = produtos.filter((produto) => {
//     return produto.categoria === "Bebidas"
//   })
  
//   console.log(bebidas)


// D) 
// const produtosYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")
// })

// console.log(produtosYpe)


// E) 
// const produtosYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")
// })

// const mensagens = produtosYpe.map((produto) => {
//          return `Compre ${produto.nome} por ${produto.preco}.`
// })

// console.log(mensagens)