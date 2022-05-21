const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

function solution(n) {
  if (n <= 1) return 1;
  return n * solution(n - 1);
}

console.log(solution(+input[0]));
