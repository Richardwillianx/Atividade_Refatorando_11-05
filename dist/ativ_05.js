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
for (var index = 0; index < impares.length; index++) {
  console.log(
    "O n\u00FAmero ".concat(impares[index], " \u00E9 um n\u00FAmero impar.")
  );
}
