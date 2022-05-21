const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return solution(n - 1) + solution(n - 2);
}

console.log(solution(+input[0]));
