```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const valorPorcentagemVendas = valorTotalVendas * 0.05
    const salarioFinal = valorPorcentagemVendas + 2000 + (100 * qtdeCarrosVendidos)
    return salarioFinal
}