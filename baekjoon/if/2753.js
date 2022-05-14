const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const file = process.platform === "linux" ? "/dev/stdin" : "../ex.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");
const num = Number(input[0]);

function solution(year) {
  const yearFlag = 0;
  if (year % 4 === 0 && year % 100 !== 0) return 1;
  else if (year % 400 === 0) return 1;
  return yearFlag;
}
console.log(solution(num));
