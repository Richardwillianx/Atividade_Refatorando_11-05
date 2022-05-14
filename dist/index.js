// 5. Imprima na tela 30 ( trinta ) números ímpares.
var impares = [];
var numero = 1;
while (impares.length < 30) {
    if (numero % 2 !== 0) {
        impares.push(numero);
    }
    //   numero = numero + 1
    //   numero += 1
    numero++;
}
console.log(impares.length);
// console.log(impares);
for (var index = 0; index < impares.length; index++) {
    console.log("O n\u00FAmero ".concat(impares[index], " \u00E9 um n\u00FAmero impar"));
}
impares.forEach(function (numImpar) {
    return console.log("O n\u00FAmero ".concat(numImpar, " \u00E9 um n\u00FAmero impar"));
});
// numImpar = 1
// numImpar = 3
// numImpar = 5
for (var _i = 0, impares_1 = impares; _i < impares_1.length; _i++) {
    var numImpar = impares_1[_i];
    console.log("O n\u00FAmero ".concat(numImpar, " \u00E9 um n\u00FAmero impar"));
}
