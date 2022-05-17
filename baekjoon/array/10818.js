const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");
const numbers = input[1].split(" ").map((x) => Number(x));
const n = Number(input[0]);
function solution(n, numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 1; i < n; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }
  return `${min} ${max}`;
}
console.log(solution(n, numbers));
