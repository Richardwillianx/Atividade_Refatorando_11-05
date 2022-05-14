var idade = 19;
var habilitado = "S";

/* var idade = 27;
var habilitado = "N";

var idade = 15;
var habilitado = "N"; */

if (idade >= 18) {
  if (habilitado === "S") {
    console.log("Vai lá, você pode dirigir!");
  } else if (habilitado === "N") {
    console.log("Infelizmente você não pode dirigir..");
  }
} else if (idade <= 18) {
  console.error("Você ainda não tem idade para dirigir..");
}
