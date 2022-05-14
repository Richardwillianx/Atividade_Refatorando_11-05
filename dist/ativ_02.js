var executeAtiv02 = function () {
    var totalEleitores = 20;
    var votosEmBranco = 10;
    var votosNulos = 5;
    var votosValidos = 5;
    console.log("".concat((votosEmBranco / totalEleitores) * 100, "% votaram em branco"));
    console.log("".concat((votosNulos / totalEleitores) * 100, "% votaram nulos"));
    console.log("".concat((votosValidos / totalEleitores) * 100, "% votaram com sucesso"));
};
executeAtiv02();
