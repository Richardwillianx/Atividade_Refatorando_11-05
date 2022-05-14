var num = 13;
var endNum = 73;
var soma = 0;
var totalNums = endNum - num + 1;
for (num; num <= endNum; num++) {
    soma += num;
}
var media = soma / totalNums;
console.log("A média é: ", media);
