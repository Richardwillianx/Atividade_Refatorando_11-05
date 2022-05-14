let num: number = 13;
let endNum: number = 73;
let soma: number = 0;

let totalNums: number = endNum - num + 1;

for (num; num <= endNum; num++) {
  soma += num;
}

let media: number = soma / totalNums;

console.log("A média é: ", media);
