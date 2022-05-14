/* ("Digite um dia da seman(0 a 6) */

//var diaDaSemana = 0;
var diaDaSemana = 1;
//var diaDaSemana = 2;
//var diaDaSemana = 3;
//var diaDaSemana = 4;
//var diaDaSemana = 5;
//var diaDaSemana = 6;
//var diaDaSemana = 7;

if (diaDaSemana === 0) {
  console.log("Domingo");
} else if (diaDaSemana === 1) {
  console.log("Segunda-feira");
} else if (diaDaSemana === 2) {
  console.log("Terça-feira");
} else if (diaDaSemana === 3) {
  console.log("Quarta-feira");
} else if (diaDaSemana === 4) {
  console.log("Quinta-feira");
} else if (diaDaSemana === 5) {
  console.log("#Sextou");
} else if (diaDaSemana === 6) {
  console.log("#Sabadou");
} else if (diaDaSemana > 6) {
  console.log("Digite um número de 0 a 6");
}
