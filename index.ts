const execute = () => {
  const a: number = 6;
  const b: number = 6;
  const c: number = 6;

  if (!(a < b + c && b < a + c && c < a + b)) {
    console.log("Os números não foram um triângulo");
    return;
  }

  if (a === b || a === c || b === c) {
    console.log("Trângulo isósceles");
  }

  if (a !== b && b !== c && a !== c) {
    console.log("Trângulo escaleno");
  }

  if (a === b && b === c) {
    console.log("Trângulo equilatero");
  }
};

execute();
