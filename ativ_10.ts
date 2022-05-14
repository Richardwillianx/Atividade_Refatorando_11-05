let i: number = 10;
let soma10: number = 0;

do {
  i++;
} while (i <= 100);
{
  soma10 = +i;
  i++;
  console.log(`A soma de todos os valores é ${soma10}`);
}
