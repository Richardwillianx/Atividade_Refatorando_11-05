const executeAtiv03 = () => {
  const parcela: number = 10;
  let valorProduto = 20;

  let desconto: number = 0;
  let juros: number = 0;

  if (parcela === 1) {
    // avista
    desconto = valorProduto * 0.025;
  } else if (parcela > 5 && parcela <= 10) {
    juros = valorProduto * 0.06;
  } else {
    juros = valorProduto * 0.13;
  }

  const valorTotal: number = valorProduto + juros - desconto;

  const valorParcela: number = valorTotal / parcela;

  console.log(`Valor de cada parcela: ${valorParcela}`);
  console.log(`Valor total: ${valorTotal}`);
};

executeAtiv03();
