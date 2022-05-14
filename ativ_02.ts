const executeAtiv02 = () => {
  const totalEleitores: number = 60;
  const votosEmBranco: number = 30;
  const votosNulos: number = 10;
  const votosValidos: number = 3;

  console.log(`${(votosEmBranco / totalEleitores) * 100}% votaram em branco`);
  console.log(`${(votosNulos / totalEleitores) * 100}% votaram nulos`);
  console.log(`${(votosValidos / totalEleitores) * 100}% votaram com sucesso`);
};

executeAtiv02();
