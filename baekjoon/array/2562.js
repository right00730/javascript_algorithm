const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().split("\n");

function solution(numbers) {
  numbers = numbers.map((number) => Number(number));
  let max = 0;
  let idx = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      idx = i + 1;
    }
  }
  return max + "\n" + idx;
}

console.log(solution(input));
