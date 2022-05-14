// 5. Imprima na tela 30 ( trinta ) números ímpares.

const impares: Array<number> = [];

let numero = 1;

while (impares.length < 30) {
  if (numero % 2 !== 0) {
    impares.push(numero);
  }
  //   numero = numero + 1
  //   numero += 1
  numero++;
}

console.log(impares.length);

for (let index = 0; index < impares.length; index++) {
  console.log(`O número ${impares[index]} é um número impar`);
}
