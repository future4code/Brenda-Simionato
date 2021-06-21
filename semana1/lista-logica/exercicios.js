// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura"))
  const largura = Number(prompt("Digite a largura"))
  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Qual o seu nome?")
  const idadeUsuario = prompt("Qual a sua idade?")
  const emailUsuario = prompt("Qual o seu e-mail?")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

imprimeInformacoesUsuario

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Qual sua cor favorita?")
  const segundaCor = prompt("Qual sua segunda cor favorita?")
  const terceiraCor = prompt("Qual sua terceira cor favorita?")
  console.log([primeiraCor, segundaCor, terceiraCor])
}

imprimeTresCoresFavoritas
// EXERCÍCIO 06
function retornaStringEmMaiuscula(frase) {
  return frase.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]  
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const tamanhoArray = array.length
  return array[tamanhoArray - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]
  array[0] = ultimoElemento
  array[array.length-1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const frase1 = string1.toUpperCase()
  const frase2 = string2.toUpperCase()
  return frase1 == frase2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira o seu ano de nascimento"))
  const anoCarteira = Number(prompt("Insira o ano em que sua carteira foi emitida"))
  const idade = (anoAtual - anoNascimento)
  const tempoCarteira = (anoAtual - anoCarteira)
  const menosQue20 = idade <= 20 && idade <=50 && tempoCarteira >= 5
  const entre20E50 = idade > 20 && idade <=50 && tempoCarteira >= 10
  const acimaDe50 = idade > 50 && tempoCarteira >= 15
  const precisaOuNao = menosQue20 || entre20E50 || acimaDe50
  console.log(precisaOuNao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 = (ano % 400) == 0
  const multiplo4 = (ano % 4) == 0
  const multiplo100 = (ano % 100) == 0

  return multiplo400 || multiplo4 && !(multiplo100 && !multiplo400)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maior18Anos = prompt("Você tem mais de 18 anos?")
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo?")
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(maior18Anos == "sim" && ensinoMedioCompleto == "sim" && disponibilidadeHorario == "sim")
}