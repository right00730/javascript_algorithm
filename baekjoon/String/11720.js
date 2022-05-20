// input :  영소문자, 영대문자, 숫자
// ouput : 입력값의 아스키코드

const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
const n = input[0];
const numbers = input[1];
console.log(input);
function solution(n, numbers) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Number(numbers[i]);
  }
  return sum;
}

console.log(solution(n, numbers));
