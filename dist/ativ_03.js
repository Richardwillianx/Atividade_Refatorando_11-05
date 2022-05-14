var executeAtiv03 = function () {
    var parcela = 10;
    var valorProduto = 20;
    var desconto = 0;
    var juros = 0;
    if (parcela === 1) {
        // avista
        desconto = valorProduto * 0.025;
    }
    else if (parcela > 5 && parcela <= 10) {
        juros = valorProduto * 0.06;
    }
    else {
        juros = valorProduto * 0.13;
    }
    var valorTotal = valorProduto + juros - desconto;
    var valorParcela = valorTotal / parcela;
    console.log("Valor de cada parcela: ".concat(valorParcela));
    console.log("Valor total: ".concat(valorTotal));
};
executeAtiv03();
