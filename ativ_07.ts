const idade07: number = 18;
const habilitado07: string = "S";

if (idade07 >= 18) {
  if (habilitado07 === "S") {
    console.log("Vai lá, você pode dirigir!");
  } else if (habilitado07 === "N") {
    console.log("Infelizmente você não pode dirigir..");
  }
} else if (idade07 <= 18) {
  console.error("Você ainda não tem idade para dirigir..");
}
