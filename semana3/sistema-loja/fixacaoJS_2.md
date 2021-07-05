```function calculaPrecoTotal(quantidade) {
  let precoMaca 
  let custoTotalCompra
  
  if(quantidade < 12){
    precoMaca = 1.30
  } else {
    precoMaca = 1
  } 
  custoTotalCompra = quantidade * precoMaca
  return custoTotalCompra
}