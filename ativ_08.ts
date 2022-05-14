/* ("Digite um dia da seman(0 a 6) */

//const diaDaSemana: number = 0;
//const diaDaSemana: number = 1;
//const diaDaSemana: number = 2;
const diaDaSemana: number = 3;
//const diaDaSemana: number = 4;
//const diaDaSemana: number = 5;
//const diaDaSemana: number = 6;
//const diaDaSemana: number = 7;

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
